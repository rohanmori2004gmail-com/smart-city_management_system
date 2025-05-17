const express = require('express');
const cors = require('cors');
const contentController = require('./controllers/contentController');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/content', contentController.getContent);
app.put('/api/content/:section', contentController.updateContent);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
