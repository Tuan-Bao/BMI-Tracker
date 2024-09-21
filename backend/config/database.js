const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Mongo URI:", process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoBD connection successful");
  } catch (err) {
    console.error("MongoBD connection error: ", err.message);
    process.exit(1); // Dừng ứng dụng với mã lỗi 1, cho biết rằng đã xảy ra lỗi
  }
};

module.exports = connectDB;
