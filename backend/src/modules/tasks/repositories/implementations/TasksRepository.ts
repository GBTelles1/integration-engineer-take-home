import { ICreateTaskDTO } from "../../dtos";
import { ITasksRepository } from "../ITasksRepository";
import prismaClient from "../../../../prisma";
import { Task } from "@prisma/client";

export class TasksRepository implements ITasksRepository {
  async create({ title, description }: ICreateTaskDTO): Promise<Task> {
    const data = { title, description };

    const task = await prismaClient.task.create({
      data,
    });
    return task;
  }

  async getAll(): Promise<Task[]> {
    const allTasks = await prismaClient.task.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      },
    });

    return allTasks;
  }

  async getById(taskId: string): Promise<Task> {
    const task = await prismaClient.task.findUnique({
      where: { id: taskId },
    });

    return task as Task;
  }

  async getByTitle(title: string): Promise<Task[]> {
    const tasks = await prismaClient.task.findMany({
      where: { title },
    });

    return tasks as Task[];
  }

  async update(taskToUpdate: Task): Promise<Task> {
    const updatedTask = await prismaClient.task.update({
      where: { id: taskToUpdate.id },
      data: taskToUpdate,
    });

    return updatedTask;
  }

  async delete(taskId: string): Promise<Task> {
    const deletedTask = await prismaClient.task.delete({
      where: { id: taskId },
    });

    return deletedTask;
  }
}
