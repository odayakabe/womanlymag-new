import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
/* eslint-disable import/no-unresolved */
import NavBar from 'components/navbar/navbar';
import mainTheme from 'styles/mainTheme';
/* eslint-enable import/no-unresolved */

injectGlobal`
  ${styledNormalize}

  html, body {
    font-family: 'Yantramanav', sans-serif;
  }
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
        <NavBar />
        {children()}
      </div>
    </ThemeProvider>
  </div>
);

export default TemplateWrapper;
