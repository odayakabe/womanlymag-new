import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Default, Mobile } from 'components/responsive';
import { List, ListItem } from 'components/list';
import TextLink from 'components/textLink/textLink';

const StyledMobile = styled(Mobile)`
  padding: ${rem('20px')};
`;

const StyledListItem = styled(ListItem)`
  margin-bottom: ${rem('15px')};
`;

const StyledText = styled.span`
  font-size: 125%;
`;

const ResourcesPage = ({ data }) => {
  const usNode = data.us.edges[0].node;
  const resources = usNode.content.find(
    el => el.__typename === 'ContentfulList'
  );

  const content = (
    <div>
      <h1>{resources.title}</h1>
      <List>
        {resources.items.map(resource => (
          <StyledListItem id={resource.title} key={resource.title}>
            <TextLink
              external
              to={resource.url}
              text={resource.title}
              large
              underline
            />{' '}
            - <StyledText>{resource.text}</StyledText>
          </StyledListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <StyledMobile>{content}</StyledMobile>
      <Default>{content}</Default>
    </React.Fragment>
  );
};

export default ResourcesPage;

export const pageQuery = graphql`
  query resourcesQuery {
    us: allContentfulPage(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "resources" } }
    ) {
      edges {
        node {
          id
          content {
            ... on ContentfulList {
              title
              items {
                ... on ContentfulResource {
                  title
                  url
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;
