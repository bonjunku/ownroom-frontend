import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from './user';

export const uploadConsultingApplicationAsync = createAsyncThunk(
  'consulting/UPLOAD_CONSULTANT_APPLICATION',
  async (formData: FormData) => {
    const response = await axios({
      url: `https://api.ownroom.link/api/consultings/application/upload`,
      method: `POST`,
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
      data: formData,
    });
    return { ...response.data };
  }
);
