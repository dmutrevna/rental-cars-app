import { createSlice } from '@reduxjs/toolkit';
import { loadAdvertsOperation } from './advertsOperations';

const initialState = {
  data: [],
  filters: [],
  isLoading: false,
  status: 'idle',
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState,
  reducers: {
    loadAdvertsSuccess: (state, action) => {
      state.data = action.payload.data;
      state.error = null;
    },
    loadAdvertsFailure: (state, action) => {
      state.data = [];
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadAdvertsOperation.pending, state => {
        state.status = 'loading';
      })
      .addCase(loadAdvertsOperation.fulfilled, (state, action) => {
        state.status = 'successful';
        state.data = action.payload;
      })
      .addCase(loadAdvertsOperation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { setFilters } = advertsSlice.actions;
