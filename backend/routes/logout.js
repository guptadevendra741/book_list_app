const router = require("express").Router();

router.get("/logout",async(req,res)=>{
try{
    res.json({
        status:"success"
    })
}catch(error){
   res.json({
    status:"failed",
    message:error.message
   })

}
})

module.exports=router;