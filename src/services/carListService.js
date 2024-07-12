import User from "../models/user.js";
import Car from "../models/car.js";

const getcar = async (id) => {
  const newId = id.id;
  console.log("service Id", newId);
  const user = await User.findById(newId);
  console.log("service user:", user);
  const cars = await Car.find({ _id: { $in: user.pinned } });
  return cars;
};

const togglePin = async (userId, carId, action) => {
  const user = await User.findById(userId);

  if (action === 'add' && !user.pinned.includes(carId)) {
    user.pinned.push(carId);
  } else if (action === 'remove' && user.pinned.includes(carId)) {
    user.pinned = user.pinned.filter(id => id !== carId);
  }

  await user.save();
  return user;
};

export default { getcar, togglePin };
