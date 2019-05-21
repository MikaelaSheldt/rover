import axios from 'axios'

// INITIAL STATE
const defaultVets = {}

// ACTION TYPES
const GOT_VETS = 'GOT_VETS'

// ACTION CREATORS
const gotVets = () => ({
  type: GOT_VETS,
  vets
})

// THUNK CREATORS
export const getVets = () => async dispatch => {
  const {data} = await axios.get(`/api/vets`)
  dispatch(gotVets(data))
}

// REDUCER
export default function(state = defaultVets, action) {
  switch (action.type) {
    case GOT_VETS: {
      return action.vets
    }
    default:
      return state
  }
}
