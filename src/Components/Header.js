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
    console.log(cartItems)
    
 

    return (
        <div className="header">
            <div className="logo container ">
                <img className="logo" src={URL_LOGO} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>onlineStatus:{onlineStatus?"✅":"❌"}</li>
                    <Link to="/" >Home</Link>
                    <Link to="/grocery" >Grocery</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/contact" >Contact</Link>
                    <Link to="/service" >Service</Link>
                    <li>Cart - {cartItems.length}</li>
                    <button className="btn-log" onClick={()=>{name=="Login"?setName("Logout"):setName("Login")}}>{name}</button>
                    <h6>{contextdata.logged}</h6>
                 
                </ul>
            </div>

        </div>
    )
}

export default Header