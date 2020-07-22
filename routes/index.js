const express = require("express");
const router = express.Router();
const apex = require("./apex");

router.use("/apex", apex);
module.exports = router;
