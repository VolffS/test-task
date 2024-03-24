import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "@/api/api.ts";
import {reducer as stateUserSliceReducer} from "@/store/state-loader.ts";

const reducers = combineReducers({
    stateUserSlice: stateUserSliceReducer,
    [api.reducerPath]: api.reducer,
})

export  const store = configureStore({
    reducer : reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>;