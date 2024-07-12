import Car from "../models/car.js";

const createCar = async (data) => {
  const car = new Car(data);
  await car.save();
  return car;
};

const getCarById = async (id) => {
  try {
    const car = await Car.findById(id); // ใช้ findById เพื่อค้นหารถตาม id
    console.log("ServiceCar", car);
    return car;
  } catch (error) {
    throw new Error("Error fetching car");
  }
};

const randomCars = async () => {
  const randomCar = await Car.aggregate([{ $sample: { size: 9 } }]);
  return randomCar;
};

const searchCar = async (searchQuery) => {
  const cars = await Car.find(searchQuery);
  console.log(cars);
  return cars;
};

// lastest car
const carLast = async () => {
  const lastest = await Car.find().sort({ year: -1 }).limit(9);
  return lastest;
};

const carBrand = async (brand) => {
  // ฟังก์ชัน asynchronous เพื่อค้นหา car ตาม brand
  return await Car.find({ brand }); // ค้นหา car ที่มี brand ตรงกับค่าที่ส่งเข้ามา
}

const carAll = async()=>{
  try {
    const All = await Car.find()
    return All
  } catch (error) {
    next(error)
  }
}
export default {
  createCar,
  carLast,
  searchCar,
  randomCars,
  getCarById,
  carBrand,
  carAll,
};
