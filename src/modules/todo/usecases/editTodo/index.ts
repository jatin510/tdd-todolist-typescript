import { EditTodoUseCase } from './editTodoUseCase';
import { localTodoRepo } from '../../repo/implementations/local';

export const testEditTodoUseCase = new EditTodoUseCase(localTodoRepo);
