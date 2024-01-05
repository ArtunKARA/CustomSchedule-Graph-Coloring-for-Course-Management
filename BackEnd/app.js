require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./service/connection.js");
const app = express(); // express uygulaması oluşturuldu
const port = process.env.PORT || 3001; // 3001 portunu kullanacak
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`App started running on ${port}`);
  });
});



process.on("SIGINT", () => {
  connection.end((err) => {
    console.log(err);
    process.exit(1);
  });
  console.log("\nBağlantılar sonlandırılıyor...");
  process.exit(0);
});