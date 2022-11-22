import { combineReducers } from '@reduxjs/toolkit';

import app from './slices/appSlice';
import user from './slices/userSlice';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app,
  user,
});

export default rootReducer;
