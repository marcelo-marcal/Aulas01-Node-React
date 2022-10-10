import { Router } from "express";
import usersRoutes from "./usersRoutes";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello ");
});

routes.post("/login",)

routes.use('/users', usersRoutes);

export default routes;