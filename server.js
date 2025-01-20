// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);

// console.log(user.username);

// fs.appendFile('greeting.txt','Hi' + user.username + '! \n',()=>{
// console.log('file is created')});

// const notes=require('./notes.js');
// console.log("ki bolche");
// var _=require('lodash');


// var age=notes.age;
// console.log(age);

// var data=["person","person",1,2,1,2,'name','age','2'];




//creating server

// const {db,db2}=require('./db');
//req.body


// const Person=mongoose.model('Person',Person2);

// const { default: mongoose } = require('mongoose');
// const MenuItem=db2.model('MenuItem', MenuItem2);


// (async () => {
//   try {
//     // Ensure connections are ready before performing operations
//     await Promise.all([
//       db1.asPromise(),
//       db2.asPromise(),
//     ]);

//     console.log('Databases are ready');

    // Insert into Hotels database
   

    // Insert into Menudb database
   

   
//   } catch (err) {
//     console.error('Error:', err);
//   }
// })();







// app.get('/', function (req, res) {
//   res.send('Welcome to my Hotel How can I help you')
// });
// app.get('/aalu',function(req,res){
//     res.send('ye le aalu');
// });
// app.post('/person',function(req,res){
// console.log("data Saved");
// });
// app.get('/idli',function(req,res){
//   var customized_idli={
//     name:'rava idli',
//     size:'10cm dia',
//     is_sambhar:true,
//     is_chutney:false
//   }
//   res.send(customized_idli);
// });


  // const data=req.body//assuming the request body conatains the person data

  //Create a new person document using the Mongoose model
  // const newPerson=new Person(data);
  // newPerson.name=data.name;
  // newPerson.age=data.age;
  // newPerson.mobile=data.mobile;
  // newPerson.email=data.email;
  // newPerson.address=data.address;

  //save the new person to the database
//   newPerson.save((error,savedPerson)=>{
//     if(error){
//       console.log('Error on saving person',error);
//       res.status(500).json({error:'Internal server error'});
//     }
//     else{
//       console.log('Data save succesfully');
//       res.status(200).json(savedPerson);
//     }
//   })


const express = require('express');
const db=require('./db');
const app = express();
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.listen(3000,()=>{
  console.log("listening on port 3000");
});


app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.get('/',async(req,res)=>{
try{
  res.send("Welcome to the Hotel");
}
catch(err){
  res.status(500).json({error:'Internal Server Error'});
  res.send(err);
}
});