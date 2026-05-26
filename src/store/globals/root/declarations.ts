import { IAppStateModel } from 'store/models/AppStateModel/declaration';

import { IAnalyticsStore } from '../analytics/declaration.ts';
import { IAppParamsStore } from '../appParams/declarations.ts';
import { IErrorStore } from '../error/declaration.ts';
import { IRouterStore } from '../router/declarations.ts';
import { ISnackbarStore } from '../snackbar/declarations.ts';

import { TRootStoreInitProps } from './types.ts';

export interface IRootStore {
  readonly appState: IAppStateModel;
  readonly appParamsStore: IAppParamsStore;
  readonly routerStore: IRouterStore;
  readonly snackbarStore: ISnackbarStore;
  readonly analyticsStore: IAnalyticsStore;
  readonly errorStore: IErrorStore;
  readonly reload: () => void;
  readonly init: (initProps: TRootStoreInitProps) => Promise<boolean>;
  readonly destroy: () => void;
}
