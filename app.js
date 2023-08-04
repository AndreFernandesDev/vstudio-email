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

const langs = {
  pt: {
    greeting: "Olá",
    greetingText: "Recebeu uma mensagem no seu website",
    cardTitle: "Detalhes",
    bottomText: "Entregue por",
  },
  en: {
    greeting: "Hello",
    greetingText: "You have received a new message on your website.",
    cardTitle: "Details",
    bottomText: "Delivered by",
  },
};

app.post("/send", async (req, res) => {
  const { to, details = [], lng = "en" } = req.body;
  if (!to) {
    return res
      .status(500)
      .json({ message: "Missing address. Ex: 'to: email@gmail.com'" });
  }

  if (!details) {
    return res.status(500).json({ message: "Missing details." });
  }

  const payload = {
    ...langs[lng],
    details,
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
    to: to,
    subject: "VStudio | Nova Mensagem!",
    html: html,
  };

  transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "Sent!" });
    }
  });
});

app.listen(port, () => {
  console.log(`VStudio | Email provider active on port ${port}.`);
});
