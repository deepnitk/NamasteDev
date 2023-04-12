import { CDN_URL } from "../utils/constants";

const ReastuarantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, minDeliveryTime, cloudinaryImageId} = resData?.data;
    return (
        <div className="res-card">
            <img
                className="res-card-logo"
                alt="res-logo" 
                src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100} for two</h4>  
            <h4>{minDeliveryTime} minutes</h4>
        </div>
    );
}

export default ReastuarantCard;