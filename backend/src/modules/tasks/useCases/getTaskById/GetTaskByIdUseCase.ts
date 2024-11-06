import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class GetTaskByIdUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute(taskId: string) {
    const task = await this.tasksRepository.getById(taskId);

    return task;
  }
}

export { GetTaskByIdUseCase };
