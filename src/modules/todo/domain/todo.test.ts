import Todo from './todo';

describe('Testing TODO Domain', () => {
  it('Todo should have an id', () => {
    const todo = new Todo();
    expect(typeof todo.id === 'string').toBeTruthy();
  });

  it('We should be able to assign id', () => {
    const ID = 'ABC';
    const todo = new Todo(ID);
    expect(todo.id).toEqual(ID);
  });

  it("If we don't assign id to task, it should generate random non empty string id", () => {
    const todo1 = new Todo();
    expect(todo1.id.length !== 0).toBeTruthy();

    const todo2 = new Todo();
    expect(todo1.id !== todo2.id).toBeTruthy();
  });
});
