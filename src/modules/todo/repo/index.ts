import { Todo } from '../domain/todo';

export interface ITodoRepo {
  findById(id: string): Promise<Todo>;
  update(todo: Partial<Todo>): Promise<void>;
  save(todo: Todo): Promise<void>;
}
