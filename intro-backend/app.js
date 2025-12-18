//
import express from "express";
import knex from "knex";
const port = 3000;
const app = express();
app.use(express.json());

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./Tasks.sqlite3",
  },
  useNullAsDefault: true,
});

//-- testing rout
app.get("/", async (req, res) => {
  res.send("Hello HYF assignments 🧐");
});

//-- get HTML format
app.get("/html", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
     <style>
          body {
            font-family: Arial;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .box {
            background: rgb(130, 236, 232);
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
            text-align: center;
          }
          h1 {
            color: #333;
          }
          #count {
            font-size: 48px;
            font-weight: bold;
            color: #4CAF50;
            text-decoration: underline;
             text-underline-offset: 10px;
          }
        </style>
  </head>
  <body>
  <div class="box">
          <h1>Total Users</h1>
          <div id="count">Loading...</div>
        </div>

        <script>
          fetch("/user-count")
            .then(res => res.json())
            .then(data => {
              document.getElementById("count").innerText = data.count;
            });
        </script>
  </body>
</html>
`);
});

//-- getting user by Name;
app.get("/name/:name", async (req, res) => {
  const name = req.params.name.toLowerCase();
  const user = await knexInstance("user")
    .where(knexInstance.raw("LOWER(name) =?", [name]))
    .first();
  if (!user) return res.json("There is not this name in the user list!");
  res.send(user);
});

//-- getting count of users
app.get("/user-count", async (req, res) => {
  const total = await knexInstance("user").count("id as count");
  res.json({ count: total[0].count });
});

//-- getting All users
app.get("/all-users", async (req, res) => {
  const users = await knexInstance("user");
  res.send(users);
});

//-- getting user by ID
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await knexInstance("user")
    .where({ id: Number(id) })
    .first();
  if (!user) {
    return res.json("User not found!!!");
  }
  res.send(user);
});

//-- getting random user
app.get("/random", async (req, res) => {
  const users = await knexInstance("user");
  if (users.length === 0) {
    return res.status(404).json("User not found ☹️");
  }
  const randomUser = Math.floor(Math.random() * users.length);
  res.json(users[randomUser]);
});

//-- adding new user
app.post("/add", async (req, res) => {
  const { name, email, phone } = req.body;
  const newUser = await knexInstance("user").insert({
    name,
    email,
    phone,
  });
  res.json(`New user added successfully with userID: ${newUser[0]}`);
});
app.listen(port, function () {
  console.log("Server is connected on http://localhost:3000");
});
