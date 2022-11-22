import { ApolloClient, HttpLink, from, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import { RetryLink } from '@apollo/client/link/retry';
import { TypedTypePolicies } from './apollo-helpers';
import { API_ENDPOINT } from 'configs';

const createApolloClient = async (token: string) => {
  //const uri = `${process.env.API_ENDPOINT}/v1/graphql`;
  const uri = `${API_ENDPOINT}/v1/graphql`;

  const httpLink = new HttpLink({
    uri,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    credentials: 'same-origin',
  });

  const retryLink = new RetryLink();

  const link = from([retryLink, httpLink]);

  const typePolicies: TypedTypePolicies = {
    User: {
      keyFields: ['id'],
    },
    MeOutput: {
      keyFields: ['user_id'],
    },
    query_root: {
      fields: {
        Transactions: offsetLimitPagination(['category_id', '_gte', '_lte']),
      },
    },
  };

  const cache = new InMemoryCache({ typePolicies });

  const client = new ApolloClient({
    link,
    cache,
    defaultOptions: { mutate: { errorPolicy: 'all' } },
    connectToDevTools: __DEV__,
  });

  return client;
};

export { createApolloClient };
