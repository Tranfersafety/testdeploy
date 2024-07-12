import TemporaryCar from "../models/temporaryCar.js";

const getCarById = async (id) => {
  try {
    const car = await TemporaryCar.findById(id); // ใช้ findById เพื่อค้นหารถตาม id
    console.log("ServiceCar", car);
    return car;
  } catch (error) {
    throw new Error("Error fetching car");
  }
};

const deleteCarById = async (idObject) => {
  const id = idObject.id;
  console.log("sending id:", id);
  const result = await TemporaryCar.findByIdAndDelete(id);
  console.log(result);
  return result;
};

const createCartem = async(data)=>{
  const carTem = new TemporaryCar(data)
  await  carTem.save()
  return carTem
}

const getAllCars = async () => {
  try {
    const cars = await TemporaryCar.find(); // ใช้ find() เพื่อค้นหารถทั้งหมด
    console.log("ServiceCars", cars);
    return cars;
  } catch (error) {
    throw new Error("Error fetching cars");
  }
};

export default { getCarById, deleteCarById,createCartem, getAllCars };
