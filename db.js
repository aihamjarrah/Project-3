const mongoose = require("mongoose");
const db = mongoose.connection;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
const connection = mongoose.connect(process.env.DB_URL, options, () => {
  console.log("The DataBase connected");
});
