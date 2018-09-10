import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import ArticleListContainer from '../src/containers/ArticleListContainer/ArticleListContainer';
import { fetchTopRedditPostOperation } from './operations/index';
import { StoreState } from './types';

interface Props {
  fetchTopRedditPostOperation: () => void;
}

export class App extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchTopRedditPostOperation();
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
  fetchTopRedditPostOperation: () => dispatch(fetchTopRedditPostOperation()),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
