import ApolloClient from 'apollo-boost';

require('dotenv').config();

const port = process.env.SERVER_PORT || 5000;

const uri = `http://localhost:${port}/graphql`;
console.log(uri);

export default new ApolloClient({
    uri 
})