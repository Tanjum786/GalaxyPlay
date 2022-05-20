export const ModalReducer = (modalState, modalAction) => {
  switch (modalAction.type) {
    case "MODAL-OPEN":
      return {
        ...modalState,
        modalStatus: true,
        video: modalAction.payload,
      };
    case "MODAL-CLOSE":
      return {
        ...modalState,
        modalStatus: false,
        video: {},
      };

    default:
      return modalState;
  }
};
