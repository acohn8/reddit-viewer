import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../types';
// import SingleComment from '../../components/SingleComment/SingleComment';
import SingleComment from '../../components/SingleComment/SingleComment';
import CommentReply from '../../components/CommentReply/CommentReply';

export interface CommentDetails {
  id: string;
  body: string;
  author: string;
  postTime: string;
}
export interface RedditComment {
  parent: CommentDetails;
  reply: CommentDetails;
}
interface Props {
  redditComments: RedditComment[];
}

class CommentContainer extends React.Component<Props> {
  render() {
    const { redditComments } = this.props;
    return redditComments.map(comment =>
      (comment.reply === undefined ? (
        <SingleComment
          key={comment.parent.id}
          body={comment.parent.body}
          author={comment.parent.author}
          postTime={comment.parent.postTime}
        />
      ) : (
        <CommentReply key={comment.reply.id} parent={comment.parent} reply={comment.reply} />
      )));
  }
}

const mapStateToProps = (state: StoreState) => ({
  redditComments: state.redditComments,
});

export default connect(mapStateToProps)(CommentContainer);
