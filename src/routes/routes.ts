import { Router } from "express";
import cors from "cors";

import { loginController } from "../controllers/authentication/loginController";
import { logoutController } from "../controllers/authentication/logoutController";
import { JwtMiddleware } from "../middlewares/jwt";
import { cnpjController } from "../service/cnpjController";

import { transactionsRoutes } from "./transactions.routes";
import usersRoutes from "./users.routes";

const routes = Router();

// Liberar origens das requisições
routes.use(cors({ origin: "*" }));

// Rota para ver se a api está funcionando
routes.get("/", (req, res) => {
  res.send("Hello!");
});

// Rota de login
routes.post("/login", loginController);

// Rotas de usuários
routes.use("/users", usersRoutes);

// Filtro de autenticação
routes.use(JwtMiddleware);

// Endpoint para buscar dados do cnpj especificado
routes.get("/cnpj/:cnpj", cnpjController);

// Rota de logout
routes.post("/logout", logoutController);

// Rotas de transações
routes.use("/transactions", transactionsRoutes);

export default routes;