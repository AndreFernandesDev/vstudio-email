const nodemailer = require("nodemailer");
const express = require("express");

// const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@vitoria.studio",
    pass: "4ndr3!Vitoria",
  },
});

let mailOptions = {
  from: "info@vitoria.studio",
  to: "andre.fernandesdev@gmail.com",
  subject: "Testing",
  html: "<h1>first email send from Nodejs</h1>",
};

transporter.sendMail(mailOptions, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully!");
  }
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`VStudio | Email provider active on port ${port}.`);
});