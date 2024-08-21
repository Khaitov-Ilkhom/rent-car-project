import { api } from "./Index.jsx";

const categoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: "/categories",
      }),
      providesTags: ["CARS"]
    }),
    createCategory: build.mutation({
      query: (body) => ({
        url: "/categories/create",
        method: "POST",
        body
      }),
      invalidatesTags: ["CARS"]
    }),
    deletedCategory: build.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CARS"]
    })
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation, useDeletedCategoryMutation } = categoriesApi