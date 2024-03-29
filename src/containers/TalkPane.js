import React from 'react';
import { connect } from 'react-redux';

import TalkBoard from '../components/TalkBoard';

class TalkPane extends React.Component {
  render() {
    return (
      <TalkBoard talkList={this.props.talkList} />
    );
  }
}

TalkPane.propTypes = {
  talkList: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    talkList: state.talkList,
  };
}

export default connect(mapStateToProps)(TalkPane);
