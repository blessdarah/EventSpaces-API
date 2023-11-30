import express, { json } from "express";
import UserController from "./controllers/userController";

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(json());

app.get("/", (_req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.post("/users", UserController.createUser);
app.get("/users/:id", UserController.getUserById);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
