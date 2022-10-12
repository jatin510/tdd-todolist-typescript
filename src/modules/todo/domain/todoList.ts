import { Entity } from '../../../shared/domain/entity';
import { Todo } from './todo';

export interface ITodoListProps {
  todos?: Todo[];
  totalNumTodos?: number;
}

export default class TodoList extends Entity<ITodoListProps> {
  private constructor(props: ITodoListProps) {
    super(props);
  }

  get id() {
    return this._id;
  }

  get todos() {
    return this.props.todos;
  }

  get totalNumTodos() {
    return this.props.totalNumTodos;
  }

  public addTask(todo: Todo) {
    this.props.todos.push(todo);
    this.props.totalNumTodos++;
  }

  public removeTask(taskId: string) {
    if (taskId === undefined || taskId.length === 0) {
      throw new Error('taskId not provided');
    }

    if (this.props.totalNumTodos === 0) {
      throw new Error('TodoList is empty');
    }

    const { todos } = this.props;

    this.props.todos = todos.filter((todo) => todo.id != taskId);
    this.props.totalNumTodos = this.props.todos.length;
  }

  public static create(props: ITodoListProps): TodoList {
    const todoList = new TodoList({
      ...props,
      todos: props.todos ? props.todos : [],
      totalNumTodos: props.totalNumTodos ? props.totalNumTodos : 0,
    });
    return todoList;
  }
}
