import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import { inputText, sendMessage } from '../actions';

import TalkPane from './TalkPane';

import Button from '../components/Button';

class App extends React.Component {
  render() {
    const { dispatch } = this.props;
    const onChange = (e, text) => {
      dispatch(inputText(text));
    };
    const onClick = () => {
      dispatch(sendMessage(this.props.editingText));
    };

    return (
      <div>
        <TextField
          id="text-field"
          value={this.props.editingText}
          onChange={onChange}
        />
        <Button onClick={onClick} />
        <TalkPane />
      </div>
    );
  }
}

App.propTypes = {
  editingText: React.PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    editingText: state.editingText,
  };
}

export default connect(mapStateToProps)(App);
