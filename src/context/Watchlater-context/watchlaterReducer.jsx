export const watchlaterReducer = (watchlaterState, watchlaterAction) => {
  switch (watchlaterAction.type) {
    case "WATCH_LATER_VIDEO":
      return {
        ...watchlaterState,
        watchLater: watchlaterAction.payload,
      };
      case "DELETE_WATCHLATER":
          return{
              ...watchlaterState,watchLater:watchlaterAction.payload
          }

    default:
      return { ...watchlaterState };
  }
};
