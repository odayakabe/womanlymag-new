import React from 'react';
import styled from 'styled-components';

import { Default, Mobile } from 'components/responsive';
import ArticleGrid from 'components/articleGrid/articleGrid';

const MobileHeader = styled.h1`
  text-align: center;
`;

const IssuePage = ({ data }) => {
  const { us: { articles, number, title } } = data;
  const headerText = `Issue #${number}: ${title}`;

  return (
    <React.Fragment>
      <Mobile>
        <MobileHeader>{headerText}</MobileHeader>
      </Mobile>
      <Default>
        <h1>{headerText}</h1>
      </Default>
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
