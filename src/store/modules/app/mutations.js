const mutations = {
  donorList (state, payload) {
    state.app.donors = payload;
  },
  donorListLoading (state, payload) {
    state.app.donorListLoading = payload;
  },
};

export default mutations;
