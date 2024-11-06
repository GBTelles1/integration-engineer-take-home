import { Task } from "../Task";

export type ITaskDTO = Pick<Task, "title" | "description">;
