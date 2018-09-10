import * as React from 'react';
import { Comment } from 'semantic-ui-react';
import { CommentDetails } from '../../containers/CommentsContainer/CommentContainer';

interface Props {
  parent: CommentDetails;
  reply: CommentDetails;
}

const CommentReply = (props: Props) => {
  const { parent, reply } = props;
  return (
    <Comment.Group>
      <Comment>
        <Comment.Content>
          <Comment.Author as="a">{parent.author}</Comment.Author>
          <Comment.Metadata>
            <span>{parent.postTime}</span>
          </Comment.Metadata>
          <Comment.Text>
            <p>{parent.body}</p>
          </Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>

        <Comment.Group>
          <Comment>
            <Comment.Content>
              <Comment.Author as="a">{reply.author}</Comment.Author>
              <Comment.Metadata>
                <span>{reply.postTime}</span>
              </Comment.Metadata>
              <Comment.Text>{reply.body}</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>
    </Comment.Group>
  );
};

export default CommentReply;
