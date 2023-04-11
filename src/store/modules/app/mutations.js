const mutations = {
  donorList(state, payload) {
    state.app.donors = payload
  },
  donorListLoading(state, payload) {
    state.app.donorListLoading = payload
  },
  sendingMessageLoading(state, payload) {
    state.app.sendingMessageLoading = payload
  },
  sendSnackMessage(state, payload) {
    state.app.sendSnackMessage = payload
  },
}

export default mutations
