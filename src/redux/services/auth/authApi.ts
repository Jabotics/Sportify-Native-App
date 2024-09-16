import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIEndPoints } from '../../../services/APIEndpoints';

export const authApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl: APIEndPoints.BackendUrl,
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => {
                return {
                    url: APIEndPoints.login,
                    method: 'POST',
                    body
                }
            }
        }),
        validateOtp: builder.mutation({
            query: (body) => {
                return {
                    url: APIEndPoints.validate_otp,
                    method: 'POST',
                    body
                }
            }
        })
    })
});

export const { useLoginMutation, useValidateOtpMutation } = authApi;