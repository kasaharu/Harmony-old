import { combineReducers } from 'redux';
import editingText from './editingText';

const todoApp = combineReducers({
  editingText,
});

export default todoApp;
