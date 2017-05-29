/*
 * action types
 */

export const INPUT_TEXT = 'INPUT_TEXT';

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

