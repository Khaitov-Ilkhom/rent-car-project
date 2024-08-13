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
      })
    })
  })
})

export const {useGetAllCarQuery} = carApi
