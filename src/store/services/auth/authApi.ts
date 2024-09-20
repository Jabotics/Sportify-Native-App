import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIEndPoints } from '@/services/APIEndpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '@/store';

export const authApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl: APIEndPoints.BackendUrl,
        prepareHeaders: async(headers, { getState }) => {
            const token = await AsyncStorage.getItem("token");
            
            headers.set('type', 'customer');
            
            if (token) {
              headers.set('authorization', token);
            }            
            return headers;
          },
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
            },
            transformResponse: async (Response, meta) => {
                try {
                    if (meta?.response?.headers && 'authorization' in meta?.response?.headers && typeof meta?.response?.headers.authorization == 'string' && meta?.response?.headers.authorization.length != 0) {
                        await AsyncStorage.setItem("token", meta?.response?.headers.authorization);
                    }
                }
                catch (er) {
                    console.log(er);
                }
                return { Response, meta }
            }
        })
    })
});

export const { useLoginMutation, useValidateOtpMutation } = authApi;