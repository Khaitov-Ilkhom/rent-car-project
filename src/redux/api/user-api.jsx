import { api } from "./Index.jsx";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["USER"]
    }),
    getProfile: build.query({
      query: () => ({
        url: "/auth/profile",
      }),
      providesTags: ["USER"]
    }),
    deletedUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETED",
      }),
      invalidatesTags: ["USER"]
    })
  }),
});

export const { useGetAllUsersQuery, useGetProfileQuery, useDeletedUserMutation } = usersApi