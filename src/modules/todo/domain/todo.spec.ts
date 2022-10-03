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
    expect(todo.isCompleted).toBeFalsy();
  });

  it('create a successful todo', () => {
    todoProps = { task: 'hello', isCompleted: true };
    const todo = Todo.create(todoProps);
    expect(todo.task).toEqual(todoProps.task);
    expect(todo.isCompleted).toEqual(todoProps.isCompleted);
  });
});
