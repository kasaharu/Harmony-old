/*
 * action types
 */

export const INPUT_TEXT = 'INPUT_TEXT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

/*
 * other constants
 */


/*
 * action creators
 */

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    payload: text,
  };
}

export function sendMessage(text) {
  console.log('[Debug] ----- text: ', text);
  return {
    type: SEND_MESSAGE,
    payload: text,
  };
}

