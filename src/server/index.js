require('dotenv').config();

const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
const bodyParser = require('body-parser-graphql');

const app = express();
const port = process.env.SERVER_PORT || 4000;

const POSTS = [
    { author: "John Doe", body: "Hello world" },
    { author: "Jane Doe", body: "Hi, planet!" },
];

const schema = buildASTSchema(gql`
    type Query {
        posts: [Post]
        post(id: ID!): Post
    }

    type Post {
        id: ID
        author: String
        body: String,
    }

    type Mutation {
        submitPost(input: PostInput!): Post
    }
      
    input PostInput {
        id: ID
        author: String!
        body: String!
    }
`);

const mapPost = (post, id) => post && ({ id, ...post });

const root = {
    posts: () => POSTS.map(mapPost),
    post: ({ id }) => mapPost(POSTS[id], id),
    submitPost: ({ input: { id, author, body } }) => {
        const post = { author, body };
        let index = POSTS.length;
      
        if (id != null && id >= 0 && id < POSTS.length) {
          if (POSTS[id].authorId !== authorId) return null;
      
          POSTS.splice(id, 1, post);
          index = id;
        } else {
          POSTS.push(post);
        }
      
        return mapPost(post, index);
    },
    dateTimeResolver: () => ({
        date: new Date(),
        dateTime: new Date(new Date() - 234798274),
    })
}

app.use(bodyParser.graphql())
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port, err => {
    if (err) throw err 
    else {
        console.log(
          `
            Running a GraphQL API server at localhost: ${port}/graphql
          `,
        );
      }
});
