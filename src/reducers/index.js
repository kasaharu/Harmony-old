import { combineReducers } from 'redux';
import editingText from './editingText';
import talkList from './talkList';

const todoApp = combineReducers({
  editingText,
  talkList,
});

export default todoApp;
