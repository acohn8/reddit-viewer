import * as React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

interface Props {
  body: string;
  author: string;
  postTime: string;
  upVotes: number;
}

const SingleComment = (props: Props) => {
  const {
    body, author, postTime, upVotes,
  } = props;
  return (
    <Comment.Content>
      <Comment.Author as="a" href={`https://www.reddit.com/user/${author}`} target="_blank">
        {author}
      </Comment.Author>
      <Comment.Metadata>
        <span>{postTime}</span>
        {upVotes > 0 ? (
          <Icon name="arrow up" color="orange" />
        ) : (
          <Icon name="arrow down" color="blue" />
        )}
        {upVotes}
      </Comment.Metadata>
      <Comment.Text>{body}</Comment.Text>
    </Comment.Content>
  );
};

export default SingleComment;
