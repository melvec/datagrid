import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, ItemsArray } from "../axios/dataAxios";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
});

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchItems: builder.query<ItemsArray, void>({
      query: () => "/items",
    }),
  }),
});

export const { useFetchItemsQuery } = itemsApi;
