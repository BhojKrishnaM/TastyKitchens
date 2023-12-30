import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const RestaurantCard = props => {
  const {restaurantDetails} = props
  const {userRating, name, cuisine, imageUrl, id} = restaurantDetails
  const {rating, totalReviews} = userRating

  return (
    <Link to={`/restaurant/${id}`} className="restaurantLink">
      <li className="restaurantItem" data-testid="restaurant-item">
        <img src={imageUrl} alt="restaurant logo" className="restaurantLogo" />
        <div className="restaurantDetails">
          <h1 className="restaurantTitle">{name}</h1>
          <p className="cuisine-name">{cuisine}</p>
          <div className="rating-cont">
            <BsFillStarFill className="rating-star" />
            <p className="ratingDigit">{rating}</p>
            <h1 className="totalReviewsCount"> ({totalReviews} ratings)</h1>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
