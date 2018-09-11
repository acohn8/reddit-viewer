import { formatDate } from './formatDate';
import { RedditComment } from '../containers/CommentsContainer/CommentContainer';

export const parseCommentResponse = (response: any) => {
  const formattedResponse: RedditComment[] = response.map((comment: any) => {
    const commentThread: any = {};
    commentThread.parent = {};
    commentThread.parent.id = comment.data.name;
    commentThread.parent.body = comment.data.body;
    commentThread.parent.author = comment.data.author;
    commentThread.parent.upVotes = comment.data.ups;
    commentThread.parent.postTime = formatDate(comment.data.created_utc);
    commentThread.replies = getReplies(comment);
    return commentThread;
  });
  return formattedResponse;
};

const getReplies = (comment: any) => {
  try {
    const commentChildren = comment.data.replies.data.children
      .filter((child: any) => child.kind === 't1')
      .map((commentChild: any) => commentChild.data);
    const formattedReplies: RedditComment[] = commentChildren.map((reply: any) => {
      const commentReplies: any = getFormattedReplies(reply);
      return commentReplies;
    });
    return formattedReplies;
  } catch (e) {
    return undefined;
  }
};

const getFormattedReplies = (reply: any) => ({
  id: reply.name,
  body: reply.body,
  author: reply.author,
  upVotes: reply.ups,
  postTime: formatDate(reply.created_utc),
});
