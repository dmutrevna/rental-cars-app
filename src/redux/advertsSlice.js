import { createSlice } from '@reduxjs/toolkit';
import { loadAdverts } from './advertsOperations';

const initialState = {
  items: [],
  filters: {
    page: 1,
    search: '',
  },
  getMore: false,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState,
  reducers: {
    loadAdvertsSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    loadAdvertsFailure: (state, action) => {
      state.data = [];
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadAdverts.pending, state => {
        state.status = 'loading';
      })
      .addCase(loadAdverts.fulfilled, (state, action) => {
        state.status = 'successful';
        state.data = action.payload;
      })
      .addCase(loadAdverts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { setItems, setFilters } = advertsSlice.actions;
