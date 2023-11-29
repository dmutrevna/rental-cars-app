import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAdverts } from '../services/api'

export const loadAdverts = createAsyncThunk('adverts/loadAdverts', async () => {
  try {
    const response = await fetchAdverts()
    return response
  } catch (error) {
    throw new Error(error.message)
  }
})
