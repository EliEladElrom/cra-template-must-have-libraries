// src/redux/store.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: combineReducers({
    // your reducers goes here
  }),
})

export default store
