import React, {Fragment} from 'react'
import SearchArea from './card/SearchArea'
import Footer from './Footer'

const Home = ({
  name, lastName, email, handleOnchange , inputValue, handleSubmit , submit, valid 
}) => {

  return (
    <Fragment>
   <header id='home-section'>
      <div className="dark-overlay">
        <div className="home-inner container">
          
            {
              !valid ? (
                <Fragment>
            <div className="row justify-content-around">
                <div className="col-md-6 d-none d-lg-inline m-0 p-0 ">
              <h1 className='display-5 text-center py-2'>Welcome To Get The Joke</h1>

              <div className="d-flex justify-content-start">
                <div className="p-3 align-self-start">
                  <i className='fas fa-check fa-2x'></i>
                </div>
                <div className="p-3 d-flex w-100 justify-content-start">
                   <h4 >Step 1</h4>
                   <p className='align-self-end'>Register by Fill-in the form</p> 
                </div>
              </div>

              <div className="d-flex">
                <div className="p-3 align-self-start">
                  <i className='fas fa-check fa-2x'></i>
                </div>
                <div className="p-3 d-flex w-100 justify-content-start">
                  <h4>Step 2</h4>
                  <p className='align-self-end'>Register by Fill-in the form</p> 
                </div>
              </div>

              <div className="d-flex">
                <div className="p-3 align-self-start">
                  <i className='fas fa-check fa-2x'></i>
                </div>
                <div className="p-3 d-flex w-100 justify-content-start">
                <h4>Step 3 </h4>
                <p className='align-self-end'> Enjoy with The Joke ...</p> 
                </div>
              </div>

            </div>

            <div className="col-md-6 m-0 p-2">
              <div className="card bg-warning card-form">
                  <div className="card-body">
                    <h3 className='text-light text-center'>Sign In</h3>
                    <p className='text-light text-center'>Please fill out this form to sign-In</p>
                    <form onSubmit={(event) => handleSubmit(event)}>
                      <div className="form-group">
                        <input
                        name='name' 
                        type="text" 
                        className="form-control mb-2" 
                        placeholder='Username'
                        value={name || ''}
                        onChange={event => handleOnchange(event)}
                        autoFocus
                        />
                        {
                          submit && !name && <span className='text-danger'>** Please Enter Your Username **</span>
                        }
                        
                      </div>
                      <div className="form-group">
                        <input
                        name='lastName'  
                        type="text" 
                        className="form-control mb-2" 
                        placeholder='LastName'
                        value={lastName || ''}
                        onChange={event => handleOnchange(event)}
                        />
                         {
                          submit && !lastName && <span className='text-danger'>** Please Enter Your Password **</span>
                        }
                      </div>
                      <div className="form-group">
                        <input
                        name='email'  
                        type="email" 
                        className="form-control mb-2" 
                        placeholder='Email'
                        value={email || ''}
                        onChange={event => handleOnchange(event)}
                        />
                        {
                          submit && !email && <span className='text-danger'>** Please Enter Your Email **</span>
                        }
                      </div>
                      <button type='submit' className='btn btn-outline-light btn-block'>SUMBIT</button>
                    </form>
                  </div>
              </div>
            </div>
            </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="row align-content-center justify-content-center home-action">
                    <div className="col-md-12 d-flex flex-column text-center">
                      <h1 className='display-3 text-warning mb-4'>
                        <i className='fas fa-user mr-4 d-none d-md-inline'></i>
                         Welcome {inputValue.name}
                      </h1>
                      <p className='text-muted'>{inputValue.email}vicha@gmail.com</p>
                    </div>
                  </div>
                 
                </Fragment>

              )
            }         
        </div>
      </div>
   </header>
    {!valid && 
    <Fragment>
      <SearchArea />
      <Footer />
    </Fragment>  
    }       
  </Fragment>
  )
}

export default Home
