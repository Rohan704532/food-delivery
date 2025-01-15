import React, { useContext,useState,useEffect } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category,searchQuery }) => {
  const { food_list } = useContext(StoreContext);
  const [filteredFoodList, setFilteredFoodList] = useState(food_list)
  useEffect(() => {
    setFilteredFoodList(
      food_list.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [searchQuery, food_list])
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => {
          if (category == "All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
