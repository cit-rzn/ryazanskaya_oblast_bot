import { TCommonErrorData } from './types.ts';

export interface IErrorStore {
  readonly init: () => void;
  readonly error: (error: unknown, data?: TCommonErrorData) => void;
}
