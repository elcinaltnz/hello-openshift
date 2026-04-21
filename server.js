const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'App is healthy!' });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'OpenShift Hello App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    hostname: require('os').hostname()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
