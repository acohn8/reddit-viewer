import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Comment } from 'semantic-ui-react';

import { ResetComments } from '../../actions';
import SingleComment from '../../components/SingleComment/SingleComment';
import { fetchPostCommentsOperation } from '../../operations';
import { RedditComment, StoreState } from '../../types';

interface Props {
  permalink: string;
  redditComments: RedditComment[];
  ResetComments: () => void;
  fetchPostCommentsOperation: (comments: string) => void;
}

class CommentContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPostCommentsOperation(this.props.permalink);
  }

  componentWillUnmount() {
    this.props.ResetComments();
  }

  render() {
    const { redditComments } = this.props;
    return redditComments.map(comment =>
      (comment.replies === undefined ? (
        <Comment.Group key={`${comment.parent.id}group`}>
          <Comment key={`${comment.parent.id}comment`}>
            <SingleComment
              key={comment.parent.id}
              body={comment.parent.body}
              author={comment.parent.author}
              upVotes={comment.parent.upVotes}
              postTime={comment.parent.postTime}
            />
          </Comment>
        </Comment.Group>
      ) : (
        <Comment.Group key={`${comment.parent.id}rcomment`}>
          <Comment key={`${comment.parent.id}comment`}>
            <SingleComment
              key={comment.parent.id}
              body={comment.parent.body}
              upVotes={comment.parent.upVotes}
              author={comment.parent.author}
              postTime={comment.parent.postTime}
            />
            <Comment.Group key={`${comment.parent.id}group`}>
              {comment.replies.map(reply => (
                <Comment key={`${reply.id}comment`}>
                  <SingleComment
                    key={reply.id}
                    body={reply.body}
                    author={reply.author}
                    upVotes={reply.upVotes}
                    postTime={reply.postTime}
                  />
                </Comment>
                ))}
            </Comment.Group>
          </Comment>
        </Comment.Group>
      )));
  }
}

const mapStateToProps = (state: StoreState) => ({
  redditComments: state.redditComments,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, void, Action>) => ({
  ResetComments: () => dispatch(ResetComments()),
  fetchPostCommentsOperation: (comments: string) => dispatch(fetchPostCommentsOperation(comments)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentContainer);
