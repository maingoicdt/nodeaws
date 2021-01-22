const express= require("express")
const app = express()
app.get("/",function(req,res){
    res.send("welcome to web app")
})

const port= process.env.port  || 3000;

app.listen(port,() => {
    console.log("nodejs start webserver");
})