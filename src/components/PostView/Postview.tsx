import * as React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';

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
          <Header>Modal Header</Header>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
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
