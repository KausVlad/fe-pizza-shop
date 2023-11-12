import { pizzaApi } from "./pizza.api";

export const pizzaEndpoints = pizzaApi.injectEndpoints({
  endpoints: (builder) => ({
    getPizzas: builder.query({
      query: () => ({
        url: "/pizzas/all",
        // params: {
        //   ingredientName,
        // },
      }),
    }),
  }),
});
