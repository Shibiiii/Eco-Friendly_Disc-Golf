import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!, $quantities: [Int!]!) {
    createOrder(products: $products, quantities: $quantities) {
      date
      total
      status
      products {
        product {
          _id
          name
          description
          price
          category {
            name
          }
        }
        quantity
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      _id
      firstName
      lastName
      email
    }
  }
`;
