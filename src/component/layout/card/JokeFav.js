import React, {Fragment} from 'react'

const JokeFav = ({
  favJokes, handleOnClick
}) => {
  return (
    <Fragment>
      <section id='jokeFav'>
        <div className="container">
            <div className="row d-flex align-content-center">
                <div className='col d-flex align-content-center'>
                  <h1>Joke Favourites</h1>
                  <a href="#searchArea">
                    <i className="fas fa-plus-circle ml-2 p-1 fa-3x" />
                  </a>
                </div>
            </div>

            <div className="row justify-content-start">
              { 
                favJokes.length > 0 ? (
                  favJokes.map((joke, index) => (
                    <div key={index} className="note">
                    <h1>Joke No.{joke.id}</h1>
                    <p>{joke.joke}</p>
                    <button 
                    onClick={() => handleOnClick(joke)}>
                  <i className="fas fa-trash-alt"/>
                    </button>
                  </div>
                  ))
                ) : (
                  <div className="note text-center">
                    <h2>Not Found Joke</h2>
                    <p>Try to Add Some Joker on the List Joke
                    </p>
                    <a href="#searchArea">
                    <i className="fas fa-plus-circle fa-2x" />
                    </a>
                  </div>
                )      
                
              }  
            </div>
        </div>
      </section>
    </Fragment>
  )
}

export default JokeFav
