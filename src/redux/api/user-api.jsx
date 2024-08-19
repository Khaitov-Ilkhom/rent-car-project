import { api } from "./Index.jsx";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/users",
      }),
    }),
    getProfile: build.query({
      query: () => ({
        url: "/auth/profile",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useGetProfileQuery } = usersApi