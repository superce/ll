import React from 'react';

import Home from './component/Home'
class App extends React.Component {
  render () {
    return(
        <div>
         {this.props.children}

         </div>

    )
  }
}

export default App;
