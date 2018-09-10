import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Divider, Feed, Grid, Header, Segment } from 'semantic-ui-react';

import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreviewComponent';
import { StoreState } from '../../types/index';
import { fetchPostCommentsOperation } from '../../operations/index';

export interface RedditPost {
  source: string;
  link: string;
  permalink: string;
  postDate: Date;
  image: string;
  title: string;
  comments: number;
  upVotes: number;
}

export interface RedditComment {
  body: string;
  replies: [];
}

interface Props {
  fetchPostCommentsOperation: (comments: string) => void;
  redditPosts: RedditPost[];
}

export class ArticleListContainer extends React.Component<Props> {
  handleClick = (permalink: string) => {
    this.props.fetchPostCommentsOperation(permalink);
  };

  render() {
    const { redditPosts } = this.props;
    return (
      <Grid centered columns={2} stackable relaxed="very">
        <Grid.Column style={{ overflowY: 'auto' }}>
          <Header size="large" textAlign="center">
            Trending on Reddit
          </Header>
          <Segment>
            <Feed size="large">
              {redditPosts.map(post => [
                <ArticlePreview
                  key={post.link}
                  link={post.link}
                  source={post.source}
                  title={post.title}
                  image={post.image}
                  handleClick={this.handleClick}
                  permalink={post.permalink}
                  postDate={post.postDate}
                  comments={post.comments}
                  upVotes={post.upVotes}
                  icon="reddit"
                />,
                <Divider key={`${post.link}div`} />,
              ])}
            </Feed>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  redditPosts: state.redditPosts,
  redditComments: state.redditComments,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, void, Action>) => ({
  fetchPostCommentsOperation: (comments: string) => dispatch(fetchPostCommentsOperation(comments)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleListContainer);
