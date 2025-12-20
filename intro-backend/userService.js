//
//-- get name Function
import knexInstance from "./database.js";

export async function getUserByName(name) {
  return knexInstance("user")
    .where(knexInstance.raw("LOWER(name) = ?", [name]))
    .first();
}
//-- getting count of users function
export async function getUsersCount() {
  const total = await knexInstance("user").count("id as count");
  return total[0].count;
}

//-- getting All users
export async function getAllUsers() {
  const users = await knexInstance("user");
  return users;
}

//-- getting user by ID
export async function getUserById(id) {
  const userId = await knexInstance("user")
    .where({ id: Number(id) })
    .first();
  return userId;
}

//-- getting random user
export async function getUserRandom() {
  const users = await knexInstance("user");
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

//-- adding new user

export async function addNewUser({ name, email, phone }) {
  const newUser = await knexInstance("user").insert({ name, email, phone });
  return newUser[0];
}

// -- deleting user by ID
export async function deleteUserById(id) {
  const deleteUser = await knexInstance("user")
    .where({ id: Number(id) })
    .del();
  return deleteUser;
}
