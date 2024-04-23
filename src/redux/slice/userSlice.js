import userApi from "../api/userApi";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  currentUser: {},
  educations: [],
  experiences: [],
  skills: [],
  role: '',
  status: 'idle', // 'loading', 'successful', 'failed'
  login: false, // true if logged in
  token: '',
  message: '',
  mail: null
};


// Actions
const CLIENT_REGISTER = 'CLIENT_REGISTER';
const ENGINEER_REGISTER = 'ENGINEER_REGISTER';
const SIGN_IN = 'SIGN_IN';
const ENGINEER_EDUCATION = 'ENGINEER_EDUCATION';
const GET_EDUCATION = 'GET_EDUCATION';
const GET_ALL_SKILL = 'GET_ALL_SKILL';
const ENGINEER_EXPERIENCE = 'ENGINEER_EXPERIENCE';
const GET_EXPERIENCE = 'GET_EXPERIENCE';
// const SIGN_OUT = 'SIGN_OUT';
const ME = 'ME';

// User Sign-in Action
export const signInUser = createAsyncThunk(SIGN_IN, async (body) => {
  try {
    return await userApi.login(body);
  } catch (error) {
    return error.message;
  }
});

// register engineer
export const engineerRegister = createAsyncThunk(ENGINEER_REGISTER, async (body) => {
  try {
    return await userApi.registerEngineer(body);
  } catch (error) {
    return error.message;
  }
});

// register client
export const clientRegister = createAsyncThunk(CLIENT_REGISTER, async (body) => {
  try {
    return await userApi.registerClient(body);
  } catch (error) {
    return error.message;
  }
});


// get my data
export const getMe = createAsyncThunk(ME, async (token) => {
  try {
    return await userApi.getMyData(token);
  } catch (error) {
    return error.message;
  }
});

// engineer education
export const engineerEducation = createAsyncThunk(ENGINEER_EDUCATION, async (body) => {
  try {
    return await userApi.engineerformation(body);
  } catch (error) {
    return error.message;
  }
});

// get education
export const getMyEducation = createAsyncThunk(GET_EDUCATION, async (token) => {
  try {
    return await userApi.getformations(token);
  } catch (error) {
    return error.message;
  }
});


// get skills
export const getEverySkills = createAsyncThunk(GET_ALL_SKILL, async () => {
  try {
    return await userApi.getAllSkills();
  } catch (error) {
    return error.message;
  }
});

// engineer experience
export const addExperience = createAsyncThunk(ENGINEER_EXPERIENCE, async (body) => {
  try {
    return await userApi.engineerExperience(body);
  } catch (error) {
    return error.message;
  }
});

// get experience
export const getMyExperience = createAsyncThunk(GET_EXPERIENCE, async (token) => {
  try {
    return await userApi.getExperiences(token);
  } catch (error) {
    return error.message;
  }
});

// User Reducer
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // User Sign_in
      .addCase(signInUser.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(signInUser.fulfilled, (state, action) => ({
        ...state,
        currentUser: action.payload.currentUser,
        role: action.payload.currentUser?.role,
        token: action.payload.token,
        status: action.payload.status,
        login: action.payload.login,
        message: action.payload.message,
      }))
      .addCase(signInUser.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // register engineer
      .addCase(engineerRegister.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(engineerRegister.fulfilled, (state, action) => ({
        ...state,
        currentUser: action.payload.user,
        role: action.payload.currentUser?.role,
        token: action.payload.token,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(engineerRegister.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // register client
      .addCase(clientRegister.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(clientRegister.fulfilled, (state, action) => ({
        ...state,
        currentUser: action.payload.user,
        role: action.payload.currentUser?.role,
        token: action.payload.token,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(clientRegister.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get my data
      .addCase(getMe.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getMe.fulfilled, (state, action) => ({
        ...state,
        currentUser: action.payload.currentUser,
        role: action.payload.currentUser?.role,
        login: action.payload.login,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getMe.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // engineer education
      .addCase(engineerEducation.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(engineerEducation.fulfilled, (state, action) => ({
        ...state,
        educations: action.payload.status === 'successful' && [...state.educations, action.payload.currentSchool],
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(engineerEducation.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get education
      .addCase(getMyEducation.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getMyEducation.fulfilled, (state, action) => ({
        ...state,
        educations: action.payload.educations,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getMyEducation.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get SKILLS
      .addCase(getEverySkills.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getEverySkills.fulfilled, (state, action) => ({
        ...state,
        skills: action.payload.skills,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getEverySkills.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // engineer experience
      .addCase(addExperience.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(addExperience.fulfilled, (state, action) => ({
        ...state,
        experiences: action.payload.status === 'successful' && [...state.experiences, action.payload.currentExperience],
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(addExperience.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get experience
      .addCase(getMyExperience.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getMyExperience.fulfilled, (state, action) => ({
        ...state,
        experiences: action.payload.experiences,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getMyExperience.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const currentUser = (state) => (state.userStore.currentUser);
export const userMessage = (state) => (state.userStore.message);
export const userRequestsStatus = (state) => (state.userStore.status);
export const isLogedin = (state) => (state.userStore.login);
export const skills = (state) => (state.userStore.skills);
export const educations = (state) => (state.userStore.educations);
export const experiences = (state) => (state.userStore.experiences);
export const userRole = (state) => (state.userStore.role);
export const authToken = (state) => (state.userStore.token);

export default userSlice.reducer;