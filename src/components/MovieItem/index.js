import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'
const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="containerssss">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} className="image-1" alt="thumbnail" />}
        className="trigger-container"
      >
        {close => (
          <div className="containers">
            <button
              data-testid="closeButton"
              type="button"
              className="button-containerss"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
