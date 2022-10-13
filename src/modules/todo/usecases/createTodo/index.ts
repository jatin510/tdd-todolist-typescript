import { CreateTodoUseCase } from './usecase';
import { localTodoRepo } from '../../repo/implementations/local';

export const testCerateTodoUseCase = new CreateTodoUseCase(localTodoRepo);
