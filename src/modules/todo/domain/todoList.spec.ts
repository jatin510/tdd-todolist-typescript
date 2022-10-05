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
    const todo1 = Todo.create({ task: 'task1' });
    todoListProps = {
      todos: [todo1],
    };

    console.log(todo1);

    const todoList = TodoList.create(todoListProps);
    expect(todoList).toBeDefined();
    expect(todoList.todos?.length).toEqual(1);
    expect(todoList.todos?.[0].task === 'task1');
  });
});
