import * as moment from 'moment';
import * as React from 'react';
import { Feed, Header, Icon, Image } from 'semantic-ui-react';
import PostView from '../PostView/Postview';
import { RedditComment } from '../../containers/ArticleListContainer/ArticleListContainer';

interface Props {
  source: string;
  link: string;
  postDate: Date;
  permalink: string;
  handleClick: (link: string) => void;
  title: string;
  image: string;
  icon: string;
  comments: number;
  upVotes: number;
  redditComments?: RedditComment[];
}

const ArticlePreview = (props: Props) => {
  const {
    source,
    link,
    title,
    handleClick,
    image,
    icon,
    postDate,
    permalink,
    redditComments,
    comments,
    upVotes,
  } = props;
  return (
    <Feed.Event>
      <Feed.Content>
        <Header
          size="medium"
          icon={icon}
          as="a"
          href={link}
          target="_blank"
          content={title}
          subheader={moment(postDate).from(Date.now())}
        />
        <Feed.Summary>{source}</Feed.Summary>
        {image !== null && (
          <Feed.Extra style={{ maxWidth: 400, margin: 'auto' }}>
            <Image src={image} as="a" href={link} target="_blank" fluid />
          </Feed.Extra>
        )}
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />
            {upVotes}
          </Feed.Like>
          <Feed.Like onClick={() => handleClick(permalink)}>
            <PostView title={title} image={image} redditComments={redditComments}>
              {`${comments}`}
            </PostView>
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
};

export default ArticlePreview;
