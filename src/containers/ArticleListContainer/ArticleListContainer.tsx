import * as React from 'react';
import { connect } from 'react-redux';
import { Divider, Feed, Grid, Header, Segment } from 'semantic-ui-react';

import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreviewComponent';
import { StoreState } from '../../types/index';

export interface RedditPost {
  source: string;
  link: string;
  permalink: string;
  postDate: string;
  image: string;
  title: string;
  comments: number;
  upVotes: number;
}

interface Props {
  redditPosts: RedditPost[];
}

export class ArticleListContainer extends React.Component<Props> {
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
                  permalink={post.permalink}
                  postDate={post.postDate}
                  comments={post.comments}
                  upVotes={post.upVotes}
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
});

export default connect(mapStateToProps)(ArticleListContainer);
