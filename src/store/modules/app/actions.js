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
  },

  resetDonorMessageAction(context) {
    context.commit('sendSnackMessage', {
      show: false,
      variant: '',
      message: ''
    });
  },

  async sendDonorMessageAction(context, payload) {
    const { formData } = payload;
    const donorId = formData.get('donor_id');

    try {
      context.commit('sendingMessageLoading', true);
      await axios.post(
        `https://interview.ribbon.giving/api/donors/${donorId}/send-message`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      context.commit('sendingMessageLoading', false);
      context.commit('sendSnackMessage', {
        show: true,
        variant: 'success',
        message: 'Thankyou for your message. It has been sent.'
      });
    } catch (e) {
      context.commit('sendingMessageLoading', false);
      context.commit('sendSnackMessage', {
        show: true,
        variant: 'red',
        message: 'There was an error trying to sending your message. Please try again later'
      });
    }
  },
};

export default actions;
