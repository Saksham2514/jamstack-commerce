import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import {CartProvider} from 'react-use-cart'

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>

  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  </CartProvider>
);
