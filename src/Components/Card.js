// import { IMG_LOGO } from "../utils/constant"
// import data from "../utils/mockData"

import { useContext } from "react"
import UserContext from "./UserContext"




const Card = (props) => {

    const context = useContext(UserContext)
  
    // console.log(props.data.info)
    const { name, cuisines, avgRating,
        cloudinaryImageId } = props.data.info
       

    return (
        <>
            {/* <h6 className="open">{isOpen?"open":""}</h6> */}
            <div className="res-card">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
                <div className="all-text">
                    <h4>{name}</h4>
                    <h5>{cuisines.join(", ")}</h5>
                    <div className="line-text items-center ">
                        <h6 className="w-8 flex text-[12px] mr-2"><span>&#9733; </span> { avgRating}</h6>
                        <h6 className="text-[12px] font-medium">27 mins</h6>
                        {/* <h6 className="text-[10px]">400 FOR  TWO</h6> */}
                        
             
                    </div>
                </div>

            </div>
        </>)
}

// high order component

export const updatedCard = (Card) => {
    return (props) => {
        return (
            <div>
                <h6 className="open">Open</h6>
                <Card {...props} />
            </div>
        )
    }
}

export default Card