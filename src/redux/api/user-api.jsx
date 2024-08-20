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
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PUT",
        body: {avatar: data.avatar}
      }),
      invalidatesTags: ["USER"]
    })
  }),
});

export const { useGetAllUsersQuery, useGetProfileQuery, useDeletedUserMutation, useUpdateUserMutation } = usersApi