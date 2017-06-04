import React from 'react';
import { connect } from 'react-redux';

import TalkBoard from '../components/TalkBoard';

class TalkPane extends React.Component {
  render() {
    return (
      <TalkBoard />
    );
  }
}

function mapStateToProps(state) {
  return {
    talkList: state.talkList,
  };
}

export default connect(mapStateToProps)(TalkPane);
