import React, {Fragment} from 'react'

const CardItem = ({
  jokes,
  FavComponent,
  handleOnClick,
}) => {
  return (
    <Fragment>
    {
    
        <div className="col-sm-10">
              <div className='card'>
                <div className="card-body text-center">
                {
                  jokes.id ? (
                    <h3>Card Joke {jokes.id}</h3>
                  ) : (
                    <h3>Card Joke</h3>
                  )
                }
                  
                  <hr/>
                  <p className='py-3'>{jokes.joke}</p>
                 
                </div>
                <div 
                  className="overlay"
                  onClick={() => handleOnClick(jokes)}
                  >
                    <FavComponent />
                </div>
              </div>
        </div>
    }
      
    </Fragment>
  )
}

export default CardItem
