import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTaskUseCase } from "../../useCases/updateTask/UpdateTaskUseCase";

class UpdateTaskController {
  async handle(request: Request, response: Response): Promise<any> {
    if (!request.body.title)
      return response
        .status(400)
        .json({ message: "The task title is missing" });

    if (!request.body.description)
      return response
        .status(400)
        .json({ message: "The task description is missing" });

    const { taskId } = request.params;

    const { title, description } = request.body;

    const updateTaskUseCase = container.resolve(UpdateTaskUseCase);

    const updatedTask = await updateTaskUseCase.execute(
      taskId,
      title,
      description
    );

    return response.status(200).json(updatedTask);
  }
}

export { UpdateTaskController };
