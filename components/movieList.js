import React from 'react'
import Link from 'next/link'
class MovieList extends React.Component{

    shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0,maxLength) + '...'
        }
        return text
    }
    
    render() {

        // const movies = this.props.movies 
        // we can write simply because we have same names
        const {movies} = this.props

        return (
        <>
            { movies.map( movie => 
                (
                    <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
                    <div className="card h-100">
                        <Link href="/movies/[url_id]" as={`/movies/${movie.id}`}>
                         {/* <Link href={ 'movies/' + ${movie.id }></Link> */}
                            <a><img className="card-img-top" src={movie.image} alt="" /></a>
                        </Link>    
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link href="/movies/[url_id]" as={`/movies/${movie.id}`}>
                                    <a>{ movie.name }</a>
                                </Link>
                            </h4>
                            <p className="card-text">{ this.shorten(movie.description, 200)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{ movie.rating}</small>
                        </div>
                        </div>
                    </div>  
                )
            )           
           }
        </>
    )
    }
    
}

export default MovieList