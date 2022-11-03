import User from "../models/User.js";
import passport from "passport";

export const renderRegisterForm = (req, res) => res.render("auth/register");

export const register = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden." });
  }

  if (password.length < 4) {
    errors.push({ text: "La contraseña debe tener al menos 4 caracteres." });
  }

  if (errors.length > 0) {
    return res.render("auth/register", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  }

  // Look for email coincidence
  const userFound = await User.findOne({ email: email });
  if (userFound) {
    req.flash("error_msg", "Este Email ya se encuentra en uso.");
    return res.redirect("/auth/register");
  }

  // Saving a New User
  const newUser = new User({ name, email, password });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  req.flash("success_msg", "Te has registrado con exito!");
  res.redirect("/auth/login");
};

export const renderLoginForm = (req, res) => res.render("auth/signin");

export const login = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/auth/login",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Te has desconectado.");
    res.redirect("/auth/login");
  });
};
