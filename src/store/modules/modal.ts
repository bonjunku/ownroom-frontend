import { RootState } from './../configureStore';
import { createSlice } from '@reduxjs/toolkit';

export interface Modal {
  imgSrc: string;
  mainMessage: string;
  subMessage: string;
  isVisible: boolean;
}

const initialState: Modal = {
  imgSrc: '',
  mainMessage: '',
  subMessage: '',
  isVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    SET_MODAL: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default modalSlice.reducer;

export const getModalState = (state: RootState) => state.modal;
