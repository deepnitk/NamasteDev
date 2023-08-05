import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) {
        return <Shimmer/>;
    }

    const { name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards}  = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>
        category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-xl">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {categories.map((category, index) =>
                <RestaurantCategory
                    key= {category.type}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    index
                />
            )}
        </div>
    );
};

export default RestaurantMenu;