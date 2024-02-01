import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import auth_router from "./routes/auth_router.js";
import category_routes from "./routes/category_routes.js";
import cors from 'cors'; //cross origin platform sharing




const app = express();



app.use(express.json());
app.use(cors());
app.use(morgan("dev")); // simplifies errors and handles http requests

dotenv.config({path: './config.env'});



dotenv.config();
connectDB();






app.use("/api/v1/auth", auth_router);
app.use("/api/v1/categories", category_routes);





app.listen(8080);

