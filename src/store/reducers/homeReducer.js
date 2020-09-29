import {
  TYPES
} from '../actions/shipment'

const initialState = {
  shipment: [],
  error: null
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SHIPMENT_SUCCESS:
      return {
        ...state,
        shipment: action.payload,
        error: null
      };
    case TYPES.SHIPMENT_FAILED:
      return {
        ...state,
        shipment: [],
        error: action.payload
      };
    default:
      return state;
  }
}

export default homeReducer;