import TodoList from './todoList';

describe('Testing TODO Domain', () => {
  it('Todo should have an id', () => {
    const todoListProps = {};
    const todoList = new TodoList(todoListProps);
    expect(typeof todoList.id === 'string').toBeTruthy();
  });

  it('We should be able to assign id', () => {
    const todoListProps = {
      id: 'ABC',
    };
    const todoList = new TodoList(todoListProps);
    expect(todoList.id).toEqual(todoListProps.id);
  });

  it("If we don't assign id to task, it should generate random non empty string id", () => {
    const todoListProps = {};
    const todoList1 = new TodoList(todoListProps);
    expect(todoList1.id.length !== 0).toBeTruthy();

    const todoList2 = new TodoList(todoListProps);
    expect(todoList1.id !== todoList2.id).toBeTruthy();
  });
});
