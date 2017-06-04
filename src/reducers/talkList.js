import { SEND_MESSAGE } from '../actions';

export default function talkList(state = [], action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const newState = state.slice();
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
}
