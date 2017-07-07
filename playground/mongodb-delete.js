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
// deleteMany
// db.collection('Todos').deleteMany({text : 'Walk the dog'}).then((result) =>
// {
//   console.log('Deleted COUNT',result.result.n);
// });

//deleteMany

db.collection('Todos').deleteOne({text : 'Walk the dog'}).then((result) =>
{
   console.log('Deleted COUNT',result);
});

//findOneAndDelete
db.collection('Todos').findOneAndDelete({text : 'Something Text'}).then((result) =>
{
   console.log('Deleted COUNT',result);
});
//db.close();
    });
