const express = require("express");
const router = express.Router();
const Sentry = require("@sentry/node");
import getOrganizationInfo from "./../services/getOrganization"
// service function

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

router.get("/:organizationnumber/:organizationobj", async (req, res, next) => {
  let { organizationnumber, organizationobj} = req.params;
  console.log("nr",organizationnumber, "obj",organizationobj)
  try {
    let organizationInfo = await getOrganizationInfo(organizationnumber, organizationobj)
    res.status(200).send(organizationInfo);
  } catch (error) {
    Sentry.captureException(error);
    res.status(400).send(`Couldn't get information: ${error}`);
  }
});

module.exports = router;
