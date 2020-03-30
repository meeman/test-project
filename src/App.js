import React from 'react';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_Home
} from './routes'
import { UserContextProvider } from './Components/context/user-context';



const httpLink = createHttpLink({
  uri: "https://api.spacex.land/graphql/"
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path={ROUTE_LOGIN()} exact component={LoginPage} />
            <Route path={ROUTE_SIGNUP()} exact component={SignupPage} />
            <Route path={ROUTE_Home()} exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </ApolloProvider>
  );
}

export default App;
