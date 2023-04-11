import db from "./db/connection.js";
import routes from "./routes/index.js" 
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express()
const PORT = process.env.PORT || 4614 // It will be 3000 unless we deploy, then it will be the first option

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use ("/", routes)

db.on("connected", () => {
    console.clear() // Clears the console
    console.log(chalk.blue("Connected to MongoDB!"))
    
    app.listen(PORT, () => {
        process.env.NODE_ENV === "production" 
        ? console.log(`Express server running in production pn port ${PORT}\n\n`) 
        : console.log(`Express server running in development on ${PORT}`)
    })
})