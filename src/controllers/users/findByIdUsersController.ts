import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { isNamber } from "../../utils/validations/isNamber";
import { required } from "../../utils/validations/required";

const findByIdUsersController = async (req: Request, res: Response) => {
  const params = req.params;

  required(params.id, "id");
  isNamber(params.id, "id");

  const user = await prismaClient.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return res.json(user);
}

export { findByIdUsersController };