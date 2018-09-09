import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import ArticleListContainer from '../src/containers/ArticleListContainer/ArticleListContainer';
import { fetchTopRedditPostOperation, fetchPostCommentsOperation } from './operations/index';
import { StoreState } from './types';

interface Props {
  fetchTopRedditPostOperation: () => void;
  fetchPostCommentsOperation: (comments: string) => void;
}

export class App extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchTopRedditPostOperation();
    this.props.fetchPostCommentsOperation('/r/funny/comments/9eedq3/not_going_to_sleep_tonight/');
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ArticleListContainer} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, void, Action>) => ({
  fetchPostCommentsOperation: (comments: string) => dispatch(fetchPostCommentsOperation(comments)),
  fetchTopRedditPostOperation: () => dispatch(fetchTopRedditPostOperation()),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
