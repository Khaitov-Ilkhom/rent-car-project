import {api} from "./Index.jsx";

const carApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCar: build.query({
      query: (params) => ({
        url: "/cars",
        params: {
          categories: params?.categories,
          ...params
        }
      }),
      providesTags: ["CARS"]
    }),
    getCar: build.query({
      query: (id) => ({
        url: `cars/${id}`,
      })
    }),
    createCar: build.mutation({
      query: (body) => ({
        url: "cars/create",
        method: "POST",
        body
      }),
      invalidatesTags: ["CARS"]
    }),
    deleteCar: build.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ["CARS"]
    })
  })
})

export const {useGetAllCarQuery, useDeleteCarMutation, useCreateCarMutation, useGetCarQuery} = carApi
