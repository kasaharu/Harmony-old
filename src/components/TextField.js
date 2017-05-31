import React from 'react';

export default class TextField extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.editingText}
        onChange={e => this.props.onChange(e.target.value)}
      />
    );
  }
}

TextField.propTypes = {
  editingText: React.Props.string.isRequired,
  onChange: React.Props.func.isRequired,
};
