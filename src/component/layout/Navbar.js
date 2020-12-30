import React, {Fragment} from 'react'

const Navbar = ({
  time, inputValue, handleLogOut 
}) => {
  return (
    <Fragment>
      <nav id='main-nav' className='navbar navbar-expand-lg navbar-dark fixed-top'>
        <div className="container">
          <a href="#!" className="navbar-brand">
            <i></i>
            <h3 className="d-inline align-middle">VC</h3>
          </a>
       
        <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div id='navbarCollapse' className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item px-4'>
              <a href="#home" className='nav-link text-warning'>Home</a>
            </li>
            <li className='nav-item px-4'>
              <button 
                className='btn btn-out-line-primary text-warning m-0'
                data-toggle="modal"
                data-target="#contactModal"
                >Contact</button>
            </li>
          </ul>

          <form className='d-flex w-50 p-2 justify-content-center'>
          {
            inputValue.name && <Fragment>
            <span className='p-1 mr-2 box-time'>
            <i className="fas fa-stopwatch mt-2 mr-1"></i>
            {time} 
            </span>
            </Fragment>
          }
          
            
            <div className="input-group w-50 h-25">
                <span className='input-group-text'>
                  <i className='fas fa-user text-warning'></i>
                </span>
              <input type="text" className='form-control text-center' placeholder={inputValue.name}/>
            </div>

            <button className='btn btn-outline-warning btn-block w-25 ml-1' type='submit' onClick={event => handleLogOut(event)}>
              Log-out
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
                    <label htmlFor='name'>Name</label>
                    <textarea type="text" className='form-control' cols='30' rows='10'/>
                  </div>
                </form>
              </div>

              <div className='modal-footer'>
              <button className='btn btn-outline-light btn-block'>Contact Us</button>
              </div>
            </div>
          </div>
      </div>


    </Fragment>
  )
}

export default Navbar
