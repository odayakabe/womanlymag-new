import React from 'react';
import ArticleGrid from 'components/articleGrid/articleGrid';
import Hero from 'components/hero/hero';

// Remove after "under construction"
import styled from 'styled-components';
import { rem } from 'polished';
import TextLink from 'components/textLink/textLink';

const UnderConstructionBs = styled.div`
  margin: ${rem('50px')};
  text-align: center;
`;
// end of dependencies for "under construction"

const IndexPage = ({ data }) => {
  // Remove after "under construction"
  if (process.env.GATSBY_UNDER_CONSTRUCTION_BS) {
    return (
      <UnderConstructionBs>
        <h1>Under Construction</h1>
        <TextLink
          text="Check out our Instagram!"
          to="http://instagram.com/womanlymag"
          large
          external
        />
      </UnderConstructionBs>
    );
  }
  // end of "under construction"

  const usNode = data.us.edges[0].node;
  const hero = usNode.content.find(el => el.__typename === 'ContentfulHero');
  const issue = usNode.content.find(el => el.__typename === 'ContentfulIssue');

  return (
    <div>
      <Hero sizes={hero.media.sizes} title={hero.title} />
      <ArticleGrid articles={issue.articles} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query homePageQuery {
    us: allContentfulPage(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "index" } }
    ) {
      edges {
        node {
          id
          content {
            ... on ContentfulHero {
              title
              media {
                sizes {
                  ...GatsbyContentfulSizes
                }
              }
            }
            ... on ContentfulIssue {
              title
              featured
              articles {
                title
                previewText
                slug
                thumbnail {
                  resolutions(width: 400, height: 400) {
                    ...GatsbyContentfulResolutions
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
