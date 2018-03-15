import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import HoverOverlay from 'components/hoverOverlay/hoverOverlay';
import Image from 'components/image/image';
/* eslint-enable import/no-unresolved */

const MobileContainer = styled.div`
  margin: 0 ${rem('30px')};
`;

const ArticleGrid = ({ articles }) => {
  const grid = articles.map(article => (
    <Cell key={article.slug} center middle>
      <HoverOverlay
        heading={article.title}
        text={`${article.previewText}...`}
        url={`/articles/${article.slug}`}
      >
        <Image
          alt={article.title}
          resolutions={article.thumbnail.resolutions}
          title={article.previewText}
          isBackground
        />
      </HoverOverlay>
    </Cell>
  ));

  return (
    <div>
      <Mobile>
        <MobileContainer>
          <Grid
            columns="repeat(auto-fit,minmax(300px,1fr))"
            gap="40px"
            minRowHeight="300px"
          >
            {grid}
          </Grid>
        </MobileContainer>
      </Mobile>
      <Default>
        <Grid
          columns="repeat(auto-fit,minmax(300px,1fr))"
          gap="40px"
          minRowHeight="300px"
        >
          {grid}
        </Grid>
      </Default>
    </div>
  );
};

export default ArticleGrid;
