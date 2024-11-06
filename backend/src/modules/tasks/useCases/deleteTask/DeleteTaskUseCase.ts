import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class DeleteTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute(taskId: string) {
    const deletedTask = await this.tasksRepository.delete(taskId);

    return deletedTask;
  }
}

export { DeleteTaskUseCase };
