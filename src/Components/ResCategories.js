import { useState } from "react"
import ItemList from "./ItemList"

const ResCategories = ({ data, showItem,setshowIndex }) => {
    // const [showItem, setshowitem] = useState(false)

    const handeClick = () => {
        // setshowitem(!showItem)
        setshowIndex()
    }
    // console.log(data)
    return <div className="w-full">
        <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-2 p-2 cursor-pointer" onClick={handeClick} >
            <div className="flex justify-between">
                <span className="font-bold text-sm opacity-90">{data?.card?.card?.title} ({data.card.card.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div>
                {showItem && <ItemList items={data.card.card.itemCards} />}
            </div>

        </div>


    </div>
}
export default ResCategories