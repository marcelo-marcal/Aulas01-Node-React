import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const deleteUsersController = async (req: Request, res: Response) => {
  const user = req.body;

  required(user.id, "id");

  await prismaClient.user.delete({
    where: {
      id: user.id,
    },
  });
  res.send("Usuario deletado com sucesso!");

}

export { deleteUsersController };