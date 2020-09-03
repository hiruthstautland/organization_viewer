require("dotenv").config();
const app = require("express")();
const port = process.env.PORT;
const appRoutes = require("./routes/appRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.use("/api", appRoutes);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(`Something needs fixing!`);
});

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
