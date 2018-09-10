import * as React from 'react';
import { Comment } from 'semantic-ui-react';

interface Props {
  body: string;
  author: string;
  postTime: string;
}

const SingleComment = (props: Props) => {
  const { body, author, postTime } = props;
  return (
    <Comment.Content>
      <Comment.Author as="a">{author}</Comment.Author>
      <Comment.Metadata>
        <span>{postTime}</span>
      </Comment.Metadata>
      <Comment.Text>{body}</Comment.Text>
      <Comment.Actions>
        <a>Reply</a>
      </Comment.Actions>
    </Comment.Content>
  );
};

export default SingleComment;
