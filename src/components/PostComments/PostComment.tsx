import * as React from 'react';
import { Comment } from 'semantic-ui-react';
import { render } from 'react-dom';

interface Props {
  body: string;
  replies: any;
}

class PostComments extends React.Component<Props> {
  getReplies = (replies) => {
    if (replies.data.replies) {
      return (
        <Comment.Group>
          {replies.map((reply) => {
            <Comment>
              <Comment.Avatar src="/images/avatar/small/jenny.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>{reply.data.body}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>;
            this.getReplies(reply.replies);
          })}
        </Comment.Group>
      );
    }
  };

  render() {
    return (
      <Comment>
        <Comment.Avatar src="/images/avatar/small/elliot.jpg" />
        <Comment.Content>
          <Comment.Author as="a">Elliot Fu</Comment.Author>
          <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>{props.body}</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          {props.replies &&
            props.replies.data.children.map((reply: any) => (
              <Comment>
                <Comment.Avatar src="/images/avatar/small/jenny.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>{reply.data.body}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            ))}
        </Comment.Group>
      </Comment>
    );
  }
}
export default PostComments;
