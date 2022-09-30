import { Task } from './task';

describe('Testing Task domain', () => {
  it('task should be a non empty string', () => {
    const taskProps = { text: '' };
    const createTask = () => {
      Task.create(taskProps);
    };
    expect(createTask).toThrow();
  });

  it('create a successful task', () => {
    const taskProps = { text: 'hello' };
    const task = Task.create(taskProps);
    expect(task.text).toEqual(taskProps.text);
  });
});
