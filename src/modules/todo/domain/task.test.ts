import { Task } from './task';

describe('Testing Task domain', () => {
  it('task should be a non empty string', () => {
    const taskProps = { text: '' };
    const createTask = () => {
      Task.create(taskProps);
    };
    expect(createTask).toThrow();
  });

  it('should have a default isCompleted props to false', () => {
    const taskProps = { text: 'hello' };
    const task = Task.create(taskProps);
    expect(task.isCompleted).toBeFalsy();
  });

  it('create a successful task', () => {
    const taskProps = { text: 'hello', isCompleted: true };
    const task = Task.create(taskProps);
    expect(task.text).toEqual(taskProps.text);
    expect(task.isCompleted).toEqual(taskProps.isCompleted);
  });
});
