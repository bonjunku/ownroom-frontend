import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user';
import portfolio from './modules/portfolio';
import modal from './modules/modal';

const store = configureStore({
  reducer: {
    user,
    portfolio,
    modal,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>; // state의 기본 타입
export type AppDispatch = typeof store.dispatch; // dispatch의 기본타입
export default store;
