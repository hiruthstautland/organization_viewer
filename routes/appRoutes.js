const express = require("express");
const router = express.Router();
// service function
// const postError = require("../services/")

router.post("/:error", async (req, res, next) => {
  let { error } = req.params;
  console.log(error);
  try {

    res.status(200).send("heii");
  } catch (error) {
    res.status(500).send(`Couldn't find the organization!`);
  }
});

module.exports = router;
