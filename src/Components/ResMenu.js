import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useReshook from "../utils/useReshook"
import ResCategories from "./ResCategories"
import { useState } from "react"


const ResMenu = ()=>{
// const [resMenu, setresMenu] = useState(null)

const {resId} = useParams()

const resMenu = useReshook(resId)
const [showIndex, setshowIndex] = useState(null)
console.log(resMenu)


// useEffect(()=>{
//     getMenu()
// },[])

// const getMenu = async ()=>{
//     const response = await fetch(API_URL+ resId)
//     const json = await response.json()
//     setresMenu(json)
    
    
// }




if(resMenu===null) return <Shimmer/>


const resInfo = resMenu && resMenu.data.cards && resMenu.data.cards.length > 0 ?
resMenu.data.cards[2].card.card.info : {};

const {name,costForTwoMessage,cuisines,locality} = resInfo

const {itemCards} = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
// console.log(itemCards)

// console.log(resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR )



    const categories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=> c.card.card["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)

return ( 
<div className="flex items-center flex-col">
        <h2 className="font-bold text-2xl">{name}</h2>
        <h4 className="mr-[76px] text-sm opacity-50">{cuisines}</h4>
        <h6 className="mr-[82px] text-sm mt-[-5px] opacity-50">{locality}</h6>
        {/* <h6 className="mr-[55px] text-sm mt-2 opacity-50">{costForTwoMessage}</h6> */}
        {/* <h1>Menu</h1> */}
        {/* <ul>
            {itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name}</li>))}
        </ul> */}

        {categories.map((category,index)=> <ResCategories data={category} showItem={index===showIndex?true:false}
        setshowIndex={()=>setshowIndex(index)}/>)}
       
    </div>

    )
}
export default ResMenu