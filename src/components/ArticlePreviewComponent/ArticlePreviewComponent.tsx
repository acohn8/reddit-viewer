import * as moment from 'moment';
import * as React from 'react';
import { Feed, Header, Icon, Image } from 'semantic-ui-react';
import PostView from '../PostView/Postview';

interface Props {
  source: string;
  link: string;
  postDate: Date;
  title: string;
  image: string;
  icon: string;
  comments: number;
  upVotes: number;
}

const ArticlePreview = (props: Props) => {
  const {
    source, link, title, image, icon, postDate, comments, upVotes,
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
          <Feed.Like>
            <PostView title={title} image={image}>{`${comments}`}</PostView>
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
};

export default ArticlePreview;
