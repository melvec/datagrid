import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type ItemsArray = Item[];

export const baseURL = `${import.meta.env.VITE_API_BASE_URL}:${
  import.meta.env.VITE_PORT
}`;

export interface Properties {
  [key: string]: string | number; // Allows any number of properties with string keys and string or number values
}

// Define an interface for each item in the array
export interface Item {
  guid: string;
  name: string;
  path: string[];
  properties: Properties;
}

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
