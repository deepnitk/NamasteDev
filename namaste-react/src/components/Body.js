import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const isOnline = useOnlineStatus();
    if (isOnline === false) return <h1>Looks like you are offline!! Please check your internet connection.</h1>

    return listOfRestaurants?.length === 0 ? (
        <Shimmer/> 
        ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            //filter restaurant card by search value
                            //set search value from input
                            console.log(searchText);
                            const filteredRestaurant = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurant);

                        }}>Search
                    </button>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={( ) => {
                        setListOfRestaurants(
                            listOfRestaurants.filter( 
                                (restaurant) => restaurant?.info?.avgRating > 4
                            )
                        );
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            </div>
            <div className="flex flex-wrap">
              {filteredRestaurants?.map((restaurant) => (
                <Link  key={restaurant?.info?.id} to ={"/restaurants/" + restaurant?.info?.id}>
                    <RestaurantCard resData={restaurant} />
                </Link>
                
              ))}
            </div>
        </div>
    )
}

export default Body;