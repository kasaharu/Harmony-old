import React from 'react';
import { connect } from 'react-redux';

import { inputText, sendMessage } from '../actions';

import TalkPane from './TalkPane';

import Button from '../components/Button';
import TextField from '../components/TextField';

class App extends React.Component {
  render() {
    const { dispatch } = this.props;
    const onChange = (text) => {
      dispatch(inputText(text));
    };
    const onClick = () => {
      dispatch(sendMessage(this.props.editingText));
    };

    return (
      <div>
        <TextField
          value={this.props.editingText}
          onChange={onChange}
        />
        <Button onClick={onClick} />
        <TalkPane />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editingText: state.editingText,
  };
}

export default connect(mapStateToProps)(App);
