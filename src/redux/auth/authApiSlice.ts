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
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useLoginUserMutation,
  useGetPainterUserQuery,
} = authApi;
