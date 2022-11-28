const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
const port=4000;
console.log(Register)
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://jahnavi:jahnavi@cluster0.eckk9p7.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("connected mongodb database")
})
.catch((err)=>{
	console.log(err)

})
app.post("/add",(req,res)=>{
	//const(username,password)=req.body
	/*const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()*/
	const username="dummy",password="dummy"
	const newUser=new Register({
		username,password
	})
	newUser.save()
	res.send("dummy")
})
app.get("/",(req,res)=>{
	res.send("server is ready")

})


app.listen(port,()=>console.log("sever is started on port"))