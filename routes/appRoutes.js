const express = require("express");
const router = express.Router();
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const getOrganization = require("./../services/getOrganization");
// service function

// Sentry.init({
//   dsn: process.env.SENTRY_DSN_BACK,
//   tracesSampleRate: 1.0,
// });

router.post("/", async (req, res, next) => {
  const orgArr = req.body;
  try {
    let orgInfo = await getOrganization(orgArr);
    console.log(orgInfo);

    let { customObj, missingInfo } = orgInfo;
    console.log("from the back", "customObj", customObj);
    console.log("missing", missingInfo);
    res.status(200).send(orgInfo);
    // throw new Error("TEST from back");
  } catch (error) {
    // if (data.status == 400) {
    //   let errMsg = data.feilmelding;
    //   let errValidation;
    //   // log in error lib
    //   console.log("Feilmelding:", errMsg);

    //   if (data.valideringsfeil) {
    //     errValidation = data.valideringsfeil[0].feilmelding;
    //     //TODO: remove cons.log and log in error lib, and send to UI
    //     console.log("Valideringsfeil:", errValidation);
    //   }
    //   return { errMsg, errValidation };
    // }
    Sentry.captureException(error);
    res.status(400).send(`Couldn't get information: ${error}`);
  }
});

module.exports = router;
