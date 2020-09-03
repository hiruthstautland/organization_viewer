require("dotenv").config();
const app = require("express")();
const port = process.env.PORT;
const appRoutes = require("./routes/appRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.use("/api", appRoutes);

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
