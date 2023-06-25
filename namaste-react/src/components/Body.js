import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&lat=18.5158057&lng=73.9271644&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };

    return listOfRestaurants?.length === 0 ? (
        <Shimmer/> 
        ) : (
        <div className="body">
            <div className="filter">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => {
                    //filter restaurant card by search value
                    //set search value from input
                    console.log(searchText);
                    const filteredRestaurant = listOfRestaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRestaurant);

                }}>Search</button>
                <button className="filter-btn" onClick={( ) => {
                    setListOfRestaurants(
                        listOfRestaurants.filter( 
                            (restaurant) => restaurant.data.avgRating > 4
                        )
                    );
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
              {filteredRestaurants.map((restaurant) => (
                <Link  key={restaurant.data.id} to ={"/restaurants/" + restaurant.data.id}>
                    <RestaurantCard resData={restaurant} />
                </Link>
                
              ))}
            </div>
        </div>
    )
}

export default Body;