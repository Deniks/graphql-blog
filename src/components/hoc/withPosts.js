import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const GET_POSTS = gql`
    query GetPosts {
        posts {
            id
            author
            body
        }
    }
`;

export function withPosts(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
  
      render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return (
          <Query query={GET_POSTS}>
          {
              ({ loading, err, data }) => {
                  if (loading) console.log('loading...')
                  if (err) return `Error! ${err.message}`;
                  return !loading && (
                      data.posts.map(post => (
                        <WrappedComponent 
                            title={post.author}
                            date={"april"}
                            description={post.body}
                            {...this.props} 
                        />
                      ))
                 )  
              }
          }
         </Query>
        );
      }
    };
  }