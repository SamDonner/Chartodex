const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const charts = require('./routes/api/charts');
const users = require('./routes/api/users');
const logs = require('./routes/api/logs');
const portfolio = require('./routes/api/portfolio');

const app = express();

app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/charts', charts);
app.use('/api/users', users);
app.use('/api/logs', logs);
app.use('/api/portfolio', portfolio);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  })
}
  
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));