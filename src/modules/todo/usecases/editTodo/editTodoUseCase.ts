import { ITodoRepo } from '../../repo';
import { EditTodoDTO } from './editTodoDTO';

export class EditTodoUseCase {
  private _todoRepo: ITodoRepo;

  constructor(todoRepo: ITodoRepo) {
    this._todoRepo = todoRepo;
  }

  async execute(request: EditTodoDTO): Promise<void> {
    const { id, deadline, task, isCompleted } = request;

    const todo = await this._todoRepo.findById(id);

    if (deadline) {
      todo.updateDeadline(deadline);
    }

    if (task) {
      todo.updateTask(task);
    }

    if (isCompleted) {
      todo.updateCompleteStatus(isCompleted);
    }

    // await this._todoRepo.save(todo);
  }
}
