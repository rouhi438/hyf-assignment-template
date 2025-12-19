//
import knex from "knex";
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./Tasks.sqlite3",
  },
  useNullAsDefault: true,
});

export default knexInstance;
