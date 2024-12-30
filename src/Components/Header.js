import { useContext, useState } from "react"
import { URL_LOGO } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "./UserContext"
import { useSelector } from "react-redux"




const Header = ()=>{
    const onlineStatus = useOnlineStatus()
    const[name, setName] = useState("Login")
    // console.log("header")
    // useEffect(()=>{console.log("useefeect")},[name])

    const contextdata = useContext(UserContext)

    
    const cartItems = useSelector((store)=>store.cart.Item)
    // console.log(cartItems)
    
 

    return (
        <div className="header">
            <div className="logo container ">
                <img className="logo" src={URL_LOGO} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>onlineStatus:{onlineStatus?"✅":"❌"}</li>
                    <Link className="px-3 py-1 bg-orange-500 rounded-md text-white" to="/" >Home</Link>
                    <Link className="px-3 py-1 bg-orange-500 rounded-md text-white" to="/grocery" >Grocery</Link>
                   
                    <li className="bg-orange-500 rounded-md text-white">Cart - {cartItems.length}</li>
                    <button className="px-3 py-1 bg-orange-500 rounded-md text-white" onClick={()=>{name=="Login"?setName("Logout"):setName("Login")}}>{name}</button>
                    <h6 className="px-3 py-1 bg-green-400 rounded-md text-white">{contextdata.logged}</h6>
                 
                </ul>
            </div>

        </div>
    )
}

export default Header