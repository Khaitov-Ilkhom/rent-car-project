import {api} from "./Index.jsx";

const carApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCar: build.query({
      query: () => ({
        url: "/cars",
      })
    }),
  }) 
})

export const {useGetAllCarQuery} = carApi