import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

const listUsersController = async (req: Request, res: Response) => {

  const usersList = await prismaClient.user.findMany();

  return res.json(usersList);
}

export { listUsersController };