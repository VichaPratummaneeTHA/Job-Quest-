import React, {Fragment} from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
    <footer id="main-footer" className="py-3 bg-dark text-warning">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-md-6">
            <p className="lead">Copyright &copy;{currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
    </Fragment>
  )
}

export default Footer
