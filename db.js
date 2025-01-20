const mongoose= require('mongoose');
//Define the MonogoDB connection URL

 const MongoURL='mongodb://localhost:27017/Hotels';//Replace 'mydatabase' with your database name
// const MongoURL2='mongodb://localhost:27017/Menudb';
// // 
// async ()=>{
    mongoose.connect(MongoURL);
   const db = mongoose.connection;
//    await 
// mongoose.connect(MongoURL2);
  //  const db2=mongoose.connection;


// mongoose.connect();
// 

//  const db = mongoose.createConnection(MongoURL);
// const db2 = mongoose.createConnection(MongoURL2);
// const MyModel2 = db2.model('MyModel', new mongoose.Schema({ name: String }));
db.on('connected',()=>{
    console.log('conected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconncted');
});
// db2.on('connected',()=>{
//     console.log('conected to MongoDB server');
// });

// db2.on('error',(err)=>{
//     console.log('MongoDB connection error',err);
// });

// db2.on('disconnected',()=>{
//     console.log('MongoDB disconncted');
// });

//Export the database connction

// module.exports={db,db2};
// module.exports=db2;





// Create separate connections
// const db1 = mongoose.createConnection(MongoURL);
// const db2 = mongoose.createConnection(MongoURL2);

// Event listeners for db1
// db1.on('connected', () => {
//   console.log('Connected to MongoDB Hotels database');
// });

// db1.on('error', (err) => {
//   console.error('MongoDB Hotels connection error:', err);
// });

// db1.on('disconnected', () => {
//   console.log('MongoDB Hotels disconnected');
// });

// Event listeners for db2
// db2.on('connected', () => {
//   console.log('Connected to MongoDB Menudb database');
// });

// db2.on('error', (err) => {
//   console.error('MongoDB Menudb connection error:', err);
// });

// db2.on('disconnected', () => {
//   console.log('MongoDB Menudb disconnected');
// });

// Export the database connections
// module.exports = { MyModel1, MyModel2 };
module.exports=db;