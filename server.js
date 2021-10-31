import express from "express";
import bodyParser from "body-parser";
import renderer from "./renderer";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("/robots.txt", (req, res) => {
  res.status(200).sendFile(__dirname + "/robots.txt");
});

app.get("*", (req, res) => {
  renderer(req, res);
});

app.listen(PORT, () => {
  console.log(`App Running on ${PORT}`);
});
