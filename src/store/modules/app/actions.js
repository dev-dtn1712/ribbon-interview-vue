import axios from 'axios'

const actions = {
  async donorListAction(context) {
    try {
      context.commit('donorListLoading', true)
      const response = await axios.get(
        'https://interview.ribbon.giving/api/donors'
      )
      context.commit('donorList', response.data)
      context.commit('donorListLoading', false)
    } catch (e) {
      console.log(error)
      context.commit('donorListLoading', false)
    }
  },

  async sendDonorMessageAction(context, payload) {
    const { formData } = payload
    const donorId = formData.get('donor_id')

    try {
      context.commit('sendingMessageLoading', true)
      await axios.post(
        `https://interview.ribbon.giving/api/donors/${donorId}/send-message`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      context.commit('sendingMessageLoading', false)
      context.commit('sendSnackMessage', {
        show: true,
        variant: 'success',
        message: 'Thankyou for your message. It has been sent.',
      })

      setTimeout(() => {
        context.commit('sendSnackMessage', {
          show: false,
          variant: '',
          message: '',
        })
      }, 2000)
    } catch (e) {
      context.commit('sendingMessageLoading', false)
      context.commit('sendSnackMessage', {
        show: true,
        variant: 'red',
        message:
          'There was an error trying to sending your message. Please try again later',
      })

      setTimeout(() => {
        context.commit('sendSnackMessage', {
          show: false,
          variant: '',
          message: '',
        })
      }, 2000)
    }
  },
}

export default actions
