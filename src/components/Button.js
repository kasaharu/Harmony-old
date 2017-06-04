import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        送信
      </button>
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};
