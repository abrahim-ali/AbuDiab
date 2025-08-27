import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import path from 'path';

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

// abrahim71192@gmail.com
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