import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const deleteTransactionsController = async (req: Request, res: Response) => {
  // Recebendo os dados do usuário
  const transaction = req.body;

  // Validando os dados do usuário
  required(transaction.id, "id");

  // Verificar se a transação existe
  const transactionExists = await prismaClient.transaction.findFirst({
    where: {
      id: transaction.id,
    },
  });

  if (!transactionExists) {
    throw new Error("Transação não encontrada");
  }

  // Deletando a transação
  await prismaClient.transaction.delete({
    where: {
      id: transaction.id,
    },
  });

  res.json({ message: "Transação deletada com sucesso!" });
};

export { deleteTransactionsController };