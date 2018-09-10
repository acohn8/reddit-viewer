import * as React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import PostComments from '../PostComments/PostComment';

export interface Props {
  children?: string;
  title: string;
  image: string;
}

const PostView = (props: Props) => {
  const { title, image, children } = props;
  return (
    <Modal trigger={<Icon name="comments">{children}</Icon>}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src={image} wrapped />

        <Modal.Description>
          <Header>Comments</Header>
          <PostComments />
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
