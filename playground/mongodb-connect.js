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
        // db.collection('Todos').find({completed: true }).toArray().then((docs) =>
        //   {
        //   console.log('Todos');
        //   console.log(JSON.stringify(docs,undefined,2));
        //   },
        //   (err) =>
        //   {
        //   console.log('Unable to fetch Todos',err);
        //   }
        // );

        db.collection('Todos').find({completed: true }).count().then((count) =>
          {
          console.log('Todos Count',count);
          console.log(JSON.stringify(count,undefined,2));
          console.log(count);
          },
          (err) =>
          {
          console.log('Unable to fetch Todos',err);
          }
        );
  // /*  db.collection('Todos').insertOne(
  //     {
  //       text : 'Something Text',
  //       completed: false
  //     }
  //     , (err,result) =>
  //     {
  //         if(err) {return console.log('Unable to created Todos collection');}
  //         console.log(JSON.stringify(result.ops,undefined,2));
  //     });*/
  //
  //     db.collection('Users').insertOne(
  //       {
  //         name: 'Prathmesh',
  //         age: 25,
  //         location: 'Andheri'
  //       }, (err,result) =>
  //       {
  //         if(err) {return console.log('Not able to create Users collection');}
  //         console.log(JSON.stringify(result.ops,undefined,2));
  //       });

        //
db.close();
    });
