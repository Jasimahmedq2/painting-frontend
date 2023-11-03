import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://paining-hut.vercel.app/api/v1/",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["service", "user"],
});
