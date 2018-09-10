export const parseCommentResponse = (response: any) => response.map((comment: any) => ({
  body: comment.data.body,
  replies: comment.data.replies,
}));
