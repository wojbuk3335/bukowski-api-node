const express=require("express");
const router =express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests to /users"
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling POST requests to /users"
    })
})

router.get('/:id',(req,res,next)=>{
    const {id}=req.params;
    if(id==='special'){
        res.status(200).json({
            message:`You want to get data of the item with id:${id}`,
            id:id
        })
    }else{
        res.status(200).json({
            message:`You want to get data of the item with id:${id}`,
            id:id
        })
    }
})

router.patch('/:id',(req,res,next)=>{
    const {id}=req.params;
    if(id==='special'){
        res.status(200).json({
            message:`You want to update data of the item with id:${id}`,
            id:id
        })
    }else{
        res.status(200).json({
            message:`You want to update data of the item with id:${id}`,
            id:id
        })
    }
})

router.delete('/:id',(req,res,next)=>{
    const {id}=req.params;
    if(id==='special'){
        res.status(200).json({
            message:`You want to delete data of the item with id:${id}`,
            id:id
        })
    }else{
        res.status(200).json({
            message:`You want to delete data of the item with id:${id}`,
            id:id
        })
    }
})

module.exports=router