const express= require("express")
const app = express()
app.get("/",function(req,res){
    res.send("welcome le Dung to web app")
})

const port= process.env.port||8080;

app.listen(port,() => {
    console.log(port)
    console.log("nodejs start webserver");
})
