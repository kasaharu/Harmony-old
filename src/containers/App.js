import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import TextField from '../components/TextField';

class App extends React.Component {
  render() {
    return (
      <div>
        <TextField />
        <Button />
      </div>
    );
  }
}


export default connect()(App)
