import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";

const createUsersController = async (req: Request, res: Response) => {
  const user = req.body;

  required(user.name, "name");
  required(user.email, "email");
  required(user.password, "password");

  const cryptPassword = await bcrypt.hash(user.password, 10);

  const createdUser = await prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: cryptPassword,
    },
  });

  res.json(createdUser);
}

export { createUsersController };