import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const UserSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        UserData: (state, {payload})=> {
            
            const isExit = state.some(item => item.id === payload.id)
            if(isExit){
                return state.filter(item => item.id !== payload.id)
            }
            return state.concat(payload)
        }
    },
})
export const {reducer, actions} = UserSlice