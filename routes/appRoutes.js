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

router.post("/", async (req, res, next) => {
  const orgArr = req.body;
  try {
    let orgInfo = await getOrganization(orgArr);
    // send missing info to sentry
    // let missingInfo = orgInfo.map((missing) => missing.missingInfo);

    res.status(200).send(orgInfo);

    next();
  } catch (error) {
    Sentry.captureException(error);
    res.status(400).send(`Couldn't get information: ${error}`);
  }
});

module.exports = router;
