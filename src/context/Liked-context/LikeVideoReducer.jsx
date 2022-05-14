export const LikeVideoReducer = (likeState, likeAction) => {
  switch (likeAction.type) {
    case "LIKE_VIDEO":
      return {
        ...likeState,
        likes: likeAction.payload,
      };
    case "GET_LIKE-VIDEO":
      return {
        ...likeState,
        likes: likeAction.payload,
      };
    case "DELETE_LIKE_VIDEO":
      return {
        ...likeState,
        likes: likeAction.payload,
      };
    default:
      return likeState;
  }
};
