const express = require('express');
const bodyParser = require('body-parser');
const configRoutes = require('./routes/configRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/configurations', configRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
