import { Router } from "express";
import { createTransactionsController } from "../controllers/transactions/createTransactionsController";
import { deleteTransactionsController } from "../controllers/transactions/deleteTransactionsController";
import { listTransactionsController } from "../controllers/transactions/listTransactionsController";

const transactionsRoutes = Router();

// Rota para listar todas as transações
transactionsRoutes.get("/", listTransactionsController);

// Rota para criar uma transação
transactionsRoutes.post("/create", createTransactionsController);

// Rota para deletar uma transação
transactionsRoutes.delete("/delete", deleteTransactionsController);

export { transactionsRoutes };