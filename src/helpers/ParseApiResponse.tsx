export interface ApiResponse {
  subreddit_name_prefixed: string;
  url: string;
  created_utc: number;
  description: string;
  preview: any;
  domain: any;
  thumbnail: string;
  title: string;
  icon: string;
  num_comments: number;
  ups: number;
}

export const parseApiResponse = (responses: ApiResponse[]) =>
  responses.map((response: ApiResponse) => ({
    comments: response.num_comments,
    image: getImage(response),
    link: response.url,
    postDate: new Date(response.created_utc * 1000),
    source: response.subreddit_name_prefixed,
    title: response.title,
    upVotes: response.ups,
  }));

const getImage = (response: ApiResponse) => {
  if (response.domain === 'gfycat.com') {
    return response.thumbnail;
  } else if (response.preview) {
    return response.preview.images[0].source.url;
  }
};
