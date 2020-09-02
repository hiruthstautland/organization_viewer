const express = require("express");
const router = express.Router();
// service function
// const getOrganization = require("../services/")

router.get("/:orgname", async (req, res, next) => {
  let { orgname } = req.params;
  console.log(orgname);
  try {
    // const allOrders = await getAllOrders(storeaccount);
    // res.status(200).send(allOrders);
    res.status(200).send("heii");
  } catch (error) {
    res.status(500).send(`Couldn't find the organization!`);
  }
});

module.exports = router;
