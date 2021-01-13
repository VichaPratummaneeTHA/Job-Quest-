import React, {Fragment, useState, useEffect} from 'react'
import CardItem from './CardItem'
import AddFavMovie from './AddFavMovie'
import JokeFav from './JokeFav'

const SearchArea = () => {

  const [jokes, setJokes] = useState([]);
  const [favJokes, setFavJokes] = useState([]);
  const [values, setValues] = useState({
    id: 0,
    firstName: '',
    lastName: ''
  });

  const {id, firstName, lastName} = values;

  const getJokeById = async (id) => {

  if(id > 1 || id)
  {
    const url = `https://api.icndb.com/jokes/${id}`
    const res = await fetch(url);
    const JSON = await res.json();
    console.log(JSON)
    if(JSON.value){
     setJokes(JSON.value);
    }
  }

  }
 
  const getRandomJoke = async (firstName, lastName) => {

    if(!firstName) {
      firstName = 'John'
    }

    if(!lastName) {
      lastName = 'Doe'
    }
 
    const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
    const res = await fetch(url);
    const JSON = await res.json();

    console.log(JSON)

    if(JSON.value){
      setJokes(JSON.value);
    }
   
  }

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:event.target.value});
  }

  const handleSubmit = event => {

    if(id > 0){
      getJokeById(id)
    }
    if(firstName || lastName) {
      getRandomJoke(firstName, lastName);
    }

    if(!id && !firstName && !lastName){
      getRandomJoke();
    }
    setValues({
      id: 0,
      firstName: '',
      lastName: ''
    })
    event.preventDefault();
  }

  const addFavJokes = (joke) => {

    if(favJokes){

      if(favJokes.filter(favJoke => favJoke.id === joke.id).length > 0){

        return alert('the joke already exist !! Please choose the new one')
      }

      const newJoke = [...favJokes, joke];
      setFavJokes(newJoke);
    }
  
  }

  const removeFavJokes = (joke) => {
    const newJoke = favJokes.filter((favJoke) => favJoke.id !== joke.id);

    setFavJokes(newJoke);
  }

  const handleIncreaseNumberId = (event) => {

    values.id++ ;
    event.preventDefault();
  }

  const handleDecreaseNumberId = (event) => {
    values.id-- ;
    event.preventDefault();
  }

  useEffect(() => {
    getRandomJoke(firstName, lastName);
  }, [firstName, lastName]);


  return (
    <Fragment>
        <section id='searchArea' className='bg-dark text-white'>
          <div className="container">
            <form className="row" onSubmit={event => handleSubmit(event)}>

            <div className="d-flex col-md-2 input-id-box">
              <button className='btn btn-warning' onClick={(event) => handleIncreaseNumberId(event)}>+</button>
              <input name ='id' type="text" className='form-control mb-resp mx-1 p-2 text-center input-id' placeholder='ID' value={values.id} onChange={(event)=> handleChange(event)}/>
              <button className='btn btn-secondary' onClick={(event) => handleDecreaseNumberId(event)}>-</button>
            </div>
           
            <div className="col-md-4">
                <input 
                name='firstName' 
                type="text" 
                className='form-control mb-resp ' 
                placeholder='Enter first name'
                value={values.firstName || ''}
                onChange={(event) => handleChange(event)} 
                />
              </div>
              <div className="col-md-4">
              <input 
              name='lastName' 
              type="text" 
              className='form-control mb-resp ' 
              placeholder='Enter last name'
              value={values.lastName || ''}
              onChange={(event) => handleChange(event)}  
               />
              </div>
              <div className="col-md-2">
            <button className='btn btn-warning btn-block ' type='submit'> <i className='fas fa-search mr-1 text-white'></i> Get The Joke
            </button>
              </div>         
            </form>

            <div className="row justify-content-center">
             <CardItem 
                jokes= {jokes}
                FavComponent = {AddFavMovie}
                handleOnClick = {addFavJokes}
             />
            </div>
          </div>
        </section>

        <JokeFav 
          favJokes = {favJokes}
          handleOnClick = {removeFavJokes}
        />
    </Fragment>
  )
}

export default SearchArea
