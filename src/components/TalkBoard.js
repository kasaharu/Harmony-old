import React from 'react';

export default class TalkBoard extends React.Component {
  render() {
    return (
      <div>
        {this.props.talkList.map((talk, i) => {
          return (
            <div key={i}>
              {talk}
            </div>
          );
        })}
      </div>
    );
  }
}

TalkBoard.propTypes = {
  talkList: React.PropTypes.array.isRequired,
};
