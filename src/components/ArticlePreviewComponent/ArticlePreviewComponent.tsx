import * as React from 'react';
import { Feed, Header, Icon, Image, Divider } from 'semantic-ui-react';
import PostView from '../PostView/Postview';

interface Props {
  source: string;
  link: string;
  postDate: string;
  permalink: string;
  title: string;
  image: string;
  icon: string;
  comments: number;
  upVotes: number;
}

const ArticlePreview = (props: Props) => {
  const {
    source, link, title, image, postDate, permalink, comments, upVotes,
  } = props;
  return (
    <Feed.Event>
      <Feed.Content>
        <Header size="tiny">{source}</Header>
        <PostView title={title} image={image} permalink={permalink} date={postDate}>
          {title}
        </PostView>
        <Divider hidden />
        {image !== null && (
          <Feed.Extra style={{ maxWidth: 400, margin: 'auto' }}>
            <Image src={image} as="a" href={link} target="_blank" fluid />
          </Feed.Extra>
        )}
        <Feed.Meta>
          {upVotes > 0 ? (
            <Icon name="arrow up" color="orange" />
          ) : (
            <Icon name="arrow down" color="blue" />
          )}
          {upVotes}
          <Icon name="comment outline" color="green" />
          {comments}
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
};

export default ArticlePreview;
