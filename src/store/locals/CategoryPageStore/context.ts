import { createContextLocalStore } from 'utils/createContextLocalStore';

import { CategoryPageStore } from './CategoryPageStore.ts';

export const { Provider: CategoryPageStoreProvider, useStore: useCategoryPageStore } =
  createContextLocalStore(CategoryPageStore);
