import { api } from "../api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `/auth/registration`,
        method: "POST",
        body: data,
      }),
    }),
    verifyEmail: builder.mutation({
      query(token) {
        return {
          url: `/auth/verify/${token}`,
          method: "POST",
          body: token,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: `/auth/login`,
          method: "POST",
          body: data,
        };
      },
    }),
    getPainterUser: builder.query({
      query(token) {
        return {
          url: `/user/painter`,
          headers: {
            authorization: `${token}`,
          },
        };
      },
      providesTags: ["user"],
    }),
    getAllUser: builder.query({
      query(token) {
        return {
          url: `/user/get-users`,
          headers: {
            authorization: `${token}`,
          },
        };
      },
      providesTags: ["user"],
    }),
    getUserOrder: builder.query({
      query(token) {
        return {
          url: `/order/get-user-order`,
          headers: {
            authorization: `${token}`,
          },
        };
      },
      providesTags: ["service"],
    }),
    changeRole: builder.mutation({
      query(data) {
        return {
          url: `/user/role/${data?.userId}`,
          method: "PUT",
          headers: {
            authorization: `${data?.token}`,
          },
          body: { role: data?.role },
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query(data) {
        return {
          url: `/user/delete/${data?.userId}`,
          method: "DELETE",
          headers: {
            authorization: `${data?.token}`,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    userProfile: builder.query({
      query(token) {
        return {
          url: `/user/profile`,
          headers: {
            authorization: `${token}`,
          },
        };
      },
      providesTags: ["user"],
    }),
    profileUpdate: builder.mutation({
      query(data) {
        return {
          url: `/user/profile/update`,
          method: "PATCH",
          headers: {
            authorization: `${data?.token}`,
          },
          body: data.info,
        };
      },
      invalidatesTags: ["user"],
    }),
    subsCribeNewsLetter: builder.mutation({
      query(data) {
        return {
          url: `/newsLetter/subscribe`,
          method: "POST",
          headers: {
            authorization: `${data?.token}`,
          },
          body: data?.email,
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useLoginUserMutation,
  useGetPainterUserQuery,
  useGetAllUserQuery,
  useChangeRoleMutation,
  useGetUserOrderQuery,
  useUserProfileQuery,
  useProfileUpdateMutation,
  useDeleteUserMutation,
  useSubsCribeNewsLetterMutation,
} = authApi;
