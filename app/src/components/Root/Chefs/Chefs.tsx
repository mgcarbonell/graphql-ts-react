import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';

interface Chef {
  id: string;
  name: string;
  restaurants: Restaurant[];
}

interface QueryData {
  chefs: Chef[];
}

interface Restaurant {
  id: string;
  name: string;
}

const query = gql`
  {
    chefs {
      id
      name
      restaurants {
        id
        name
      }
    }
  }
`;

const Chefs = () => {
  const { data, loading } = useQuery(query);

  return <pre>{JSON.stringify(data, null, 2)}</pre>
};

export default Chefs
