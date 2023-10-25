import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const UserSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        UserData: (state, {payload}) => {
            const isExit = state.some(item => item.id === payload.id)
            if(isExit){
            if(localStorage.length === 10){
                localStorage.removeItem(localStorage[localStorage.length].id)
            }
                return state.filter(item => item.id !== payload.id)
            }
            localStorage.setItem(payload.id, JSON.stringify(payload))
            return state.concat(payload)
        }
    },
})
export const {reducer, actions} = UserSlice