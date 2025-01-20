const express=require('express');
const router=express.Router();
const MenuItem=require('../models/MenuItem');
const { findByIdAndUpdate } = require('../models/person');


//post for menuItem
router.post('/',async(req,res)=>{


    try{
      const data=req.body;
      const newItem=new MenuItem(data);
  
      const response=await newItem.save();
      console.log('data saved');
      res.status(200).json(response);
  
    }
    catch(err){
  console.log(err);
  res.status(500).json({error:'Internal Server Error'});
    }});

    //get for menuItem
    router.get('/',async(req,res)=>{
        try{
          const data=await MenuItem.find();
          console.log('data fetched');
          res.status(200).json(data);
        }
        catch(err){
          console.log(err);
          res.status(500).json({error:'Internal Server Error'});
        }
      });
     

      //Parametirize menuItem on taste
       
      router.get('/:tastes',async(req,res)=>{
       try{
           const dishTaste=req.params.tastes;
           if(dishTaste=="sweet"||dishTaste=="spicy"||dishTaste=="sour"){
            const data=await MenuItem.find({taste:dishTaste});
            console.log("data founded and fetched");
            res.status(200).json(data);}
            else{
              console.log("Wrong work Type");
              res.status(400).json('not found');
            }
       }
       catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
       }
      });

      //router for updating the menuItem

      router.put('/:id',async(req,res)=>{
        try{
        const menuId=req.params.id;
        const forUpdate=req.body;
        const response=await MenuItem.findByIdAndUpdate(menuId,forUpdate,{ new:true,//Return the updated document
          runValidators:true,});
        if(!response){
          console.log('Wrong id');
          return res.status(400).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
        }
        catch{
          console.log(err);
          res.status(500).json({error:'Internal Server Error'});
        }
      });


      //router for deleting 

      router.delete('/:id',async(req,res)=>{
        try{
         const id=req.params.id;
         const response=await MenuItem.findByIdAndDelete(id);
         if(!response){
          return res.status(404).json({error:'MenuItem not found'});
        }
        console.log('data delete');
        res.status(200).json({message:'MenuItem deleted succesfully'});
        }
        catch(err){
          console.log(err);
          res.status(500).json({error:'Internal Server Error'});
        }
      });
      
      //Exporting menutemrouter
      module.exports=router;