

import React, { PropTypes } from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';


import App from './App';
import Home from './component/Home'
import Project from './component/Project'

export default function(){
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='project' component={Project}/>



      </Route>
    </Router>
  )

}
