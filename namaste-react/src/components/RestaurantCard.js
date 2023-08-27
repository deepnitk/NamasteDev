import { CDN_URL } from "../utils/constants";

const ReastuarantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, minDeliveryTime, cloudinaryImageId} = resData?.info;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo" 
                src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines?.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100} for two</h4>  
            <h4>{minDeliveryTime} minutes</h4>
        </div>
    );
}

    /*
        HOC
        Input is RestaurantCard and Output is RestaurantCardEnhanced
    */

    export const withPromotedLevel = (ReastuarantCard) => {
        return (props) => {
            return(
                <div>
                    <label className="absolute bg-black text-white p-2 rounded-lg">Promoted</label>
                    <ReastuarantCard {...props}/>
                </div>
            );
        }
    }
    

export default ReastuarantCard;