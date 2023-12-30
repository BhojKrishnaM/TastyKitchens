import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'
import Header from '../Header'
import Footer from '../Footer'
import HomeCarousel from '../HomeCarousel'
import PopularRestaurantsSection from '../PopularRestaurantsSection'
import './index.css'

class Home extends Component {
  state = {carouselImagesData: [], isLoading: false}

  componentDidMount() {
    this.getOffersData()
  }

  getOffersData = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedOffersData = fetchedData.offers.map(offer => ({
        imageUrl: offer.image_url,
        id: offer.id,
      }))
      this.setState({carouselImagesData: updatedOffersData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div data-testid="restaurants-offers-loader" className="products-loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const settings = {
      dots: true,
    }
    const {carouselImagesData, isLoading} = this.state
    return (
      <>
        <Header />
        <ul className="carousel-container">
          <Slider {...settings}>
            {isLoading
              ? this.renderLoadingView()
              : carouselImagesData.map(image => (
                  <HomeCarousel imageDetails={image} key={image.id} />
                ))}
          </Slider>
        </ul>
        <PopularRestaurantsSection />
        <Footer />
      </>
    )
  }
}

export default Home
