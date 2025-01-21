import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieObj} = props
  const {thumbnailUrl, videoUrl} = movieObj

  const thumbnailItem = () => (
    <img className="thumbnail-item" src={thumbnailUrl} alt="thumbnail" />
  )
  console.log(thumbnailUrl)

  const popupContent = close => (
    <div className="popup-container">
      <button
        data-testid="closeButton"
        type="button"
        className="menu-close-btn"
        onClick={() => close()}
      >
        <IoMdClose size="30" color="#616e7c" />
      </button>

      <div className="video-container">
        <ReactPlayer url={videoUrl} controls width="100%" />
      </div>
    </div>
  )

  return (
    <div className="movie-item">
      <Popup modal trigger={thumbnailItem(thumbnailUrl)}>
        {close => popupContent(close)}
      </Popup>
    </div>
  )
}

export default MovieItem
