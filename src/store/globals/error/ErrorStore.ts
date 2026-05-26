import { IErrorStore } from './declaration.ts';

class ErrorStore implements IErrorStore {
  readonly init = (): void => {};

  readonly error = (): void => {};
}

export default ErrorStore;
