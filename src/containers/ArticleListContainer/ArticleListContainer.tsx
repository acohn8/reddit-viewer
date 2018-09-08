import * as React from 'react';
import { connect } from 'react-redux';
import { Divider, Feed, Grid, Header, Segment } from 'semantic-ui-react';

import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreviewComponent';
import { StoreState } from '../../types/index';

export interface RedditPost {
  subreddit_name_prefixed: string;
  permalink: string;
  url: string;
  created_utc: number;
  description: string;
  thumbnail: string;
  title: string;
  icon: string;
  num_comments: number;
  ups: number;
}

interface Props {
  redditPosts: RedditPost[];
}

export const ArticleListContainer = (props: Props) => {
  const { redditPosts } = props;
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
                key={post.created_utc}
                link={post.url}
                source={post.subreddit_name_prefixed}
                text={post.description}
                title={post.title}
                image={post.thumbnail}
                postDate={new Date(post.created_utc * 1000)}
                comments={post.num_comments}
                upVotes={post.ups}
                icon="reddit"
              />,
              <Divider key={`${post.created_utc}div`} />,
            ])}
          </Feed>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state: StoreState) => ({
  redditPosts: state.redditPosts,
});

export default connect(mapStateToProps)(ArticleListContainer);
