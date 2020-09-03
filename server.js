require("dotenv").config();
const app = require("express")();
const port = process.env.PORT;
const Sentry = require("@sentry/node");
const getOrganization = require("./services/getOrganization");
const bodyParser = require("body-parser");
const cors = require("cors");

Sentry.init({
  dsn: process.env.SENTRY_DSN_BACK,
  tracesSampleRate: 1.0,
});

app.use(cors());

app.use(bodyParser.json());

app.use("/api", async (req, res, next) => {
  const orgArr = req.body;
  try {
    let orgInfo = await getOrganization(orgArr);
    res.status(200).send(orgInfo);
  } catch (error) {
    Sentry.captureException(error);
    res.status(400).send(`Couldn't get information: ${error}`);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something needs fixing!`);
});

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
