import React from 'react';

// TODO: for after launch
const GlossaryPage = () => <div />;

export default GlossaryPage;

export const pageQuery = graphql`
  query glossaryQuery {
    us: allContentfulPage(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "glossary" } }
    ) {
      edges {
        node {
          id
          content {
            ... on ContentfulList {
              title
              items {
                ... on ContentfulDefinition {
                  title
                  text {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
