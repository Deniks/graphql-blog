import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import IndexPage from './pages/index';
import client from './apollo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ApolloProvider client={client}>
        <IndexPage />
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
if (module.hot) module.hot.accept();