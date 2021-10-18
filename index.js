const { json } = require('express')
const express = require('express')
const { router } = require('./src/routes/todos');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(json({limit:'5mb'}));
app.use('/api/todos', router)

app.listen(4000, () => {
  console.log('Quali-Service on port 4000');
});