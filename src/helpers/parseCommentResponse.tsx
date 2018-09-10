import { formatDate } from './formatDate';

export const parseCommentResponse = (response: any) => {
  const formattedResponse = response.map((comment: any) => {
    const commentThread: any = {};
    commentThread.parent = {};
    commentThread.parent.id = comment.data.modhash;
    commentThread.parent.body = comment.data.body;
    commentThread.parent.author = comment.data.author;
    commentThread.parent.postTime = formatDate(comment.data.created_utc);
    try {
      const commentChild = comment.data.replies.data.children[0].data;
      commentThread.reply = {};
      commentThread.parent.id = commentChild.modhash;
      commentThread.reply.body = commentChild.body;
      commentThread.reply.author = commentChild.author;
      commentThread.reply.postTime = formatDate(commentChild.created_utc);
    } catch (e) {
      commentThread.reply = undefined;
    }
    return commentThread;
  });
  console.log(formattedResponse);
  return formattedResponse;
};
