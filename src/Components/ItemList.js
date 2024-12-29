import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice"
const ItemList = ({ items }) => {
    const dispatch = useDispatch()


    const handleadditem = () => {
        dispatch(addItems("burger"))
    }
    // console.log(items)

    return (
        <div className="">
            {items.map((item) =>
                <div key={item.card.info.id} className="p-2 m-0 border-b flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[18px] font-bold">{item.card.info.name}</span>
                        <span className="text-[15px] tracking-1">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        <p className="text-[12px] tracking-1 leading-2 text-[#A7A9B1] font-thin mt-2 w-[90%]">{item.card.info.description}</p>
                    </div>
                    <div className="flex items-center gap-20">
                        <img className="w-20 h-[70px]  rounded-lg object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} alt="" />
                        <button className="mr-4 h-8 w-8 flex items-center justify-center px-4  py-1 bg-green-300 rounded-md" onClick={handleadditem}>+</button>
                    </div>
                </div>)}

        </div>
    )
}

export default ItemList