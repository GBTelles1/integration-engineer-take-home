import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTaskUseCase } from "../../useCases/deleteTask/DeleteTaskUseCase";

class DeleteTaskController {
  async handle(request: Request, response: Response): Promise<any> {
    const deleteTaskUseCase = container.resolve(DeleteTaskUseCase);

    const { taskId } = request.params;

    const deletedTask = await deleteTaskUseCase.execute(taskId);

    return response.status(200).json({
      message: `Task ${deletedTask.title} successfully deleted`,
    });
  }
}

export { DeleteTaskController };
