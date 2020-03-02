var express = require('express');
var MongoClient = require('mongodb').MongoClient;
 
 
// connection string
var url = 'mongodb://localhost:27017/local';
 
MongoClient.connect(url, function (err, db) {
  console.log('MongoDB connected!')
 
  var app = express();
 
  app.get('/', (req, res) => {
    var collection = db.collection('seg')
 
    collection.find({}).toArray((err, docs) => {
      if (err)
        res.status(404).send('Not found')
      else
        res.send(docs)
    })
 
    // res.send('Hello World')
  })
 
  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
 
  // db.close()
 
})