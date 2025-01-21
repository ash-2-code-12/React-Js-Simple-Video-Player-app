import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  console.log(moviesList)
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="prime-video-page">
      <div className="banner-section">
        <img
          className="page-banner"
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
      </div>

      <div className="content-section">
        <div className="movies-slider-box">
          <h1 className="category-heading">Action Movies</h1>
          <MoviesSlider categoryMovies={actionMovies} />
        </div>
        <div className="movies-slider-box">
          <h1 className="category-heading">Comedy Movies</h1>
          <MoviesSlider categoryMovies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
