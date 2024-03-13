const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  console.log(req.url, res, next);
  res.send("respond with a resource");
});

router.get("/cool", (req, res, next) => {
  console.log(req.url, res, next);
  res.send("You are so cool");
});

module.exports = router;
