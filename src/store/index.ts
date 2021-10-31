import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import blogReducers from './blog/blog.slide';

export const createStore = (preloadedState: Record<string, unknown>) =>
  configureStore({
    reducer: {
      blog: blogReducers,
    },
    preloadedState,
  });

const store = createStore({});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
