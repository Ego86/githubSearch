import { combineReducers, configureStore, createReducer } from "@reduxjs/toolkit";
import { reducer } from "./User.slice";
import { userApi } from "./UserApi";
import { setupListeners } from "@reduxjs/toolkit/query";
const rootReducer = combineReducers({slice:reducer, [userApi.reducerPath]: userApi.reducer})
const store = configureStore({
    reducer: rootReducer,
    
    middleware: (getDefaultMiddlewaer) =>{
        return getDefaultMiddlewaer().concat(userApi.middleware)
    },
    // devTools: true
})
setupListeners(store.dispatch)
export default store