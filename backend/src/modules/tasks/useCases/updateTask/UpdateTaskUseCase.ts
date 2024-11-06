import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { Task } from "@prisma/client";

@injectable()
class UpdateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute(id: string, title: string, description: string) {
    const task = await this.tasksRepository.getById(id);

    const taskToUpdate: Task = {
      ...task,
      title,
      description,
    };

    const updatedTask = await this.tasksRepository.update(taskToUpdate);

    return updatedTask;
  }
}

export { UpdateTaskUseCase };
