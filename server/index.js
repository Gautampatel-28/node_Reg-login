const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Register endpoint
app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.status(201).json(employee)) // 201 Created
    .catch(err => res.status(500).json({ error: err.message }));
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await EmployeeModel.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.status(200).json("Success");
      } else {
        res.status(401).json("Incorrect password");
      }
    } else {
      res.status(404).json("No record found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
