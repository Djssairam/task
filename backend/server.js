// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files from React build

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sairam@2002',
  database: 'banner_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// API Endpoints
app.get('/api/banner', (req, res) => {
  connection.query('SELECT * FROM banner LIMIT 100', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

app.post('/api/banner', (req, res) => {
  const { description, link, timer } = req.body;
  connection.query('UPDATE banner SET description = ?, link = ?, timer = ? WHERE id = 1', [description, link, timer], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(200);
  });
});

// Serve React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
