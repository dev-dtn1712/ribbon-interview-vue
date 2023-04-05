import axios from "axios";

const actions = {
  async donorListAction(context) {
    try {
      context.commit('donorListLoading', true);
      const response = await axios.get(
        'https://interview.ribbon.giving/api/donors'
      );
      context.commit('donorList', response.data);
      context.commit('donorListLoading', false);
    } catch (e) {
      console.log(error);
      context.commit('donorListLoading', false);
    }
  }
};

export default actions;
