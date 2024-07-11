import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateProducts } from "../features/productSlice";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (options) => {
        let url = "/api/products";
        if (options?.category) {
          url += `?category=${options.category}`;
        }

        return {
          url: url,
          method: "GET",
        };
      },
      providesTags: ["Products"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(updateProducts(data));
        } catch (err) {
          console.error("Error fetching products:", err);
        }
      },
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/api/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        console.log("options for update in api", options);
        return {
          url: `/api/products/${options.id}`,
          method: "PATCH",
          body: options,
        };
      },
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        console.log("Delete options", id);
        return {
          url: `/api/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Products"],
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/api/order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddOrderMutation,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
