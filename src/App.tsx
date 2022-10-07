import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import styled from 'styled-components';
import Header from './components/header/Header';
import Favorite from './pages/favorite/Favorite';
import Home from './pages/home/Home';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({uri: "https://api.spacex.land/graphql/"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

const AppWraper = styled.div`
`

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>  
    </ApolloProvider>
  );
}

export default App;
