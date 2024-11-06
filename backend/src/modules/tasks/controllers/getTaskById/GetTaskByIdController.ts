import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTaskByIdUseCase } from "../../useCases/getTaskById/GetTaskByIdUseCase";

class GetTaskByIdController {
  async handle(request: Request, response: Response): Promise<any> {
    const getTaskByIdUseCase = container.resolve(GetTaskByIdUseCase);

    const { taskId } = request.params;

    const task = await getTaskByIdUseCase.execute(taskId);

    return response.status(200).json(task);
  }
}

export { GetTaskByIdController };
