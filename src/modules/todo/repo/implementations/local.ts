import { ITodoRepo } from '..';
import { Todo } from '../../domain/todo';

class LocalTodoRepo implements ITodoRepo {
  private _todos = [];

  constructor() {}

  get todos() {
    return this._todos;
  }

  async update(todo: Partial<Todo>): Promise<void> {
    const olderTodo = this._todos.filter((todo) => todo.id === todo.id);
    const updatedTodo = { ...olderTodo, ...todo };
    this._todos.push(updatedTodo);
  }

  async findById(id: string): Promise<Todo> {
    const todo = this._todos.find((todo) => todo.id === id);
    return todo;
  }

  async save(todo: Todo): Promise<void> {
    this._todos.push(todo);
  }
}

export const localTodoRepo = new LocalTodoRepo();
