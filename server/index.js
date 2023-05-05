import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "to_do"
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}/`);
});

app.get('/', (req,res) =>
  res.send('Welcome, user!')
)

app.get('/status', (req, res) =>
  db.query('SELECT * FROM status', (err, data) => {
    if (data) {
      res.send(data)
    } console.log(err)
  }
  )
)

app.get('/tasks/todo', (req, res) =>
  db.query('SELECT * FROM tasks WHERE task_status=1', (err, data) => {
    if (data) {
      res.send(data)
    } console.log(err)
  })
)