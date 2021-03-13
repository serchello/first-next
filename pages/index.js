import React from 'react'

import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'

import {getMovies} from '../actions'

const Home = (props) =>{

  console.log(JSON.stringify(props.images))
  const { images } = props
    return (
      <div>
        
        <div className="home-page">
        <div className="container">
            <div className="row">
              <div className="col-lg-3">
              <SideMenu
                appName="Maria DB"
                />
              </div>

              <div className="col-lg-9">
                <Carousel images={ images }/>
                <div className="row">
                <MovieList movies={ props.movies }/>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      
    </div>
  )
  
}

Home.getInitialProps = async () => {
  const movies = await getMovies()
  const images = movies.map(movie => {
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name 
    }
  })
  return { movies, images}
}

export default Home