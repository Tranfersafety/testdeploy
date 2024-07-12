import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  Password: {
    type: String,
    required: true,
  },
  pnumber: {
    type: String,
    required: true,
  },
  Profile_Image: {
    type: String,
    default: null,
    // validate: {
    //   validator: function (v) {
    //     return v === "False" || /^(ftp|http|https):\/\/[^ "]+$/.test(v);
    //   },
    // message: props => `${props.value} is not a valid URL!`
  },
  // },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  pinned: {
    type: [String],
    default: [],
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema, "Users");

export default User;
