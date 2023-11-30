import { Request, Response } from "express";
import knexInstance from "../db/knexfile";

const UserController = {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password } = req.body;
      const newUser = await knexInstance("users").insert({
        username,
        email,
        password,
      });
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Error creating user", error: error.message });
    }
  },

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await knexInstance("users").where({ id }).first();
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Error fetching user", error: error.message });
    }
  },
};

export default UserController;
