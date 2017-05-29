import { INPUT_TEXT } from '../actions';

export default function editingText(state = '', action) {
  switch (action.type) {
    case INPUT_TEXT:
      return action.payload;
    default:
      return state;
  }
}
