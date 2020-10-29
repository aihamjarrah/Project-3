const jwt = require("jsonwebtoken");
const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { carModel, userModel, permessions } = require("./schema");
const { options } = require("./routes");

require("dotenv").config();
const register = async (information) => {
  try {
    if (information.Key === process.env.adminKey) {
      const newUser = new userModel({
        email: information.email,
        password: information.password,
        name: information.name,
        phoneNumber: information.phoneNumber,
        role: "admin",
      });
      newUser
        .save()
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
      return "User has been created successfuly";
    } else {
      const newUser = new userModel({
        email: information.email,
        password: information.password,
        name: information.name,
        phoneNumber: information.phoneNumber,
        role: "user",
      });
      newUser
        .save()
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
      return "User has been created successfuly";
    }
  } catch (err) {
    console.error(err);
    return "User exists";
  }
};
const login = async (loginInfo) => {
  const searchUser = await userModel.findOne({ email: loginInfo.email });
  if (searchUser) {
    console.log(searchUser);
    console.log(loginInfo.password, searchUser.password);
    if (await bcrypt.compare(loginInfo.password, searchUser.password)) {
      if (searchUser.role === "admin") {
        console.log("test");
        const payLoad = {
          permession: permessions.admin,
          email: searchUser.email,
        };
        const options = { expiresIn: process.env.token_expiration };
        return await jwt.sign(payLoad, process.env.secret, options);
      } else {
        console.log("test2");
        const payLoad = {
          permession: permessions.user,
          email: searchUser.email,
        };
        const options = { expiresIn: process.env.token_expiration };
        return await jwt.sign(payLoad, process.env.secret, options);
      }
    }
    return "Invalid password";
  } else {
    return "User is not registerd";
  }
};
const getCars = async function () {
  return await carModel.find({});
};
// const updateCarModel = async (data) => {
//   const update = await carModel.update(
//     { U: data.oldData },
//     { New: data.newData },
//     (err, result) => {
//       if (err) throw err;
//       console.log("Update result :", result);
//     }
//   );
// };

const getUsers = () => {
  return userModel.find({});
};
const addCar = (color, plate, type, engine, model, year) => {
  const car = new carModel({
    color: color,
    plate: plate,
    type: type,
    engine: engine,
    model: model,
    year: year,
  });
  car
    .save()
    .then((result) => {
      console.log("Result", result);
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
};
const findCar = async (plateNumber) => {
  return await carModel.find({
    plate: plateNumber,
  });
};
module.exports = {
  register,
  login,
  getCars,
  getUsers,
  addCar,
  findCar,
};
