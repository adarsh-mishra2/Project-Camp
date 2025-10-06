import dotenv from "dotenv";
import app from "./app.js"

dotenv.config({
    path:"./.env",
})


const port = process.env.PORT || 3000

// app.get()


app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
    
})

 