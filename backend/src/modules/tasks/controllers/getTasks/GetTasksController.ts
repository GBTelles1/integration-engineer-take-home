import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTasksUseCase } from "../../useCases/getTasks/GetTasksUseCase";

class GetTasksController {
  async handle(request: Request, response: Response): Promise<any> {
    const getTasksUseCase = container.resolve(GetTasksUseCase);

    const tasks = await getTasksUseCase.execute();

    return response.status(200).json(tasks);
  }
}

export { GetTasksController };
