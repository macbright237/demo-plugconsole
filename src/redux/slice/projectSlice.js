import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import projectApi from '../api/ProjectApi';

// Initial State
const initialState = {
  tasks: [],
  applications: [],
  currentTask: {},
  currentApplication: {},
  role: '',
  status: 'idle', // 'loading', 'successful', 'failed'
  message: '',
};

// Actions
const ADD_TASK = 'ADD_TASK';
const GET_TASKS = 'GET_TASKS';
const GET_TASK_BY_ID = 'GET_TASK_BY_ID';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const ADD_APPLICATION = 'ADD_APPLICATION';
const GET_APPLICATION_BY_ID = 'GET_APPLICATION_BY_ID';
const GET_APPLICATIONS_PER_TASK = 'GET_APPLICATIONS_PER_TASK';


// add task
export const createTask = createAsyncThunk(ADD_TASK, async (body) => {
  try {
    return await projectApi.addTask(body);
  } catch (error) {
    return error.message;
  }
});

// get task
export const getAllTasks = createAsyncThunk(GET_TASKS, async (body) => {
  try {
    return await projectApi.getTasks(body);
  } catch (error) {
    return error.message;
  }
});

// get task by id
export const getTaskByID = createAsyncThunk(GET_TASK_BY_ID, async (body) => {
  try {
    return await projectApi.getTaskWithID(body);
  } catch (error) {
    return error.message;
  }
});

// delete task
export const removeTask = createAsyncThunk(DELETE_TASK, async (body) => {
  try {
    return await projectApi.deleteTask(body);
  } catch (error) {
    return error.message;
  }
});

// update task
export const editTask = createAsyncThunk(UPDATE_TASK, async (body) => {
  try {
    return await projectApi.updateTask(body);
  } catch (error) {
    return error.message;
  }
});


// add applications
export const apply = createAsyncThunk(ADD_APPLICATION, async (body) => {
  try {
    return await projectApi.addApplication(body);
  } catch (error) {
    return error.message;
  }
});

// get application by id
export const getApplicationByID = createAsyncThunk(GET_APPLICATION_BY_ID, async (body) => {
  try {
    return await projectApi.getApplicationWithID(body);
  } catch (error) {
    return error.message;
  }
});

// get application per task
export const getApplicationsPerTaskID = createAsyncThunk(GET_APPLICATIONS_PER_TASK, async (body) => {
  try {
    return await projectApi.getApplicationsPerTask(body);
  } catch (error) {
    return error.message;
  }
});


// project Reducer
const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create task
      .addCase(createTask.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(createTask.fulfilled, (state, action) => ({
        ...state,
        currentTask: {},
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(createTask.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get tasks
      .addCase(getAllTasks.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getAllTasks.fulfilled, (state, action) => ({
        ...state,
        tasks: action.payload.tasks,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getAllTasks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get tasks by id
      .addCase(getTaskByID.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getTaskByID.fulfilled, (state, action) => ({
        ...state,
        currentTask: action.payload.task,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getTaskByID.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // delete tasks
      .addCase(removeTask.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(removeTask.fulfilled, (state, action) => ({
        ...state,
        currentTask: action.payload.task,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(removeTask.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // update tasks
      .addCase(editTask.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(editTask.fulfilled, (state, action) => ({
        ...state,
        currentTask: action.payload.task,
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(editTask.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // create application
      .addCase(apply.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(apply.fulfilled, (state, action) => ({
        ...state,
        currentApplication: {},
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(apply.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get application by id
      .addCase(getApplicationByID.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getApplicationByID.fulfilled, (state, action) => ({
        ...state,
        currentApplication: {},
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getApplicationByID.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // get application per task
      .addCase(getApplicationsPerTaskID.pending, (state) => ({
        ...state,
        status: 'loading',
        message: '',
        error: null,
      }))
      .addCase(getApplicationsPerTaskID.fulfilled, (state, action) => ({
        ...state,
        applications: [],
        status: action.payload.status,
        message: action.payload.message,
      }))
      .addCase(getApplicationsPerTaskID.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  }
})

export const tasks = (state) => (state.projectStore.tasks);
export const applications = (state) => (state.projectStore.applications);
export const projectStatus = (state) => (state.projectStore.status);
export const projectMessage = (state) => (state.projectStore.message);
export const currentTask = (state) => (state.projectStore.currentTask);
export const currentApplication = (state) => (state.projectStore.currentApplication);

export default projectSlice.reducer;