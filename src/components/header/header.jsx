import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Default, Mobile } from 'components/responsive';
import logo from 'images/logo.png';

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  border-bottom: ${rem('10px')} solid ${props => props.theme.headerBorderColor};
  padding-top: ${rem('150px')};
  z-index: -2;
`;

const MobileContainer = Container.extend`
  padding-top: ${rem('50px')};
  margin-bottom: ${rem('100px')};
  border-bottom: 0px;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: ${rem('22px')};
  left: ${rem('20px')};
  right: 0;
  margin: 0 auto;
  max-width: ${rem('500px')};
  z-index: -1;
`;

const MobileLogo = StyledLogo.extend`
  max-width: ${rem('300px')};
`;

const Header = () => (
  <React.Fragment>
    <Mobile>
      <MobileContainer>
        <MobileLogo src={logo} alt="Womanly" />
      </MobileContainer>
    </Mobile>
    <Default>
      <Container>
        <StyledLogo src={logo} alt="Womanly" />
      </Container>
    </Default>
  </React.Fragment>
);

export default Header;
