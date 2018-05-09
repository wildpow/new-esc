import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'; 
import { persistCache } from 'apollo-cache-persist';
import App from './App';





const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cjgxnivkm0w620175u1s1x3mb';
const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

persistCache({
  cache: client.cache,
  storage: window.localStorage
})


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={ client } >
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'));
  registerServiceWorker();

