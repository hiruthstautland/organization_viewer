require("dotenv").config();
const app = require("express")();
const port = process.env.PORT;
const appRoutes = require("./routes/appRoutes");
const cors = require("cors");

// Cross origin
app.use(cors());
//TODO: body parser?

app.use("/api", appRoutes);

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
