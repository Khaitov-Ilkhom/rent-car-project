import {api} from "./Index.jsx"

const ordersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllOrders: build.query({
      query: () => ({
        url: "/orders"
      }),
      providesTags: ["ORDERS"]
    }),
    createOrder: build.mutation({
      query: (body) => ({
        url: "/orders/create",
        method: "POST",
        body
      }),
      invalidatesTags: ["ORDERS"]
    }),
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ORDERS"]
    })
  })
})

export const {useGetAllOrdersQuery, useCreateOrderMutation, useDeleteOrderMutation} = ordersApi