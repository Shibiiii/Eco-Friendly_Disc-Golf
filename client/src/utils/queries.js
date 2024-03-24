import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  {
    products {
      _id
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
      _id
      name
      description
      price
      stock
      category
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      firstName
      lastName
      orders {
        _id
        date
        products {
          product {
            _id
            name
            description
            price
            image
            category
          }
          quantity
        }
      }
    }
  }
`;
