import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice"
const ItemList = ({ items }) => {
    const dispatch = useDispatch()


    const handleadditem = () => {
        dispatch(addItems("burger"))
    }
    // console.log(items)

    return (
        <div>
            {items.map((item) =>
                <div key={item.card.info.id} className="p-2 m-0 border-b flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-[12px] font-bold">{item.card.info.name}</span>
                        <span className="text-[10px] tracking-1">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        <p className="text-[10px] tracking-1 leading-2 text-[#A7A9B1] font-thin mt-2">{item.card.info.description}</p>
                    </div>
                    <img className="w-20 h-[70px] p-1 rounded-lg object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} alt="" />
                    <button onClick={handleadditem}> add +</button>

                </div>)}

        </div>
    )
}

export default ItemList