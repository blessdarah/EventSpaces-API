// knexfile.ts
import path from "path";

const knexConfig = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "testuser",
      password: "testuser",
      database: "event_spaces_db",
      port: 5432, // Your PostgreSQL port
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "db", "migrations"), // Adjust the path to your migrations directory
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "db", "seeds"), // Adjust the path to your seeds directory
    },
  },
};

export default knexConfig;
