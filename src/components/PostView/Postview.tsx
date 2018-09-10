import * as React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import CommentContainer from '../../containers/CommentsContainer/CommentContainer';

export interface Props {
  children?: string;
  title: string;
  image: string;
}

const PostView = (props: Props) => {
  const { title, image, children } = props;
  return (
    <Modal dimmer="blurring" size="fullscreen" trigger={<Icon name="comments">{children}</Icon>}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src={image} wrapped />

        <Modal.Description>
          <Header>Comments</Header>
          <CommentContainer />
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
