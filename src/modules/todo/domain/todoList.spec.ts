import { Todo } from './todo';
import TodoList, { ITodoListProps } from './todoList';

describe('Testing TodoList', () => {
  let todoListProps: ITodoListProps;

  test('should create a list of empty todos', () => {
    todoListProps = {};
    const todoList = TodoList.create(todoListProps);
    expect(todoList).toBeDefined();
    expect(todoList.todos).toEqual([]);
  });

  test('should create a TodoList with a task', () => {
    todoListProps = {
      todos: [{ task: 'task1' }],
    };

    const todoList = TodoList.create(todoListProps);
    expect(todoList).toBeDefined();
    expect(todoList.todos?.length).toEqual(1);
  });
});
