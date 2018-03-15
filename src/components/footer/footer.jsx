import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import Image from 'components/image/image';
/* eslint-enable import/no-unresolved */

const FooterContainer = styled.div`
  padding: ${rem('48px')} 0;
  border-top: ${rem('10px')} solid ${props => props.theme.accent};
`;

const MobileFooterContainer = FooterContainer.extend`
  height: 50vh;
`;

const SocialLinks = styled.div`
  text-transform: uppercase;
  padding-left: ${rem('16px')};
  border-left: 1px solid black;
`;

const Footer = ({ data }) => {
  const footer = data.us.edges[0].node;
  const ListItems = footer.list.items.map(item => (
    <li>
      <a href={item.url}>
        <i className="fa fa-facebook icon" />
      </a>
    </li>
  ));
  return (
    <div>
      <Mobile>
        <MobileFooterContainer>
          <Image
            resolutions={footer.logo.resolutions}
            title={footer.logo.title}
            isBackground
          />
        </MobileFooterContainer>
      </Mobile>
      <Default>
        <FooterContainer>
          <Grid columns={12}>
            <Cell />
            <Cell width={10}>
              <Image
                resolutions={footer.logo.resolutions}
                title={footer.logo.title}
                sizes={footer.logo.sizes}
              />
              <SocialLinks>
                <ul title={footer.list.title}>
                  <ListItems />
                </ul>
              </SocialLinks>
            </Cell>
            <Cell />
          </Grid>
        </FooterContainer>
      </Default>
    </div>
  );
};

export default Footer;

export const pageQuery = graphql`
  query footerQuery {
    us: allContentfulFooter(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          logo {
            resolutions(width: 300, height: 300) {
              ...GatsbyContentfulResolutions
            }
          }
          list {
            title
            items {
              ... on ContentfulSocialMediaLink {
                type
                url
              }
            }
          }
        }
      }
    }
  }
`;
