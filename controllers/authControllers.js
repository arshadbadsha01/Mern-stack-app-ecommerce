import userModels from "../models/userModels.js";
import { hashPassword } from "./../helpers/authHelpers.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // validation
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "email is Required" });
    }
    if (!password) {
      return res.send({ error: "password is Required" });
    }
    if (!phone) {
      return res.send({ error: "phone no is Required" });
    }
    if (!address) {
      return res.send({ error: "address is Required" });
    }

    // check user
    const existingUser = await userModels.findOne({ email });

    // existing user
    // if (existingUser) {
    //   return res.status(200).send({
    //     success: true,
    //     message: "Already Register Please Login",
    //   });
    // }
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Already registered. Please login",
      });
    }

    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModels({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "user register successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
