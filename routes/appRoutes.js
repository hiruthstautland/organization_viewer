const express = require("express");
const router = express.Router();
const Sentry = require("@sentry/node");
const getOrganization = require("./../services/getOrganization");
// service function

// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
// });

router.post("/", async (req, res, next) => {
  const orgArr = req.body;
  try {
    let organizationInfo = await getOrganization(orgArr);
    res.status(200).send(organizationInfo);
  } catch (error) {
    // Sentry.captureException(error);
    res.status(400).send(`Couldn't get information: ${error}`);
  }
});

module.exports = router;
