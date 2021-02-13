import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    products: [Product]
  }
  type Product {
    id: ID!
    name: String
    img: String
    content: String
    price: Int
    name_eng: String
    kcal: String
    protein: String
    sat_fat: String
    sodium: String
    sugars: String
    caffeine: String
    category: String
  }
`;
