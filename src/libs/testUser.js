import User from "../models/User.js";

export const createTestUser = async () => {
  const userFound = await User.findOne({ email: "test@localhost" });

  if (userFound) return;

  const newUser = new User({
    username: "tester",
    email: "test@localhost",
  });

  newUser.password = await newUser.encryptPassword("testeando123");

  const admin = await newUser.save();

  console.log("Usuario para Testeo creado", admin);
};