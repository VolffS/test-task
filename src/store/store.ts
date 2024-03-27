import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "@/api/api.ts";
import {reducer as stateAuthorizationUserSliceReducer} from "@/store/state-authorization-user-slice.ts";

const reducers = combineReducers({
    stateUserSlice: stateAuthorizationUserSliceReducer,
    [api.reducerPath]: api.reducer,
})

export  const store = configureStore({
    reducer : reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>;