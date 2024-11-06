import { ITasksRepository } from "../../repositories/ITasksRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute() {
    const allTasks = await this.tasksRepository.getAll();

    return allTasks;
  }
}

export { GetTasksUseCase };
