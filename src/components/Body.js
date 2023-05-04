import RestaurantCard from "./RetaurantCard";
import restaurantList from "./restaurantList"

const Body = () => {
  return (
    <div>
      <div className="filter" onClick={()=>{
        console.log("clicked")
      }}>
        <button className="filter-btn">Top Rated Restaurant</button>
      </div>
    <div className="restaurant-list">
      
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
    </div>
  );
};
export default Body;