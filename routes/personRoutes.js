const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

//Post route to add a person
router.post('/',async(req,res)=>{


    try{
      const data=req.body;
      const newPerson=new Person(data);
  
      const response=await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
  
    }
    catch(err){
  console.log(err);
  res.status(500).json({error:'Internal Server Error'});
    }});

    //get route to get the person
    router.get('/',async(req,res)=>{
        try{
       const data=await Person.find();
       console.log('data fetched');
       res.status(200).json(data);
        }
        catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
        }
      });

      //router for work type
      router.get('/:workType',async(req,res)=>{
        try{
          const workType=req.params.workType;
          if(workType=="chef"||workType=="waiter"||workType=="manager"){
          const data=await Person.find({work:workType});
          console.log('data fetched');
          res.status(200).json(data);}
          else{
            console.log('Wrong workType');
            res.status(400).json('Not Found');
          }
        }
        catch(err){
          console.log(err);
          res.status(500).json({error:'Internal Server Error'});
        }
      });

          //router for updating person
      router.put('/:id',async(req,res)=>{
      try{
          const personId=req.params.id;//Extract id from URL parameter
          const updatedPersonData=req.body;

          const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//Return the updated document
            runValidators:true,//Run Mongoose validation
          });

          if(!response){
            return res.status(400).json({error:'person not found'});
          }

          console.log('data updated');
          res.status(200).json(response);
      }
      catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
      
      }
      });

     //delete router
      router.delete('/:id',async(req,res)=>{
      try{
      const personId=req.params.id;//Extract the person's Id from the URL parameter
      
      //assuming you have a person model
      const response=await Person.findByIdAndDelete(personId);
      if(!response){
        return res.status(404).json({error:'Person not found'});
      }
      console.log('data delete');
      res.status(200).json({message:'person deleted succesfully'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
      }
      });



      //Exporting router
      module.exports=router;