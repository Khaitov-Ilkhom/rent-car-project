import {configureStore} from "@reduxjs/toolkit";
import {api} from "../api/Index.jsx";
import {reducer as authReducer} from "../slices/Auth-slice.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware)
})

export default store