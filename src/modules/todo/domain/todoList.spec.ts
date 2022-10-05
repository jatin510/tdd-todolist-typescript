import TodoList, { ITodoListProps } from './todoList';

describe('Testing TodoList', () => {
  test('should create a list of empty todos', () => {
    const todoListProps: ITodoListProps = {};
    const todoList = TodoList.create(todoListProps);
    expect(todoList).toBeDefined();
    expect(todoList.todos).toEqual([]);
  });
});
