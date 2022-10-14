import { ITodoRepo } from '..';
import { Todo } from '../../domain/todo';

class LocalTodoRepo implements ITodoRepo {
  private _todos = [];

  constructor() {}

  get todos() {
    return this._todos;
  }

  async update(todo: Partial<Todo>): Promise<void> {
    const olderTodo = this._todos.find((todoInDb) => todoInDb.id === todo.id);
    const updatedTodo = { ...olderTodo, ...todo };
    this._todos.push(updatedTodo);
  }

  async findById(id: string): Promise<Todo> {
    const todo = this._todos.find((todo) => todo.id === id);
    return todo;
  }

  async save(todo: Todo): Promise<void> {
    // check if already exists
    const alreadyTodoWithId = await this._todos.find(
      (todoInDb) => todoInDb.id === todo.id
    );

    if (alreadyTodoWithId) {
      console.log('here');
      const newTodos = await this._todos.filter(
        (todoInDb) => todoInDb.id != todo.id
      );
      newTodos.push(todo);
      this._todos = newTodos;
      console.log('newTodos', newTodos);
      console.log(this._todos);
    } else {
      this._todos.push(todo);
    }
  }
}

export const localTodoRepo = new LocalTodoRepo();
