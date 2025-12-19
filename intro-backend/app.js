//
import express from "express";
import path from "path";
import {
  getUserByName,
  getUsersCount,
  getAllUsers,
  getUserById,
  getUserRandom,
  addNewUser,
  deleteUserById,
} from "./userService.js";
const port = 3000;
const app = express();
app.use(express.json());

//-- testing rout
app.get("/", async (req, res) => {
  res.send("Hello HYF assignments 🧐");
});

//-- get HTML format
app.get("/html", (req, res) => {
  res.sendFile(path.join(process.cwd(), "users.html"));
});

//-- getting user by Name
app.get("/name/:name", async (req, res) => {
  const user = await getUserByName(req.params.name.toLowerCase());
  if (!user) return res.json("There is not this name in the user list!");
  res.send(user);
});

//-- getting count of users
app.get("/user-count", async (req, res) => {
  const total = await getUsersCount();
  res.json({ count: total });
});

//-- getting All users
app.get("/all-users", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

//-- getting user by ID
app.get("/user/:id", async (req, res) => {
  const userId = await getUserById(req.params.id);
  if (!userId) return res.status(404).json({ error: "User not found!!!" });
  res.json(userId);
});

//-- getting random user
app.get("/random", async (req, res) => {
  const users = await getUserRandom();
  if (users.length === 0) {
    return res.status(404).json("User not found ☹️");
  }
  res.json(users);
});

//-- adding new user
app.post("/add", async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const newUser = await addNewUser({ name, email, phone });
  res.status(201).json({
    message: `New user added successfully with userID: ${newUser}`,
  });
});

//-- deleting user by ID
app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser = await deleteUserById(id);
  if (deleteUser === 0) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json({ message: `User with id ${id} deleted successfully` });
});

app.listen(port, function () {
  console.log("Server is connected on http://localhost:3000");
});
