const express= require("express")
const app = express()
app.get("/",function(req,res){
    res.send("welcome to web app")
})
app.listen(3000,() => {
    console.log("nodejs start webserver");
})