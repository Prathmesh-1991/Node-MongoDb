//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

var user = {name:'Prathmesh',Age: 25};
var {name} =user;
console.log(name);
    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
      if(err)
        {
          return console.log('Unable to connect to MOngoDB server');
        }
        console.log('Connected to MongoDB');

db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5943e2024ee71c5d84fb6d1b')},
{
  $set: {completed: true}
},
{
  returnOriginal: false
}).then((result) =>
{
  console.log(result);
},
(err) =>
{
  console.log('Not able to update Todos',err);
}
);
//db.close();
    });
