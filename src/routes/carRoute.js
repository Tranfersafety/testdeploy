import express from "express";
import * as carController from "../controllers/carController.js";

const router = express.Router();

// API - 1 Post
router.post("/", carController.createCar);

// API - RANDOM
router.get("/car-random", carController.randomAllCars);

// API - Sort lastest
router.get("/Car-New", carController.carLastest);

// API - SearchCar
router.post("/searchbar", carController.searchCar);

// API - Get Car By ID
router.get("/:id", carController.getCarById);

// API - Get Car By Brand
router.get('/brand/:brand', carController.carBrand); // สร้าง route เพื่อจัดการคำขอ GET ที่ path /brand/:brand และเรียกใช้ฟังก์ชัน carBrand จาก controller

// API - GET CAR ALL
router.get("/",carController.getAll)


export default router;
