import MoviesSlider from '../MoviesSlider'
import './index.css'
const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovie,
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image-4"
      />
      <h1 className="main-header">Action Movies</h1>
      <MoviesSlider moviesList={actionMoviesList} />
      <h1 className="main-header">Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMoviesList} />
    </div>
  )
}
export default PrimeVideo
