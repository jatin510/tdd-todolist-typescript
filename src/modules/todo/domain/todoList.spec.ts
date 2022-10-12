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

    const todoList = TodoList.create(todoListProps);
    expect(todoList).toBeDefined();
    expect(todoList.todos?.length).toEqual(1);
    expect(todoList.todos?.[0].task).toEqual('task1');
    expect(todoList.todos?.[0].isCompleted).toBeDefined();
    expect(todoList.todos?.[0].isCompleted).toBeFalsy();
    expect(todoList.todos?.[0].createdAt).toBeDefined();
    expect(todoList.todos?.[0].updatedAt).toBeDefined();
  });
});

describe('Test adding todos in todo List', () => {
  let todoListProps: ITodoListProps = {};
  let todoList: TodoList;

  beforeEach(() => {
    todoList = TodoList.create(todoListProps);
  });

  test('add function will add new Todo inside todoList', () => {
    const todo1 = Todo.create({ task: 'task1' });

    todoList.addTask(todo1);
    expect(todoList.totalNumTodos).toEqual(1);
    expect(todoList.todos?.[0]).toEqual(todo1);
  });

  test('throw error on removing the todo from the todoList', () => {
    let taskId: string;
    const removeTodo = () => {
      todoList.removeTask(taskId);
    };

    expect(() => removeTodo()).toThrow();
  });

  test('throw error on removing the task from the empty todoList', () => {
    let taskId = '1';
    const removeTodo = () => {
      todoList.removeTask(taskId);
    };

    expect(() => removeTodo()).toThrow();
  });

  test('successfully remove the task from the todoList', () => {
    const todo1 = Todo.create({ task: 'task1' });

    todoList.addTask(todo1);

    let taskId = todo1.id;
    todoList.removeTask(taskId);

    expect(todoList.totalNumTodos).toEqual(0);
  });
});
