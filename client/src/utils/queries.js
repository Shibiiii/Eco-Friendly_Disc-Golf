import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query Product($productId: ID) {
    product(id: $productId) {
      id
      name
      description
      price
      stock
      image
      category
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      id
      name
      description
      stock
      price
      image
      category
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories
  }
`;

export const QUERY_USER = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      firstName
      lastName
      orders {
        id
        date
        items {
          quantity
          product {
            name
            id
            description
            price
            stock
            category
          }
        }
      }
    }
  }
`;