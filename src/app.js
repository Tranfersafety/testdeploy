import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import notfoundMiddleware from "./middleware/notfoundMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoute.js";
import carRoutes from "./routes/carRoute.js";
import temporaryCarRoute from "./routes/temporaryCarRoute.js";
import transactionRoute from "./routes/transactionRoute.js";
import carlistRoute from "./routes/carlistRoute.js";
import bodyParser from 'body-parser';

//Facilitate
dotenv.config();
const app = express();

// Middleware
app.use(cors()); // เปิดใช้งาน CORS
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// > Static Files
app.use(express.static('public'));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/temporarycars", temporaryCarRoute);
app.use("/api/transaction", transactionRoute);
app.use("/api/car-list", carlistRoute);


//Handle404
app.use(notfoundMiddleware);
//Handle Error
app.use(errorHandlerMiddleware);
// Connect to database
connectDB();

export default app;