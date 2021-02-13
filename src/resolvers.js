import { Product } from "./models/product";

export const resolvers = {
  Query: {
    products: () => Product.find({}),
  },
};
