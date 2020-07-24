const express = require("express");
const router = express.Router();
const connection = require("../config");

//tout les profils
router.get("/", (req, res) => {
  connection.query("SELECT * FROM `character`", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// consulter un personnage particulier
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query(
    "SELECT * FROM `character` WHERE id = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
