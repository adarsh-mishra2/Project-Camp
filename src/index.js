import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env",
})


const port = process.env.PORT || 3000

// app.get()


connectDB()
.then(()=>{
    app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
    
})
})
.catch((err)=>{
    console.error("MongoDb connection error", err)
})

 