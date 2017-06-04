import React from 'react';
import { connect } from 'react-redux';

import { inputText } from '../actions';

import Button from '../components/Button';
import TextField from '../components/TextField';

class App extends React.Component {
  render() {
    const { dispatch } = this.props;
    const onChange = (text) => {
      dispatch(inputText(text));
    };

    return (
      <div>
        <TextField
          value={this.props.editingText}
          onChange={onChange}
        />
        <Button />
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
