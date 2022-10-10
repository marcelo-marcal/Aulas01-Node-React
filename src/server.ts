import express, { Response, Request } from "express";
import "express-async-errors";
import { ErrorMiddleware } from "./middleware/error";
import routes from "./routes/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use(ErrorMiddleware);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});