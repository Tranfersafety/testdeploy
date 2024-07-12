import carService from "../services/carService.js";
import NotFoundError from "../error/NotFoundError.js"

// API - Create Car
const createCar = async (req, res, next) => {
  try {
    const {
      headline,
      brand,
      model,
      type,
      year,
      mileage,
      color,
      fuel,
      enginecap,
      cushion,
      seat,
      gear,
      price,
      pnumber,
      address,
      additionalInfo,
      file1,
      file2,
      file3,
      file4,
      file5,
      file6,
      latitude,
      longtitude,
      isSell,
      adminDescription,
      Seller_User,
      
    } = req.body;
    const data = {
      headline,
      brand,
      model,
      type,
      year,
      mileage,
      color,
      fuel,
      enginecap,
      cushion,
      seat,
      gear,
      price,
      pnumber,
      address,
      additionalInfo,
      file1,
      file2,
      file3,
      file4,
      file5,
      file6,
      latitude,
      longtitude,
      isSell,
      adminDescription,
      Seller_User,
      
    };
    const car = await carService.createCar(data);

    res.status(201).json({ message: "Car Created", data: car });
  } catch (error) {
    next(error);
  }
};

// API - RANDOM

const randomAllCars = async (req, res, next) => {
  try {
    const result = await carService.randomCars();
    res.status(201).json({ message: "Random car success", result });
  } catch (error) {
    next(error);
  }
};

const searchCar = async (req, res, next) => {
  try {
    const query = req.body.query;
    if (query === "") {
      return { message: "not found" };
    }
    const searchQuery = { $or: [] };
    let searchableFields = [];
    console.log(typeof query);
    if (typeof query == "string") {
      searchableFields = [
        "headline",
        "brand",
        "model",
        "type",
        "color",
        "fuel",
        "cushion",
        "gear",
        "address",
        "additionalInfo",
      ];
      searchableFields.forEach((field) => {
        searchQuery.$or.push({ [field]: new RegExp(query, "i") });
      });
    } else {
      searchableFields = ["year", "mileage", "enginecap", "seat", "price"];
      searchableFields.forEach((field) => {
        searchQuery.$or.push({ [field]: query });
      });
    }
    const cars = await carService.searchCar(searchQuery);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// car lastest
const carLastest = async (req, res, next) => {
  try {
    const last = await carService.carLast();
    res.json(last);
  } catch (error) {
    res.status(400).json({ message: "i here tu" });
  }
};

// API - Get Car By ID
const getCarById = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const car = await carService.getCarById(id);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

//API - Car by Brand
const carBrand = async (req, res, next) => {
  try {
    const { brand } = req.params; 
    const car = await carService.carBrand(brand);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

const getAll = async(req,res,next)=>{
  try {
    const All = await carService.carAll()
    res.status(200).json(All)
    if(!All){
      throw new NotFoundError("ไม่พบสิ่งที่คุณต้องการ")
    }
  } catch (error) {
    next(error)
  }
}
  
export {
  createCar,
  getCarById,
  searchCar,
  carLastest,
  randomAllCars,
  carBrand,
  getAll,
};
