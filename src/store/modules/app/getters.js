const getters = {
  donors: state => state.app.donors,
  donorListLoading: state => state.app.donorListLoading,
  sendingMessageLoading: state => state.app.sendingMessageLoading,
  sendSnackMessage: state => state.app.sendSnackMessage,
  showSnackbar: state => state.app.sendSnackMessage.show,
};

export default getters;
