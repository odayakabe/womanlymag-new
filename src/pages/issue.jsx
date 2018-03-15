import React from 'react';
/* eslint-disable import/no-unresolved */
import ArticleGrid from 'components/articleGrid/articleGrid';
/* eslint-enable import/no-unresolved */

const IssuePage = ({ data }) => {
  const { us: { articles, number, title } } = data;

  return (
    <React.Fragment>
      <h1>
        Issue #{number}: {title}
      </h1>
      <ArticleGrid articles={articles} />
    </React.Fragment>
  );
};

export default IssuePage;

export const pageQuery = graphql`
  query issueQuery($number: Int!) {
    us: contentfulIssue(number: { eq: $number }) {
      id
      number
      title
      articles {
        ... on ContentfulArticle {
          title
          slug
          previewText
          thumbnail {
            resolutions(width: 400, height: 400) {
              ...GatsbyContentfulResolutions
            }
          }
          featured
        }
      }
    }
  }
`;
