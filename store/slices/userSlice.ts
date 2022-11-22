import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { UserFragment } from 'sdk';

export interface IUserState {
  user: UserFragment;
  uid: string;
}

export const initUser: UserFragment = {
  id: '',
  uid: '',
  full_name: '',
  email: '',
  description: '',
  avatar_url: '',
  amount_premium: 0,
  is_active: false,
  is_admin: false,
  is_premium: false,
};

export const initialState: IUserState = {
  user: initUser,
  uid: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IUserState, { payload }: PayloadAction<UserFragment>) => {
      state.user = payload;
    },
    setUid: (state: IUserState, { payload }: PayloadAction<string>) => {
      state.uid = payload;
    },
  },
});

export const { setUser, setUid } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
