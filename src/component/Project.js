import React, { PropTypes } from 'react';
import img from '../img/pro_1.png';
import Img1 from '../img/xtb_03.png';
import {hashHistory} from 'react-router'
class Project extends React.Component {
  render () {
     return(
       <div>
           <div>
             <img src={img} />
             <img src={img} />

           </div>
           <div onClick={() => hashHistory.push('/')}>
             <img src={Img1} className='back-img'/>
           </div>
       </div>
     )
  }
}

export default Project;
