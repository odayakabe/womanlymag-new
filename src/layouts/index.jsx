import React from 'react';
import Helmet from 'react-helmet';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { Grid, Cell } from 'styled-css-grid';

import { Default, Mobile } from 'components/responsive';
import Header from 'components/header/header';
import NavBar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';
import mainTheme from 'styles/mainTheme';

injectGlobal`
  ${styledNormalize}

  html, body {
    font-family: 'Yantramanav', sans-serif;
    font-size: 100%;
  }

  a, a:link {
    color: ${mainTheme.text};
    font-weight: 700;
    &:hover { color: ${mainTheme.linkHoverColor}; }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`;

const MobileNavContainer = styled(Grid)`
  height: 0;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Womanly Mag | Art & Health on the Global Woman and Non-Binary"
      meta={[
        {
          name: 'description',
          content: 'Art & Health on the Global Woman and Non-Binary',
        },
        {
          name: 'keywords',
          content:
            'art, health, global, woman, nonbinary, non-binary, women, magazine',
        },
      ]}
    />
    <ThemeProvider theme={mainTheme}>
      <div>
        <Header />
        <Mobile>
          <MobileNavContainer columns={12}>
            <Cell />
            <Cell width={10}>
              <NavBar />
            </Cell>
            <Cell />
          </MobileNavContainer>
          <Grid columns={12}>
            <Cell width={12}>{children()}</Cell>
          </Grid>
          <Footer />
        </Mobile>
        <Default>
          <Grid columns={12}>
            <Cell />
            <Cell width={10}>
              <NavBar />
              {children()}
            </Cell>
            <Cell />
          </Grid>
          <Footer />
        </Default>
      </div>
    </ThemeProvider>
  </div>
);

export default TemplateWrapper;
