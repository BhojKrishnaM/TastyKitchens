import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const RestaurantsHeader = props => {
  const {sortByOptions, activeOptionValue, updateActiveOptionId} = props
  const onChangeSortby = event => {
    updateActiveOptionId(event.target.value)
  }

  return (
    <div className="restaurantsHeader">
      <div>
        <h1 className="restaurantsHeading">Popular Restaurants</h1>
        <p className="chooseDescription">
          Select Your favourite restaurant special dish and make your day
          happy...
        </p>
      </div>
      <div className="sortByContainer">
        <BsFilterRight className="sortByIcon" />
        <p className="sortBy">Sort by</p>
        <select
          className="sortBySelect"
          value={activeOptionValue}
          onChange={onChangeSortby}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.id}
              value={eachOption.value}
              className="selectOption"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RestaurantsHeader
