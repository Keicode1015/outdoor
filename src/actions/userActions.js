// src/actions/userActions.js
import { gql } from "@apollo/client";
import client from "../apolloClient";

export const REGISTER_USER = "REGISTER_USER";

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const registerUser = (username, email, password) => async (dispatch) => {
  const { data } = await client.mutate({
    mutation: REGISTER_MUTATION,
    variables: { username, email, password },
  });
  dispatch({ type: REGISTER_USER, payload: data.register });
};
