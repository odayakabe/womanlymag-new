import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import { rem } from 'polished';

import Audio from 'components/audio/audio';
import Contributor from 'components/contributor/contributor';
import Lightbox from 'components/lightbox/lightbox';
import Paragraph from 'components/typography/paragraph';
import Video from 'components/video/video';

const Issue = styled.div`
  display: inline-block;
  font-weight: 700;
  background: ${props => props.theme.issueLabelBg};
  padding: ${rem('5px')} ${rem('10px')};
  text-transform: uppercase;
  margin-bottom: ${rem('15px')};
`;

const ContentCell = styled(({ ...rest }) => <Cell {...rest} />)`
  @media (max-width: ${props => props.theme.mobileMax}) {
    padding: 0 ${rem('20px')};
    text-align: center;
  }
`;

const ArticlePage = ({ data }) => {
  const usNode = data.us;
  const {
    audioUrl,
    contributors,
    issue,
    media,
    tags,
    text,
    title,
    videoUrl,
  } = usNode;
  const hasMedia = media || videoUrl || audioUrl;

  return (
    <Grid columns="repeat(auto-fit,minmax(400px,1fr))" gap="40px">
      {hasMedia && (
        <Cell>
          {media && <Lightbox images={media} />}
          {videoUrl && <Video url={videoUrl} />}
          {audioUrl && <Audio url={audioUrl} title={title} />}
        </Cell>
      )}
      <ContentCell>
        <Issue>{`Issue ${issue[0].number}: ${issue[0].title}`}</Issue>
        <h1>{title}</h1>
        {contributors.map(contributor => (
          <Contributor key={contributor.name} name={contributor.name} />
        ))}
        {text && (
          <Paragraph>
            <span
              dangerouslySetInnerHTML={{
                __html: text.childMarkdownRemark.html,
              }}
            />
          </Paragraph>
        )}
        {tags && (
          <div>
            <strong>Tags:</strong> {tags.map(tag => tag.text).join(', ')}
          </div>
        )}
      </ContentCell>
    </Grid>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query articleQuery($slug: String!) {
    us: contentfulArticle(slug: { eq: $slug }) {
      slug
      title
      audioUrl
      videoUrl
      issue {
        ... on ContentfulIssue {
          number
          title
        }
      }
      contributors {
        ... on ContentfulContributor {
          name
          image {
            file {
              url
            }
          }
        }
      }
      media {
        title
        description
        ... on ContentfulAsset {
          sizes {
            ...GatsbyContentfulSizes
          }
        }
      }
      text {
        childMarkdownRemark {
          html
        }
      }
      resources {
        ... on ContentfulResource {
          title
          url
          text
        }
      }
      featured
      tags {
        ... on ContentfulTag {
          text
        }
      }
    }
  }
`;
