import { inject, injectable } from "tsyringe";
import { ICreateTaskDTO } from "../../dtos";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute({ title, description }: ICreateTaskDTO) {
    const taskData = {
      title,
      description,
    };

    const newTask = await this.tasksRepository.create(taskData);

    return {
      data: newTask,
      message: `Task ${newTask.title} created`,
    };
  }
}

export { CreateTaskUseCase };
