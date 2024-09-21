const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const bmiRoutes = require("./routes/routes");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/errorMiddleware");
require("dotenv").config();

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/bmi", bmiRoutes);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server is running on port ${port}`));
