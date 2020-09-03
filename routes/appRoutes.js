const express = require("express");
const router = express.Router();
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const getOrganization = require("./../services/getOrganization");
// service function

Sentry.init({
  dsn: process.env.SENTRY_DSN_BACK,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

router.post("/", async (req, res, next) => {
  const orgArr = req.body;
  try {
    let organizationInfo = await getOrganization(orgArr);
    console.log(organizationInfo);
    res.status(200).send(organizationInfo);
    // throw new Error("TEST from back");
  } catch (error) {
    Sentry.captureException(error);
    res.status(400).send(`Couldn't get information: ${error}`);
  }
});

module.exports = router;
