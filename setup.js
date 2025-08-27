import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// حل بديل لـ __dirname في ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// دالة لإنشاء مجلد إذا لم يكن موجودًا
const ensureDir = (dir) => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
};

// دالة لإنشاء ملف مع محتوى
const createFile = (filePath, content) => {
  const fullPath = path.join(__dirname, filePath);
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log(`✅ تم إنشاء: ${fullPath}`);
};

// إنشاء المجلدات
const dirs = [
  'models',
  'routes',
  'controllers',
  'middleware',
  'config'
];

dirs.forEach(dir => ensureDir(dir));

// ملف .env
createFile('.env', `
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/restaurantDB
`.trim());

// server.js
createFile('server.js', `
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

// Routes
import menuRoutes from './routes/menu.js';
import orderRoutes from './routes/orders.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Connection to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(\`🚀 Server running on http://localhost:\${PORT}\`);
    });
  })
  .catch((err) => {
    console.error('❌ DB Connection Error:', err);
  });
`);

// models/Menu.js
createFile('models/Menu.js', `
import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
});

export default mongoose.model('Menu', menuSchema);
`);

// models/Order.js
createFile('models/Order.js', `
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    }
  ],
  total: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'preparing', 'ready', 'delivered'], 
    default: 'pending' 
  },
  tableNumber: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
`);

// controllers/menuController.js
createFile('controllers/menuController.js', `
import Menu from '../models/Menu.js';

export const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createItem = async (req, res) => {
  const item = new Menu(req.body);
  try {
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
`);

// controllers/orderController.js
createFile('controllers/orderController.js', `
import Order from '../models/Order.js';

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createOrder = async (req, res) => {
  const { items, tableNumber } = req.body;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = new Order({
    items,
    total,
    tableNumber
  });

  try {
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
`);

// routes/menu.js
createFile('routes/menu.js', `
import express from 'express';
const router = express.Router();
import { getMenu, createItem } from '../controllers/menuController.js';

router.get('/', getMenu);
router.post('/', createItem);

export default router;
`);

// routes/orders.js
createFile('routes/orders.js', `
import express from 'express';
const router = express.Router();
import { getOrders, createOrder, updateStatus } from '../controllers/orderController.js';

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id/status', updateStatus);

export default router;
`);

// package.json
createFile('package.json', `
{
  "name": "restaurant-backend",
  "version": "1.0.0",
  "description": "نظام إدارة مطعم باستخدام Node.js",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "morgan": "^1.10.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
}
`.trim());

console.log('\\n🎉 تم إنشاء جميع الملفات بنجاح!');
console.log('الآن قم بتنفيذ:');
console.log('   npm install');
console.log('   npm run dev');