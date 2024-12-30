import { useContext, useEffect, useState } from "react"
import Card, { updatedCard } from "./Card"
// import data from "../utils/mockData"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "./UserContext"


const Body = () => {
    const {setusername, logged} = useContext(UserContext)
    const [data, setData] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [text, setText] = useState("")

    const OpenLabel = updatedCard(Card)


    useEffect(() => {
        getdata()
    }, [])


    console.log(filteredData)
    const getdata = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await response.json()
        console.log(json)
        setData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setfilteredData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    const onlineStatus = useOnlineStatus()

    if (onlineStatus === false) return <h1>Oops Check Your internet connection</h1>

    //   if(data.length===0){
    //     return <Shimmer/>
    //   }
    return data.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-data">
                <div className="search ">
                    <input className="search-box px-2 py-1 p-1 border" type="text"  onChange={(e) => { setText(e.target.value) }} />

                    <button className="px-3 py-1 bg-green-300 rounded-md" onClick={() => {
                        const filteredData = data.filter((res) => res.info.name.toLowerCase().includes(text.toLowerCase()))

                        setfilteredData(filteredData)

                    }} >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    let newData = data.filter((res) => (res.info.avgRating >= 4.1))
                    setData(newData)
                    
                    
                }}>Filter it</button>

            
            </div>
            <div className="card-container">
                {filteredData.map((items) => (
                    <Link key={items.info.id} to={"/restaurants/" + items.info.id} >
                        
                        {items.info.isOpen?<OpenLabel data={items}/>:<Card data={items} /> }
                         </Link>

                ))}



            </div>
        </div>
    )
}
export default Body