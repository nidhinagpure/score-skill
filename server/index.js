import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());






app.get("/health", (req,res) => {
    res.status(200).json({message:"Server is running"});
})


const PORT = 5002;

app.listen(PORT,() => {
    console.log(`Server is runing n ${PORT}`);
})