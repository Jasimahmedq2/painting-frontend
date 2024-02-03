import { api } from "../api";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPendingOrder: builder.query({
      query: (token) => ({
        url: `/order/pending`,
        headers: {
          authorization: `${token}`,
        },
      }),
      providesTags: ["order"],
    }),
    getCompletedOrder: builder.query({
      query: (token) => ({
        url: `/order/completed`,
        headers: {
          authorization: `${token}`,
        },
      }),
      providesTags: ["order"],
    }),
    getCanceledOrder: builder.query({
      query: (token) => ({
        url: `/order/canceled`,
        headers: {
          authorization: `${token}`,
        },
      }),
      providesTags: ["order"],
    }),
  }),
});

export const {
  useGetPendingOrderQuery,
  useGetCompletedOrderQuery,
  useGetCanceledOrderQuery,
} = orderApi;
