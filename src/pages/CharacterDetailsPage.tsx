import { gql } from '@apollo/client';

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      gender
    }
  }
`;
