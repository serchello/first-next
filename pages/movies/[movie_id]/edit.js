import React from 'react'
import Router from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'


class EditMovie extends React.Component {

  // It needs for get movie_id, query
  static async getInitialProps({query}) {
    const movie = await getMovieById(query.movie_id)
    return { movie }
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
        Router.push('/movies/[movie_id]',`/movies/${movie.id}`)
    })
  }

  render() {
    const { movie } =this.props
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm
          submitButtton = "Update"
          initialData={movie}
          handleFormSubmit={this.handleUpdateMovie }
        />
      </div>
    )
  }
}

export default EditMovie