import React from 'react';

export default class TextField extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={e => this.props.onChange(e.target.value)}
      />
    );
  }
}

TextField.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
