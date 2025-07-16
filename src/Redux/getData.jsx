import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { employeeExp, getJobs, getprofile } from '../API/ApiFunctions';
import { showErrorToast, showSuccessToast } from '../components/ui/toast';

 const updateTotalExp = async (employee) => {
  if (!employee?.updatedAt || !employee?.TotalExperience) {
    showErrorToast("Employee data is incomplete");
    return;
  }

  const updateDate = new Date(employee.updatedAt);
  const today = new Date();
  const timeGap = today - updateDate;

  // convert ms → days
  const gapInDays = Math.floor(timeGap / (1000 * 60 * 60 * 24));

  let years = employee.TotalExperience.years || 0;
  let months = employee.TotalExperience.months || 0;

  if(gapInDays > 30){
    months += 1;
  if (months >= 12) {
    years += 1;
    months = 0;
  }
  }

  const data = { years, months };

  try {
     await employeeExp(data);
    
  } catch (error) {
    console.error(error);
    showErrorToast("An error occurred while updating experience");
  }
};


export const fetchUserProfile = createAsyncThunk('getData/fetchUserProfile', async () => {
  const response = await getprofile();
  if(response){
    updateTotalExp(response.data.data);
    return response.data.data;
  }
  
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
