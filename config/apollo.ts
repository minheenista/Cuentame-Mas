import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
/* import { ENDPOINT_URL } from ".env";
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://cuentame-mas-api.onrender.com/graphql",
  }),
});

export default client;
