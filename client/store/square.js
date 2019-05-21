import axios from 'axios'

// INITIAL STATE
const defaultSquare = {}

// ACTION TYPES
const GOT_SQUARE = 'GOT_SQUARE'

// ACTION CREATORS
const gotSquare = square => ({
  type: GOT_SQUARE,
  square
})

// THUNK CREATORS
export const getSquare = squareId => async dispatch => {
  const {data} = await axios.get(`/api/squares/${squareId}`)
  dispatch(gotSquare(data))
}

// REDUCER
export default function(state = defaultSquare, action) {
  switch (action.type) {
    case GOT_SQUARE: {
      return action.square
    }
    default:
      return state
  }
}
