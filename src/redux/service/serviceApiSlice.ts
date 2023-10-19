import { api } from "../api";

const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addService: builder.mutation({
      query: (data) => ({
        url: `/service/add-service`,
        method: "POST",
        headers: {
          authorization: `${data.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["service"],
    }),
    getCategory: builder.query({
      query: (token) => ({
        url: `/category/get-categories`,
        headers: {
          authorization: `${token}`,
        },
      }),
      providesTags: ["service"],
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: `/category/add-category`,
        method: "POST",
        headers: {
          authorization: `${data.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["service"],
    }),
    getSingleCategory: builder.query({
      query: (data) => ({
        url: `/category/get-category/${data.id}`,
        headers: {
          authorization: `${data.token}`,
        },
      }),
      providesTags: ["service"],
    }),
    getSingleService: builder.query({
      query: (data) => ({
        url: `/service/get-service/${data.id}`,
        headers: {
          authorization: `${data.token}`,
        },
      }),
      providesTags: ["service"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: `/cart/add-to-cart`,
        method: "POST",
        headers: {
          authorization: `${data.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["service"],
    }),
    getCart: builder.query({
      query: (token) => ({
        url: `/cart/get-cart`,
        headers: {
          authorization: `${token}`,
        },
      }),
      providesTags: ["service"],
    }),
    getAllService: builder.query({
      query: (token) => ({
        url: `/service/get-services`,
        headers: {
          authorization: `${token}`,
        },
      }),
      providesTags: ["service"],
    }),
    addShipping: builder.mutation({
      query: (data) => ({
        url: `/shipping/add-shipping`,
        method: "POST",
        headers: {
          authorization: `${data?.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["service"],
    }),
    getShipping: builder.query({
      query: (token) => ({
        url: `/shipping/get-shipping`,
        headers: {
          authorization: `${token}`,
        },
      }),
      providesTags: ["service"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useAddCategoryMutation,
  useGetCategoryQuery,
  useGetSingleCategoryQuery,
  useGetSingleServiceQuery,
  useAddToCartMutation,
  useGetCartQuery,
  useGetAllServiceQuery,
  useAddShippingMutation,
  useGetShippingQuery,
} = serviceApi;
