import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

export const api = createApi({
    reducerPath: "api",
    tagTypes: ['refreshPost'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => '/posts'
        }),
        getCommentsByPostId: build.query({
            query: (postId: number) => `/posts/${postId}/comments`
        }),
        getUsers: build.query({
            query: () => `/users`
        }),
        getUserByUserId: build.query({
            query: (userId: number) => `/users/${userId}`
        }),
    })
})

export const {
    useGetPostsQuery, useGetCommentsByPostIdQuery,
    useGetUsersQuery,
    useGetUserByUserIdQuery
} = api