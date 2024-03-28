import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FormUser} from "@/type/form-user.ts";
import {PostInfo} from "@/type/post-info.ts";
import {Comment} from "@/type/comment.ts";
import {User} from "@/type/user.ts";
import {BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
const baseUrl: string = 'https://jsonplaceholder.typicode.com';

const getResponseWithTimeout = <Result>(response: BaseQueryResult<Result>): Promise<Result> | Result =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(response)
        }, 500)
    })

export const api = createApi({
    reducerPath: "api",
    tagTypes: ['refreshPost'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (build) => ({
        getPosts: build.query<PostInfo[], undefined>({
            query: () => '/posts',
            transformResponse: getResponseWithTimeout
        }),
        getPostsByUserId: build.query<PostInfo[], number>({
            query: (userId: number) => `/posts/?userId=${userId}`,
            transformResponse: getResponseWithTimeout
        }),
        getCommentsByPostId: build.query<Comment[], number>({
            query: (postId: number) => `/posts/${postId}/comments`,
            transformResponse: getResponseWithTimeout
        }),
        authorizationUser: build.query<User[], FormUser>({
            query: ({userName, email}: FormUser) => `/users/?username=${userName}&email=${email}`,
            transformResponse: getResponseWithTimeout
        }),
        getUserByUserId: build.query<User, number>({
            query: (userId: number) => `/users/${userId}`,
            transformResponse: getResponseWithTimeout
        }),
    })
})

export const {
    useGetPostsQuery, useGetCommentsByPostIdQuery,
    useAuthorizationUserQuery,
    useGetUserByUserIdQuery, useGetPostsByUserIdQuery
} = api