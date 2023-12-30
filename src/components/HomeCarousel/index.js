import './index.css'

const HomeCarousel = props => {
  const {imageDetails} = props
  const {imageUrl} = imageDetails
  return (
    <li>
      <img src={imageUrl} className="carousel-image" alt="offer" />
    </li>
  )
}

export default HomeCarousel
