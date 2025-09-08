import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import path from 'path';
import multer from 'multer'; // ← أضف هذه المكتبة
import bcrypt from 'bcrypt'; // ← نستخدمه لتشفير كلمة المرور

dotenv.config();

// حل __dirname في ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));


// تهيئة Resend
const resendClient = new Resend(process.env.Resend_URI);

app.use(express.static(path.join(__dirname, 'public')));


// --- تخزين كلمات المرور للمشرفين (في ملف أو قاعدة بيانات لاحقًا) ---
const SALT_ROUNDS = 10;

// تحميل بيانات المشرف من البيئة
const loadAdmins = () => {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    console.error('❌ يجب تحديد ADMIN_USERNAME و ADMIN_PASSWORD في ملف .env');
    process.exit(1);
  }

  // تشفير كلمة المرور عند التشغيل
  const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

  // إرجاع مصفوفة تحتوي على المشرف (في الذاكرة فقط)
  return [
    {
      id: 1,
      username,
      password: hashedPassword
    }
  ];
};

// تحميل المشرفين إلى الذاكرة
let admins = loadAdmins();

// --- نقطة نهاية تسجيل الدخول ---
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;

  const admin = admins.find(a => a.username === username);
  if (!admin) {
    return res.status(401).json({ error: 'Falscher Benutzername oder falsches Passwort' });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Falscher Benutzername oder falsches Passwort' });
  }

  // نعود برمز مصادقة بسيط (يمكنك استخدام JWT لاحقًا)
  res.json({ success: true, token: 'admin-auth-token-2025' });
});



// مسار ملف البيانات
const dataPath = path.join(__dirname,'data', 'db.json');
// جعل مجلد uploads قابلاً للوصول
app.use('/uploads', express.static('uploads'));

// تهيئة رفع الملفات
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // الملفات تُرفع هنا
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// قراءة البيانات من الملف
const readData = () => {
  if (!fs.existsSync(dataPath)) {
    // إذا لم يوجد الملف، نُنشأ واحدًا
    const initialData = { blogPosts: [] };
    fs.writeFileSync(dataPath, JSON.stringify(initialData, null, 2));
    console.log('تم إنشاء ملف db.json');
    return initialData;
  }

  const rawData = fs.readFileSync(dataPath, 'utf8');

  if (rawData.trim() === '') {
    // إذا كان الملف فارغًا
    const initialData = { blogPosts: [] };
    fs.writeFileSync(dataPath, JSON.stringify(initialData, null, 2));
    console.log('الملف كان فارغًا، تم تهيئته');
    return initialData;
  }

  try {
    return JSON.parse(rawData);
  } catch (err) {
    console.error('خطأ في تحليل JSON:', err.message);
    // إصلاح تلقائي: إعادة تهيئة الملف
    const initialData = { blogPosts: [] };
    fs.writeFileSync(dataPath, JSON.stringify(initialData, null, 2));
    console.log('تم إصلاح الملف التالف');
    return initialData;
  }
};
// كتابة البيانات إلى الملف
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
};

// --- API Routes ---

// GET: جميع المقالات المنشورة
app.get('/api/blog', (req, res) => {
  const data = readData();
  const publishedPosts = data.blogPosts.filter(p => p.published);
  res.json(publishedPosts);
});

// GET: مقالة واحدة حسب slug
app.get('/api/blog/:slug', (req, res) => {
  console.log('تم طلب slug:', req.params.slug); // 🔍 تسجيل الطلب

  const data = readData();
  console.log('عدد المقالات في db.json:', data.blogPosts.length); // 🔍 كم مقالة؟

  const post = data.blogPosts.find(p => {
    console.log(`مقارنة: "${p.slug}" === "${req.params.slug}" -> ${p.slug === req.params.slug}`);
    return p.slug === req.params.slug && p.published;
  });

  if (!post) {
    console.log('❌ لم يتم العثور على المقالة بالـ slug:', req.params.slug);
    return res.status(404).json({ error: 'مقال غير موجود' });
  }

  console.log('✅ المقالة وُجدت:', post.title.de || post.title.en);
  res.json(post);
});

// POST: إضافة مقالة جديدة
app.post('/api/blog', upload.single('image'), (req, res) => {
  const data = readData();
  const body = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : body.image;

  const newPost = {
    id: Date.now().toString(),
    title: JSON.parse(body.title),
    content: JSON.parse(body.content),
    slug: body.slug,
    image: image,
    published: body.published === 'true',
  };

  // تحقق من تكرار slug
  const exists = data.blogPosts.some(p => p.slug === newPost.slug);
  if (exists) return res.status(400).json({ error: 'الـ slug مكرر' });

  data.blogPosts.push(newPost);
  writeData(data);
  res.status(201).json(newPost);
});

// PUT: تعديل مقالة حسب ID
app.put('/api/blog/:id', upload.single('image'), (req, res) => {
  const data = readData();
  const body = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : body.image;

  const index = data.blogPosts.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'مقال غير موجود' });

  const updatedPost = {
    ...data.blogPosts[index],
    title: JSON.parse(body.title),
    content: JSON.parse(body.content),
    slug: body.slug,
    image: image,
    published: body.published === 'true',
  };

  // تجنب تكرار slug
  const duplicate = data.blogPosts.find(p => p.slug === updatedPost.slug && p.id !== req.params.id);
  if (duplicate) return res.status(400).json({ error: 'الـ slug مكرر' });

  data.blogPosts[index] = updatedPost;
  writeData(data);
  res.json(updatedPost);
});

// DELETE: حذف مقالة حسب ID
app.delete('/api/blog/:id', (req, res) => {
  const data = readData();
  const index = data.blogPosts.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'مقال غير موجود' });

  data.blogPosts.splice(index, 1);
  writeData(data);
  res.json({ message: 'تم الحذف بنجاح' });
});


// API Route: إرسال عرض السعر
app.post('/api/send-quote', async (req, res) => {
  try {
    const { name, email, service, projectDetails, budget, deadline } = req.body;

    // التحقق من البيانات
    if (!name || !email || !service || !projectDetails) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // إرسال البريد عبر Resend
    const emailResponse = await resendClient.emails.send({
      from: 'onboarding@resend.dev', // يمكنك تغييره لاحقًا
      to: ['abrahim71192@gmail.com'], // البريد الذي تستقبل عليه
      subject: `طلب عرض سعر جديد: ${service}`,
      reply_to: email, // حتى ترد على العميل مباشرة من البريد
      text: `
        تم استلام طلب عرض سعر جديد:

        الاسم: ${name}
        البريد: ${email}
        الخدمة: ${service}
        التفاصيل: ${projectDetails}
        الميزانية: ${budget || 'غير محددة'}
        الموعد النهائي: ${deadline || 'غير محدد'}

        يمكنك الرد على هذا البريد مباشرة.
      `,
      html: `
        <h2>طلب عرض سعر جديد</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>الخدمة:</strong> ${service}</p>
        <p><strong>التفاصيل:</strong><br>${projectDetails.replace(/\n/g, '<br>')}</p>
        <p><strong>الميزانية:</strong> ${budget || 'غير محددة'} SAR</p>
        <p><strong>الموعد النهائي:</strong> ${deadline || 'غير محدد'}</p>
        <hr>
        <p><em>يمكنك الرد على هذا البريد مباشرة للرد على العميل.</em></p>
      `,
    });

    res.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // التحقق من الحقول
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // إرسال البريد عبر Resend
    const emailResponse = await resendClient.emails.send({
      from: 'onboarding@resend.dev',
      to: ['abrahim71192@gmail.com'], // بريدك لتستقبل عليه
      reply_to: email, // حتى ترد على العميل مباشرة
      subject: `رسالة تواصل جديدة من ${name}`,
      text: `
        اسم المرسل: ${name}
        البريد: ${email}
        الهاتف: ${phone || 'غير متوفر'}
        الرسالة: ${message}
      `,
      html: `
        <h2>رسالة تواصل جديدة</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${phone || 'غير متوفر'}</p>
        <p><strong>الرسالة:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>يمكنك الرد على هذا البريد مباشرة.</em></p>
      `,
    });

    res.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// اتصال بقاعدة البيانات
app.listen(PORT, () => {
  console.log(`✅ Der Server arbeitet an http://localhost:${PORT}`);
});
