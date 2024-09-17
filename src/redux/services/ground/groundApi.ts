import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIEndPoints } from "../../../services/APIEndpoints";
import { RootState } from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const groundApi = createApi({
    reducerPath: 'GroundApi',
    baseQuery: fetchBaseQuery({
        baseUrl: APIEndPoints.BackendUrl,
        prepareHeaders: async (headers, { getState }) => {
            const token = await AsyncStorage.getItem("token");

            headers.set('type', 'customer');

            if (token) {
                headers.set('authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchGrounds: builder.query({
            query: (body) => {                
                return {
                    url: APIEndPoints.get_grounds,
                    method: 'GET',
                    params: body
                }
            }
        })
    })
});

export const { useFetchGroundsQuery } = groundApi;