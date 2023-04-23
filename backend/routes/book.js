const bookModel = require("../models/bookmodel");
const router = require("express").Router()

//Adding a book
router.post("/books", async (req,res)=>{
    try{
        const {title, author, description,date,publisher} = req.body;
        // let today = new Date()
        // const Dates = today.getDate();

        const books = await bookModel.create({
            title:title,
            author:author,
            description:description,
            date:date,
            publisher:publisher
        })
        res.json({
            status:"success",
            books
        })

    }catch(error){
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

// getting books
router.get("/books",async(req,res)=>{
    try{
        const {id}= req.params
        const books = await bookModel.find({id:id})
        res.json({
            status:"success",
            books
        })

    }catch(error){
        res.json({
            status:"failed",
            message:error.message
        })
        
    }
})

// updating books
router.put("/books/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const {title,author,description,date,publisher} = req.body;
        const update ={
            title:title,
            author:author,
            description:description,
            date:date,
            publisher:publisher
        }
        const books = await bookModel.findByIdAndUpdate(id,update,{new:true, runValidators:true})
        res.json({
            status:"success",
            update
        })

    }catch(error){
        res.json({
            status:"failed",
            message:error.message
        })
        
    }
})

//deleting books
router.delete("/books/:id", async(req,res)=>{
    try{
        
        const deletedbooks = await bookModel.findByIdAndDelete(req.params.id);
        if(!deletedbooks){
            return res.status(404).json({
                message:'not found'
            })
        }
        res.json({
            status:"successfully deleted"
        })
    }catch(error){
        res.json({
            status:"failed",
            message:error.message
        })
        
    }
})

module.exports=router;