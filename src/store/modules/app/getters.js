const getters = {
  donors: state => state.app.donors,
  donorListLoading: state => state.app.donorListLoading,
  sendingMessageLoading: state => state.app.sendingMessageLoading,
  sendSnackMessage: state => state.app.sendSnackMessage,
};

export default getters;
