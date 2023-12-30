import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import RestaurantsHeader from '../RestaurantsHeader'
import RestaurantCard from '../RestaurantCard'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class PopularRestaurantsSection extends Component {
  state = {
    restaurantsList: [],
    isLoading: false,
    activeOptionValue: sortByOptions[1].value,
    limit: 9,
    activePage: 1,
  }

  componentDidMount() {
    this.getRestaurantsList()
  }

  getRestaurantsList = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {activeOptionValue, limit, activePage} = this.state
    const offset = (activePage - 1) * limit
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${activeOptionValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.restaurants.map(each => ({
        hasOnlineDelivery: each.has_online_delivery,
        userRating: {
          rating: each.user_rating.rating,
          totalReviews: each.user_rating.total_reviews,
        },
        name: each.name,
        hasTableBooking: each.has_table_booking,
        isDeliveringNow: each.is_delivering_now,
        costForTwo: each.cost_for_two,
        cuisine: each.cuisine,
        imageUrl: each.image_url,
        id: each.id,
        menuType: each.menu_type,
        location: each.location,
        opensAt: each.opens_at,
        groupByTime: each.group_by_time,
      }))
      this.setState({restaurantsList: updatedData, isLoading: false})
    }
  }

  updateActiveOptionId = activeOptionId => {
    this.setState({activeOptionValue: activeOptionId}, this.getRestaurantsList)
  }

  onClickLeft = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({activePage: prevState.activePage - 1}),
        this.getRestaurantsList,
      )
    }
  }

  onClickRight = () => {
    const {activePage} = this.state
    if (activePage < 20) {
      this.setState(
        prevState => ({activePage: prevState.activePage + 1}),
        this.getRestaurantsList,
      )
    }
  }

  renderRestaurantsList = () => {
    const {restaurantsList, activeOptionValue, activePage} = this.state
    const leftArrow = '<'
    const rightArrow = '>'
    return (
      <>
        <RestaurantsHeader
          activeOptionValue={activeOptionValue}
          sortByOptions={sortByOptions}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <hr className="line" />
        <ul className="restaurants-cont">
          {restaurantsList.map(restaurant => (
            <RestaurantCard
              restaurantDetails={restaurant}
              key={restaurant.id}
            />
          ))}
        </ul>
        <div className="pagination-cont">
          <button
            className="previous-page"
            data-testid="pagination-left-button"
            onClick={this.onClickLeft}
            type="button"
          >
            {leftArrow}
          </button>
          <p className="page-no" data-testid="active-page-number">
            {activePage} of 20
          </p>
          <button
            className="next-page"
            data-testid="pagination-right-button"
            onClick={this.onClickRight}
            type="button"
          >
            {rightArrow}
          </button>
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div
      data-testid="restaurants-list-loader"
      className="restaurants-loader-cont"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderRestaurantsList()
  }
}
export default PopularRestaurantsSection
