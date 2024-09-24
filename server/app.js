import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";


dotenv.config()

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
    origin:[]
}));

app.get("/",(req,res)=>{
    res.send("Server running...")
});

const PORT = 4000;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});