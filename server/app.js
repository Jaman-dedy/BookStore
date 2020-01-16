const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
mongoose
  .connect(
    'mongodb+srv://jaman:yZtb6RBc8sOnu59b@cluster0-xjbwe.mongodb.net/gphql-db?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('connected to the db');
  })
  .catch(error => {
    console.log('connection failed', error);
  });
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('works');
});
