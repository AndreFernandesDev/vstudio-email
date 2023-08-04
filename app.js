const Maizzle = require("@maizzle/framework");
const nodemailer = require("nodemailer");
const express = require("express");
require("dotenv").config();

const { notice } = require("./templates.js");

const port = process.env.PORT || 3000;
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

app.get("/", (req, res) => {
  res.send("Thanks Filipino!");
});

app.get("/send", async (req, res) => {
  res.status(200).json({ message: "Sent!" });
  const payload = {
    greeting: "Olá",
    greetingText: "Recebeu uma mensagem no seu website",
    cardTitle: "Detalhes",
    bottomText: "Delivered by",
    details: [
      { name: "Nome", value: "Dê" },
      { name: "Email", value: "dede@gmail.com" },
      {
        name: "Mensagem",
        value:
          "Eu quero estar com a minha beta grande, mas ela nao gota de eu... Estou tristeeeee",
      },
    ],
  };

  let mapped = Object.keys(payload).map((key) => {
    return key + ": " + JSON.stringify(payload[key]);
  });

  mapped = mapped.join("\n");
  const render = "---\n " + mapped + " \n---" + notice;

  const { html } = await Maizzle.render(render, {
    tailwind: {
      config: require("./tailwind.config.js"),
    },
    maizzle: require("./config.js"),
  });

  let mailOptions = {
    from: "info@vitoria.studio",
    to: "info@vitoria.studio",
    subject: "VStudio | Nova Mensagem!",
    html: html,
  };

  transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Email sent successfully!");
    }
  });
});

app.listen(port, () => {
  console.log(`VStudio | Email provider active on port ${port}.`);
});
