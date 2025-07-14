const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 中介軟體
// 只允許來自 http://localhost:3000 的跨域請求
// 只允許來自 http://localhost:3000 的跨域請求（用函式比對）
app.use(cors({
  origin: function(origin, callback) {
    // 若為 undefined，代表是同源或 curl 等本地請求
    if (!origin || origin === 'http://localhost:3000') {
      callback(null, true);
    } else {
      console.log('CORS blocked:', origin); // 除錯用
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.use(express.json());

// 路由
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: Date.now(),
    name,
    email
  };
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
