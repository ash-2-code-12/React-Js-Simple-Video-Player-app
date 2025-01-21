import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import './index.css'

const CustomArrow = ({style, onClick, direction}) => (
  <button
    className={`custom-arrow ${direction}`}
    style={{...style}}
    type="button"
    onClick={onClick}
  >
    {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
  </button>
)

const MoviesSlider = props => {
  const {categoryMovies} = props
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  console.log(categoryMovies)

  return (
    <div className="category-slider">
      <Slider {...settings}>
        {categoryMovies.map(movieObj => (
          <MovieItem movieObj={movieObj} key={movieObj.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
