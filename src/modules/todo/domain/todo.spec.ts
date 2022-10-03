import { Todo } from './todo';

describe('Testing todo domain', () => {
  it('todo should be a non empty string', () => {
    const todoProps = { text: '' };
    const createTodo = () => {
      Todo.create(todoProps);
    };
    expect(createTodo).toThrow();
  });

  it('should have a default isCompleted props to false', () => {
    const todoProps = { text: 'hello' };
    const todo = Todo.create(todoProps);
    expect(todo.isCompleted).toBeFalsy();
  });

  it('create a successful todo', () => {
    const todoProps = { text: 'hello', isCompleted: true };
    const todo = Todo.create(todoProps);
    expect(todo.text).toEqual(todoProps.text);
    expect(todo.isCompleted).toEqual(todoProps.isCompleted);
  });
});
