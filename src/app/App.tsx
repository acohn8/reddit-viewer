import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import ArticleListContainer from './newsOverview/containers/ArticleListContainer/ArticleListContainer';
import { fetchTopRedditPostOperation } from './newsOverview/duck/operations';
// import { Dispatch } from './newsOverview/duck/actions';

interface IDispatchFromProps {
  fetchTopRedditPostOperation: () => void;
}

interface IProps {
  fetchTopRedditPostOperation: () => void;
}

export class App extends React.Component<IProps, {}> {
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

const mapDispatchToProps = (dispatch: any): IDispatchFromProps => ({
  fetchTopRedditPostOperation: () => dispatch(fetchTopRedditPostOperation()),
});

export default connect<null, IDispatchFromProps, void>(
  null,
  mapDispatchToProps,
)(App);
