import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.github.com/"}),
    endpoints: (builder) =>({
        getUserbyName: builder.query({
            query: (name) => `users/${name}`
        }),
    }),
 })

export const {useGetUserbyNameQuery} = userApi