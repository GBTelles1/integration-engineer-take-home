import { Router } from "express";
import { taskRoutes } from "./Task.routes";

const routes = Router();

routes.use("/tasks", taskRoutes);

export { routes };
