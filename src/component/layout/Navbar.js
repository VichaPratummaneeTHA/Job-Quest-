import React, {Fragment} from 'react'
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PhoneForwardedRoundedIcon from '@material-ui/icons/PhoneForwardedRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';


const Navbar = ({
  time, inputValue, valid, handleLogOut 
}) => {
  return (
    <Fragment>
      <nav id='main-nav' className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
        <div className="container p-0">
          <a href="#!" className="navbar-brand mt-1">
            <i></i>
            <h3 className="d-inline align-middle">
            <WifiRoundedIcon fontSize="large"/>
            VC        
            </h3>
          </a>
       
        <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div id='navbarCollapse' className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item px-1'>
              <a href="#home" className='nav-link text-warning'>
              <HomeRoundedIcon fontSize="large"/>
              Home </a>
            </li>
            <li className='nav-item px-1'>
              <button 
                className='btn btn-out-line-primary shadow-none text-warning m-0'
                data-toggle="modal"
                data-target="#contactModal"
                >
                <PhoneForwardedRoundedIcon fontSize="large"/>
                Contact</button>
            </li>
          </ul>

          <form className='d-flex max-width: 100% p-2 justify-content-end justify-content-md-start'>
          {
            valid && <Fragment>
            <span className='p-1 mr-2 box-time'>
            <i className="fas fa-stopwatch mt-2 mr-1"></i>
            {time} 
            </span>
            </Fragment>
          }
          
            <div className="input-group max-width: 100% h-25">
                <span className='input-group-text'>
                  <i className='fas fa-user text-warning'></i>
                </span>  

              <input type="text" className='form-control text-center' placeholder={inputValue.name}/> 

            </div>

            <button className='btn btn-outline-warning btn-block  ml-1' type='submit' onClick={event => handleLogOut(event)}>
              <LockOpenRoundedIcon />Log-out
            </button>
          </form>
        </div>

    
        </div>
      </nav>

      <div id="contactModal" className='modal fade text-primary bg-dark'>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className='modal-title'>Contact Us</h5>
                <button className='close' data-dismiss='modal'>
                  <span>&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input type="text" className='form-control'/>
                  </div>
                  <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type="email" className='form-control'/>
                  </div>
                  <div className="form-group">
                    <label htmlFor='Message'>Message</label>
                    <textarea type="text" className='form-control' cols='30' rows='10'/>
                  </div>
                </form>
              </div>

              <div className='modal-footer'>
              <a href="#!">
              <button className='btn btn-outline-warning'>Contact Us</button>
              </a>
              </div>
            </div>
          </div>
      </div>


    </Fragment>
  )
}

export default Navbar
