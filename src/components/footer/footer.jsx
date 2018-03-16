import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import { Form, Input } from 'components/forms';
import { isEmail } from 'components/forms/validations';
import Button from 'components/button/button';
import Logo from 'components/logo/footer_logo.png';
/* eslint-enable import/no-unresolved */

fontawesome.library.add(brands);

const FooterContainer = styled.div`
  padding: ${rem('48px')} 0;
  border-top: ${rem('10px')} solid ${props => props.theme.accent};
`;

const List = styled.ul`
  display: flex;
  justify-content: left;
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const ListItem = styled.li`
  margin: 0;
  a {
    margin-right: ${rem('20px')};
  }
`;

const ContactLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  :link {
    font-weight: 400;
  }
`;

const FooterLinks = styled.div`
  border-left: 1px solid black;
  padding-left: ${rem('20px')};
`;

const FormContainer = styled.div`
  vertical-align: middle;
`;

const LogoContainer = styled.div`
  padding-right: ${rem('20px')};
  img {
    width: 60px;
    height: 60px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
`;

const Footer = () => (
  <div>
    <Mobile>
      <Grid columns={12}>
        <Cell />
        <Cell width={10}>
          <FooterLinks>
            <ContactLink href="/about">Contact Us</ContactLink>
            <List>
              <ListItem>
                <a href="">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
                </a>
              </ListItem>
              <ListItem>
                <a href="">
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                </a>
              </ListItem>
              <ListItem>
                <a href="">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                </a>
              </ListItem>
            </List>
          </FooterLinks>
        </Cell>
        <Cell />
      </Grid>
    </Mobile>
    <Default>
      <FooterContainer>
        <Grid columns={12} alignContent="center">
          <Cell />
          <Cell width={6}>
            <FooterLeft>
              <LogoContainer>
                <img alt="footer-logo" src={Logo} />
              </LogoContainer>
              <FooterLinks>
                <ContactLink href="/about">Contact Us</ContactLink>
                <List>
                  <ListItem>
                    <a href="https://www.facebook.com/womanlymag">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="https://twitter.com/womanlymag">
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="https://www.instagram.com/womanlymag">
                      <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                    </a>
                  </ListItem>
                </List>
              </FooterLinks>
            </FooterLeft>
          </Cell>
          <Cell width={4}>
            <FormContainer>
              <Form name="subscribe" successText="You subscribed!">
                <Input
                  addOn={<Button text="Subscribe" />}
                  label={{ text: 'Subscribe to our newsletter!' }}
                  name="email"
                  placeholder="example@email.com"
                  validate={isEmail}
                  required
                />
              </Form>
            </FormContainer>
          </Cell>
          <Cell />
        </Grid>
      </FooterContainer>
    </Default>
  </div>
);

export default Footer;
