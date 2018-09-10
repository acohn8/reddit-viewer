import * as React from 'react';
import { Feed, Icon, Image } from 'semantic-ui-react';
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
        <PostView title={title} image={image} permalink={permalink} date={postDate}>
          {title}
        </PostView>
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
          <Feed.Like>{comments}</Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
};

export default ArticlePreview;
