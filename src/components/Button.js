import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Button extends React.Component {
  render() {
    return (
      <RaisedButton
        label="送信"
        primary
        onClick={this.props.onClick}
      />
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};
