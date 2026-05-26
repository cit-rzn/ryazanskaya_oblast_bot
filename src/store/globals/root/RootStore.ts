import { ERoutePath } from 'config/router';
import { SnackbarStore } from 'store/globals/snackbar';
import { AppStateModel } from 'store/models/AppStateModel';
import { initStoreContext } from 'utils/initStoreContext';

import { AnalyticsStore } from '../analytics';
import { IAnalyticsStore } from '../analytics/declaration.ts';
import { AppParamsStore } from '../appParams';
import { IAppParamsStore } from '../appParams/declarations.ts';
import { ErrorStore } from '../error';
import { IErrorStore } from '../error/declaration.ts';
import { RouterStore } from '../router';
import { IRouterStore } from '../router/declarations.ts';
import { ISnackbarStore } from '../snackbar/declarations.ts';

import { IRootStore } from './declarations.ts';
import { TRootStoreInitProps } from './types.ts';

class RootStore implements IRootStore {
  readonly appState: AppStateModel = new AppStateModel();
  readonly appParamsStore: IAppParamsStore = new AppParamsStore();
  readonly routerStore: IRouterStore = new RouterStore(this);
  readonly snackbarStore: ISnackbarStore = new SnackbarStore();
  readonly analyticsStore: IAnalyticsStore = new AnalyticsStore(this);
  readonly errorStore: IErrorStore = new ErrorStore();
  readonly reload = () => {
    this.appState.reset();
  };

  private static readonly _MIN_LOADER_DISPLAY_MS = 800;

  readonly init = async (initProps: TRootStoreInitProps): Promise<boolean> => {
    if (!this.appState.initial) {
      return true;
    }

    this.appState.setLoading();

    const loaderTimer = new Promise((r) => setTimeout(r, RootStore._MIN_LOADER_DISPLAY_MS));

    this.appParamsStore.setInitData(initProps.initData);
    this.errorStore.init();

    await this.routerStore.init(initProps.navigate);

    this.analyticsStore.init();
    this.routerStore.replace(ERoutePath.root);

    await loaderTimer;

    this.appState.setLoadedSuccessfully();

    return true;
  };

  readonly destroy = (): void => {
    this.routerStore.destroy();
  };
}

export type TRootStoreType = IRootStore;

export const {
  store: rootStore,
  StoreContext: RootStoreContext,
  StoreProvider: RootStoreProvider,
  useStoreContext: useRootStore,
} = initStoreContext(() => new RootStore(), 'rootStore');
