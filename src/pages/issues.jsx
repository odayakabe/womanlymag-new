import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import HoverOverlay from 'components/hoverOverlay/hoverOverlay';
import Image from 'components/image/image';
/* eslint-enable import/no-unresolved */

const IssuesPage = ({ data }) => {
  const usEdges = data.us.edges;

  const issueGrid = usEdges.map(({ node }) => {
    const issueUrl = node.featured ? '/' : `/issues/${node.number}`;
    return (
      <Cell key={node.number} center middle>
        <HoverOverlay heading={`#${node.number}: ${node.title}`} url={issueUrl}>
          <Image
            alt={node.title}
            resolutions={node.articles[0].thumbnail.resolutions}
            title={`#${node.number}: ${node.title}`}
            isBackground
          />
        </HoverOverlay>
      </Cell>
    );
  });

  return (
    <div>
      <Mobile>
        <Grid
          columns="repeat(auto-fit,minmax(300px,1fr))"
          gap="40px"
          minRowHeight="500px"
        >
          {issueGrid}
        </Grid>
      </Mobile>
      <Default>
        <Grid
          columns="repeat(auto-fit,minmax(300px,1fr))"
          gap="40px"
          minRowHeight="500px"
        >
          {issueGrid}
        </Grid>
      </Default>
    </div>
  );
};

export default IssuesPage;

export const pageQuery = graphql`
  query issuesQuery {
    us: allContentfulIssue(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          number
          featured
          articles {
            ... on ContentfulArticle {
              thumbnail {
                resolutions(width: 500, height: 500) {
                  ...GatsbyContentfulResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;
