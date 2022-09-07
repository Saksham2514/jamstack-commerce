import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username,
        email,
        role {
          name,
        }
      }
    }
  }
`;
/*
{
  "input": {
    "identifier": "ramesh123@gmail.com",
    "password": "1234567"
  }
}
*/


export const REGISTER = gql`
mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        role {
          name
        }
        username
        email
        confirmed
      }
    }
  }
`;
/*
{
  "input": {
      "username": "ramesh13",
  "email": "ramesh123@gmail.com",
  "password": "1234887",
  }
}
*/



