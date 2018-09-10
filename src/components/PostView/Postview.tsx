import * as React from 'react';
import { Button, Comment, Header, Icon, Image, Modal } from 'semantic-ui-react';
import PostComments from '../PostComments/PostComment';
import { RedditComment } from '../../containers/ArticleListContainer/ArticleListContainer';

export interface Props {
  children?: string;
  redditComments?: RedditComment[];
  title: string;
  image: string;
}

const PostView = (props: Props) => {
  const {
    title, image, children, redditComments,
  } = props;
  return (
    <Modal trigger={<Icon name="comments">{children}</Icon>}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src={image} wrapped />

        <Modal.Description>
          <Header>Comments</Header>
          {redditComments !== undefined &&
            redditComments.map(comment => (
              <Comment.Group>
                <PostComments body={comment.body} replies={comment.replies} />
              </Comment.Group>
            ))}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Proceed <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PostView;
