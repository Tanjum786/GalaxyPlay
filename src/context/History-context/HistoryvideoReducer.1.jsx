export const HistoryvideoReducer = (historyState, HistoryAction) => {
  switch (HistoryAction.type) {
    case "ADD_TO_HISTORY":
      return {
        ...historyState,
        history: HistoryAction.payload,
      };
    case "DELETE_HISTORY":
      return {
        ...historyState,
        history: HistoryAction.payload,
      };
    case "DELETE_ALL_HISTORY":
      return {
        ...historyState,
        history: HistoryAction.payload,
      };

    default:
      return {
        ...historyState,
      };
  }
};
