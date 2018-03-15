import React from 'react';
/* eslint-disable import/no-unresolved */
import ArticleGrid from 'components/articleGrid/articleGrid';
import Hero from 'components/hero/hero';
/* eslint-enable import/no-unresolved */

const IndexPage = ({ data }) => {
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
