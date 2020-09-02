const express = require("express");
const router = express.Router();
const Sentry = require("@sentry/node");

// service function

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

router.get("/error", async (req, res, next) => {
  try {
    res.status(200).send("heii");
  } catch (error) {
    Sentry.captureException(error);
    res.status(400).send(`Couldn't get information: ${error}`);
  }
});

module.exports = router;
