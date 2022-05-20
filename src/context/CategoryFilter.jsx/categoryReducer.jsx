export const categoryReducer = (categoryState, categoryAction) => {
  switch (categoryAction.type) {
    case "CLEAR_CATEGORY":
      return {
        ...categoryState,
        category: "",
      };
    case "SELECT_CATEGORY":
      return {
        ...categoryState,
        category: categoryAction.payload,
      };
    default:
      return category
    
  }
};
