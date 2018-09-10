import * as React from 'react';
import { Divider, Header, Image, Modal, Segment } from 'semantic-ui-react';

import CommentContainer from '../../containers/CommentsContainer/CommentContainer';

export interface Props {
  children?: string;
  title: string;
  image: string;
  permalink: string;
  date: string;
}

const PostView = (props: Props) => {
  const {
    title, image, children, date, permalink,
  } = props;
  return (
    <Modal
      dimmer="blurring"
      size="large"
      trigger={
        <Header size="medium" as="a">
          {children}
          <Header.Subheader>{date}</Header.Subheader>
        </Header>
      }
    >
      <Modal.Header>{title}</Modal.Header>
      <Segment style={{ maxWidth: 400, margin: 'auto' }}>
        <Image size="huge" src={image} wrapped />
      </Segment>
      <Divider />
      <Modal.Content image scrolling>
        <Modal.Description>
          <Header>Comments</Header>
          <CommentContainer permalink={permalink} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default PostView;
