const express = require("express");
const UserRouter = require("./routes/user");
const User = require("./models/user_model");
require("./db/mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);
  console.log(email);
  console.log(password);
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.send("registered Succesfully, Login to enter!");
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

app.listen(5000, () => {
  console.log("server is running on port 3000");
});
