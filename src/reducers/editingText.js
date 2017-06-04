import { INPUT_TEXT, SEND_MESSAGE } from '../actions';

const initialState = '';

export default function editingText(state = initialState, action) {
  switch (action.type) {
    case INPUT_TEXT:
      return action.payload;
    case SEND_MESSAGE:
      return initialState;
    default:
      return state;
  }
}
