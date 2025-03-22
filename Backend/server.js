import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";



dotenv.config();

const corsOptions = {
  origin: 'http://localhost:1234', // Replace with your frontend's origin
  methods: 'GET, POST, PUT, DELETE, OPTIONS', // Allowed HTTP methods
  allowedHeaders: 'Content-Type, Authorization', // Allowed headers
};
console.log("MongoDB URI:", process.env.MONGO_URL);



const app= express();
const port=3000;
const uri=process.env.MONGO_URL;
app.use(bodyParser.json())
app.use(express.static('public'))
const client= new MongoClient( uri,{
  serverApi:{
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors:true
  }
})

app.use(cors(corsOptions))

const db=client.db('AgroAdvisors');
const users=db.collection("users");

//  function to register thr user 
async function register(data,res){
  try {
    await client.connect();
    const {username,password}=data;
    const query={
      email:username,
      password:password
    }
    const existinguser= await users.findOne({'email':username})
    console.log(existinguser)
    if(existinguser){
      return res.status(400).json({message: 'User already registerd'})
    }else{
      const result= await users.insertOne(query)
      if(result.insertedId){
        return res.status(200).json({message:`User Registered UID: ${result.insertedId} .`})
      }
    } 
  } catch (error) {
    console.log(error)
  } finally{
    await client.close();
  }
}

const LoginUser=async (data,res)=>{
  const {username,password}=data;
  try{
    await client.connect();
    const existinguser= await users.findOne({'email': username})
    console.log(existinguser)
    if(!existinguser){
      return res.status(400).json({message:"User not found Please Register "})
    }else{
      if(existinguser.password===password){
        return res.status(200).json({message:`UId ;${existinguser._id}`})
      }else{
        return res.status(400).json({message: "Please enter the correct password"})
      }
    }

  }
  catch(error){
    console.log(error)
  }
  finally{
    client.close();
  }

}



console.log(client?.appName)

app.post('/signup')

app.get('/api/signup',(req,res)=>{
    res.json(
      {"name ": "Tajinder singh"}
    )
})

app.post('/api/signup',(req,res)=>{
    
    const { username, password } = req.body;
    console.log(`username: ${username} and password:${password}`)
  // function to register the user  
  register(req.body,res);
})
app.post('/api/login',(req,res)=>{
  const{username,password}=req.body;
  console.log(`username : ${username} password: ${password} .`)

  LoginUser(req.body,res);
})



app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
})

