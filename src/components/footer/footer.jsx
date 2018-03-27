import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import { Default, Mobile } from 'components/responsive';
import { Form, Input } from 'components/forms';
import { isEmail } from 'components/forms/validations';
import Button from 'components/button/button';
import Logo from 'components/logo/footer_logo.png';

fontawesome.library.add(brands);

const FooterContainer = styled.div`
  padding: ${rem('48px')} 0;
  margin-top: ${rem('30px')};
  border-top: ${rem('10px')} solid ${props => props.theme.accent};
`;

const FooterLeft = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  padding-right: ${props => (props.mobile ? '0' : `${rem('20px')}`)};
  img {
    width: 60px;
    height: 60px;
  }
`;

const FooterLinks = styled.div`
  border-left: 1px solid black;
  padding-left: ${rem('20px')};
`;

const ContactLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  :link {
    font-weight: 400;
  }
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  padding-left: 0;
  margin-bottom: 0;
`;

const ListItem = styled.li`
  margin: 0;
  display: inline;
  a {
    margin: 0 ${rem('10px')};
  }
`;

const FormContainer = styled.div`
  vertical-align: middle;
`;

const MobileFooterContainer = FooterContainer.extend`
  text-align: center;
`;

const MobileFormContainer = styled.div`
  margin-top: ${rem('20px')};
  label,
  button {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = () => (
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
);

const FooterForm = () => (
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
);

const MobileFooterForm = () => (
  <Form name="subscribe" successText="You subscribed!">
    <Input
      label={{ text: 'Subscribe to our newsletter!' }}
      name="email"
      placeholder="example@email.com"
      validate={isEmail}
      required
    />
    <Button text="Subscribe!" />
  </Form>
);

const Footer = () => (
  <div>
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
                <SocialLinks />
              </FooterLinks>
            </FooterLeft>
          </Cell>
          <Cell width={4}>
            <FormContainer>
              <FooterForm />
            </FormContainer>
          </Cell>
          <Cell />
        </Grid>
      </FooterContainer>
    </Default>
    <Mobile>
      <MobileFooterContainer>
        <Grid columns={12}>
          <Cell width={3} />
          <Cell width={6}>
            <LogoContainer mobile>
              <img alt="footer-logo" src={Logo} />
            </LogoContainer>
          </Cell>
          <Cell width={3} />
          <Cell />
          <Cell width={10}>
            <ContactLink href="/about">Contact Us</ContactLink>
            <SocialLinks />
          </Cell>
          <Cell />
          <Cell width={2} />
          <Cell width={8}>
            <MobileFormContainer>
              <MobileFooterForm />
            </MobileFormContainer>
          </Cell>
          <Cell width={2} />
        </Grid>
      </MobileFooterContainer>
    </Mobile>
  </div>
);

export default Footer;
