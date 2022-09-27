import Todo from './todo';

describe('Testing TODO Domain', () => {
  it('Todo should have an id', () => {
    const todoProps = {};
    const todo = new Todo(todoProps);
    expect(typeof todo.id === 'string').toBeTruthy();
  });

  it('We should be able to assign id', () => {
    const todoProps = {
      id: 'ABC',
    };
    const todo = new Todo(todoProps);
    expect(todo.id).toEqual(todoProps.id);
  });

  it("If we don't assign id to task, it should generate random non empty string id", () => {
    const todoProps = {};
    const todo1 = new Todo(todoProps);
    expect(todo1.id.length !== 0).toBeTruthy();

    const todo2 = new Todo(todoProps);
    expect(todo1.id !== todo2.id).toBeTruthy();
  });
});
