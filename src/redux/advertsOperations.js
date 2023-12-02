import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdverts } from '../services/api';

export const loadAdvertsOperation = createAsyncThunk(
  'adverts/loadAdverts',
  async currentPage => {
    try {
      const response = await fetchAdverts(currentPage);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
