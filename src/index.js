// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </ApolloProvider>,
  document.getElementById("root")
);
