import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJobs, getprofile } from '../API/ApiFunctions';


export const fetchUserProfile = createAsyncThunk('getData/fetchUserProfile', async () => {
  const response = await getprofile();
  return response.data.data;
});

export const fetchJobs = createAsyncThunk('getData/fetchJobs', async () => {
  const response = await getJobs();
  return response.data.data;
});


const initialState = {
  employee: null,
  jobs: null,
  loading: false,
  error: null,
};


const getDataSlice = createSlice({
  name: 'getData',
  initialState,
  reducers: {
    deleteEmployee: (state) =>{
      state.employee = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.employee = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // fetchJobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteEmployee } = getDataSlice.actions;

export default getDataSlice.reducer;
