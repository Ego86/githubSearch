import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const UserSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        UserData: (state, {payload}) => {
            const isExit = state.some(item => item.id === payload.id)
            const lastUser = localStorage.key(localStorage.length - 1)
            if(localStorage.length == 10){
            localStorage.removeItem(lastUser)
            }
            if(isExit){    
                return state.filter(item => item.id !== payload.id)
            }
            localStorage.setItem(payload.id, JSON.stringify(payload))

            return state?.slice(1).concat(payload)
        },
    },
})
export const {reducer, actions} = UserSlice