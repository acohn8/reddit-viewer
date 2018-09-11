export interface StoreState {
  redditPosts: [];
  redditComments: [];
}

export interface CommentDetails {
  id: string;
  body: string;
  author: string;
  upVotes: number;
  postTime: string;
}
export interface RedditComment {
  parent: CommentDetails;
  replies: CommentDetails[];
}
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
