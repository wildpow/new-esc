import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'; 
// import { persistCache } from 'apollo-cache-persist';

// persistCache({
//   cache: client.cache,
//   storage: window.localStorage
// })

import App from './App';

WebFont.load({
  google: {
    families: ['Open Sans', 'Roboto:bold']
  }
});

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/escPandaMattressTesting';

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});


ReactDOM.render(
  <HashRouter>
    <ApolloProvider client={ client } >
      <App />
    </ApolloProvider>
  </HashRouter>
  , document.getElementById('root'));

