import * as React from 'react';
import { Comment } from 'semantic-ui-react';

interface Props {
  body: string;
}

const SingleComment = (props: Props) => {
  const { body } = props;
  return (
    <Comment>
      <Comment.Avatar as="a" src="/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <span>Today at 5:42PM</span>
        </Comment.Metadata>
        <Comment.Text>{body}</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default SingleComment;
