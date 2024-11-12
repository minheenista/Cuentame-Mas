import { URI } from "@/constants/constants";
import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URI,
  }),
}); */

const httpLink = createHttpLink({
  uri: URI,
});

const authLink = setContext(async (_, { headers }) => {
  // Obtiene el token de AsyncStorage
  const token = await AsyncStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
