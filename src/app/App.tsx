import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ArticleListContainer from './newsOverview/containers/ArticleListContainer/ArticleListContainer';
import { fetchTopRedditPostOperation } from './newsOverview/duck/operations';

interface DispatchFromProps {
  fetchTopRedditPostOperation: () => void;
}

interface Props {
  fetchTopRedditPostOperation: () => void;
}

export class App extends React.Component<Props, {}> {
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

const mapDispatchToProps = (dispatch: any): DispatchFromProps => ({
  fetchTopRedditPostOperation: () => dispatch(fetchTopRedditPostOperation()),
});

export default connect<null, DispatchFromProps, void>(
  null,
  mapDispatchToProps,
)(App);
