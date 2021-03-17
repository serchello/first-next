import React from 'react'
import {useState} from 'react'
import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'

import {getMovies,getCategories} from '../actions'

const Home = (props) =>{

  // console.log(JSON.stringify(props.images))
  const { images, categories } = props
  // For filter category
  const [filter, setFilter] = useState('all')

  const changeCategory = category => {
    setFilter(category)
  }

  const filterMovies = movies => {
    if (filter === 'All') {
      return movies
    }

    return movies.filter((movie) => {
      return movie.genre && movie.genre.includes(filter)
    })

  }

    return (
      <div>
        
        <div className="home-page">
        <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu
                  changeCategory={changeCategory}
                  activeCategory = {filter}
                  appName="Maria DB"
                  categories={categories}
                />
              </div>

              <div className="col-lg-9">
                <Carousel images={images} />
                <h1>Displaying {filter} movies</h1>
                <div className="row">
                <MovieList movies={ filterMovies(props.movies) || [] }/>
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
  const categories = await getCategories()

  const images = movies.map(movie => {
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name 
    }
  })
  return { movies, images, categories}
}

export default Home