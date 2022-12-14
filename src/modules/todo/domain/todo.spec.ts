import { ITodoProps, Todo } from './todo';

describe('Testing todo domain', () => {
  let todoProps: ITodoProps;

  it('todo should be a non empty string', () => {
    todoProps = { task: '' };
    const createTodo = () => {
      Todo.create(todoProps);
    };
    expect(createTodo).toThrow();
  });

  it('should have a default isCompleted props to false', () => {
    todoProps = { task: 'hello' };
    const todo = Todo.create(todoProps);
    expect(todo.isCompleted).toBeDefined();
    expect(todo.isCompleted).toBeFalsy();
  });

  it('create a successful todo', () => {
    todoProps = { task: 'hello', isCompleted: true };
    const todo = Todo.create(todoProps);
    expect(todo.task).toEqual(todoProps.task);
    expect(todo.isCompleted).toEqual(todoProps.isCompleted);
  });

  test('every task should have createdAt and updatedAt field', () => {
    todoProps = { task: 'hello', isCompleted: true };
    const todo = Todo.create(todoProps);
    expect(todo.task).toEqual(todoProps.task);
    expect(todo.isCompleted).toEqual(todoProps.isCompleted);
    expect(todo.createdAt).toEqual(expect.anything());
    expect(todo.updatedAt).toEqual(expect.anything());
  });

  test('update the task in todo', () => {
    todoProps = { task: 'hello', isCompleted: false };
    const todo = Todo.create(todoProps);
    const newTask = 'updated task';
    todo.updateTask(newTask);
    expect(todo.task).toEqual(newTask);
    expect(todo.isCompleted).toEqual(todoProps.isCompleted);
  });

  test('update the deadline in todo', () => {
    todoProps = { task: 'hello', isCompleted: false };
    const todo = Todo.create(todoProps);
    const newDeadline = new Date();
    todo.updateDeadline(newDeadline);

    expect(todo.task).toEqual(todoProps.task);
    expect(todo.deadline).toEqual(newDeadline);
  });

  test('update the completed status of the todo', () => {
    todoProps = { task: 'hello', isCompleted: false };
    const todo = Todo.create(todoProps);

    const isCompleted = true;
    todo.updateCompleteStatus(isCompleted);
    expect(todo.task).toEqual(todoProps.task);
    expect(todo.isCompleted).toEqual(isCompleted);
  });
});
