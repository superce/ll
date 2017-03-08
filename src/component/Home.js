import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import Img from '../img/pro_1.png'
class Home extends React.Component {
  render () {
    return(

      <div>

        <Link to='Project'>
          <div className='link'>
            <img src={Img} className='home-img'/>

          </div>

        </Link>
        <img src={Img} />
      </div>
    )
  }
}

export default Home;
