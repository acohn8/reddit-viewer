import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../types';
import { RedditComment } from '../ArticleListContainer/ArticleListContainer';
import SingleComment from '../../components/SingleComment/SingleComment';

interface Props {
  redditComments: RedditComment[];
}

class CommentContainer extends React.Component<Props> {
  render() {
    const { redditComments } = this.props;
    return redditComments.map(comment => <SingleComment key={comment.body} body={comment.body} />);
  }
}

const mapStateToProps = (state: StoreState) => ({
  redditComments: state.redditComments,
});

export default connect(mapStateToProps)(CommentContainer);
