import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { rem } from 'polished';

import { List, ListItem } from 'components/list';
import Paragraph from 'components/typography/paragraph';
import TextLink from 'components/textLink/textLink';

const Heading = styled.span`
  display: flex;
  align-items: center;

  @media (max-width: ${props => props.theme.mobileMax}) {
    flex-flow: row wrap;
    font-size: 125%;
    justify-content: center;
  }
`;

const Name = styled.h3`
  margin: 0;
  padding-right: ${rem('10px')};
`;

const StyledListItem = styled(({ ...rest }) => <ListItem {...rest} />)`
  margin-right: ${rem('10px')};
`;

const Contributor = ({ bio, name, socialMediaLinks, title }) => (
  <div>
    <Heading>
      <Name>{name}</Name>
      {title && <span>({title})</span>}
    </Heading>
    <div>
      {bio && (
        <Paragraph>
          <span
            dangerouslySetInnerHTML={{
              __html: bio.childMarkdownRemark.html,
            }}
          />
        </Paragraph>
      )}
      {socialMediaLinks && (
        <List inline>
          {_.map(socialMediaLinks, (link, id) => (
            <StyledListItem key={id}>
              <TextLink external to={link.url} text={link.type} underline />
            </StyledListItem>
          ))}
        </List>
      )}
    </div>
  </div>
);

Contributor.defaultProps = {
  bio: null,
  socialMediaLinks: null,
  title: null,
};

Contributor.propTypes = {
  bio: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
  name: PropTypes.string.isRequired,
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default Contributor;
