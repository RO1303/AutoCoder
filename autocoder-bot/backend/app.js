const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the backend service!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
