require("dotenv").config();



const MONGO_URI = "mongodb+srv://ommakwana1825:RQEoabuSC9IndGiK@cluster0.ef2mn.mongodb.net/?retryWrites=true&w=majority&appName=Lab3"
console.log("MONGO_URI:", MONGO_URI); // Debug log

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI, {  // Use the local variable here
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

app.use("/restaurants", restaurantRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
