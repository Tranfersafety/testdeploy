import mongoose from "mongoose";

const temporaryCarSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  enginecap: {
    type: Number,
    required: true,
  },
  cushion: {
    type: String,
    required: true,
  },
  seat: {
    type: Number,
    required: true,
  },
  gear: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pnumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: false,
  },
  file1: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  file2: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  file3: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  file4: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  file5: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  file6: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  createOn: { type: Date, default: new Date().getTime() },
  latitude: {
    type: String,
    required: false,
    default: null,
  },
  longitude: {
    type: String,
    required: false,
    default: null,
  },
  Seller_User: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    default: null,
    ref: "User", // Assuming there is a User model
  },
});

const TemporaryCar = mongoose.model(
  "TemporaryCar",
  temporaryCarSchema,
  "TemporaryCars"
);

export default TemporaryCar;
