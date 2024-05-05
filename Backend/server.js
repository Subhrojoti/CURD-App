const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "curd",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM animals";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO animals (`Name`, `Info`) VALUES (?)";
  const values = [req.body.animalName, req.body.animalInfo];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.put("/update/:id", (req, res) => {
  const sql = "UPDATE animals set `Name` = ?, `Info` = ? Where ID = ?";
  const values = [req.body.animalName, req.body.animalInfo];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.delete("/animals/:id", (req, res) => {
  const sql = "DELETE FROM animals WHERE ID = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(4000, () => {
  console.log("I am listning");
});
