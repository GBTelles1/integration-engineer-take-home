import "reflect-metadata";
import "./backend/src/shared/container";
import bodyParser from "body-parser";
import express from "express";
import { routes } from "./backend/src/routes";
import { env } from "./backend/src/env";
import cors from "cors";

const { PORT } = env;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
