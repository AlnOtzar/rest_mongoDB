import express from "express"
import router from "./routes/rutas.js"
import mongoose from "mongoose"
import cors from "cors"

mongoose.Promise=global.Promise
mongoose.connect('mongodb+srv://alanlopez320_db_user:<rFZ78k9kL6ZB5lN2>@cluster0.drbpq9u.mongodb.net/?appName=Cluster0')


const app = express();

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api",router)
app.listen(3001)