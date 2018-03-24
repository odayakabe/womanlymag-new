import React from 'react';
import _ from 'lodash';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import { rem } from 'polished';

import { Default, Mobile } from 'components/responsive';
import HoverOverlay from 'components/hoverOverlay/hoverOverlay';
import Image from 'components/image/image';

const MobileContainer = styled.div`
  margin: 0 ${rem('30px')};
`;

const IssuesPage = ({ data }) => {
  const usEdges = data.us.edges;
  const issues = _.sortBy(usEdges, ({ node }) => node.number);

  const issueGrid = issues.map(({ node }) => {
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
        <MobileContainer>
          <h1>Issues</h1>
          <Grid
            columns="repeat(auto-fit,minmax(300px,1fr))"
            gap="40px"
            minRowHeight="500px"
          >
            {issueGrid}
          </Grid>
        </MobileContainer>
      </Mobile>
      <Default>
        <h1>Issues</h1>
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
