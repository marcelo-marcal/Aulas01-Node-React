import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { isNumber } from "../../utils/validations/isNumber";
import { required } from "../../utils/validations/required";

const findByIdUsersController = async (req: Request, res: Response) => {
  const params = req.params;

  required(params.id, "id");
  isNumber(params.id, "id");

  const user = await prismaClient.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return res.json(user);
}

export { findByIdUsersController };