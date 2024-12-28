import { useEffect, useState } from "react";
import { API_URL } from "./constant";

const useReshook = (resId)=>{
const [resMenu, setresMenu] = useState(null)

    useEffect(()=>{
        getdata() 
    },[])
     
    const getdata = async ()=>{
        const data = await fetch(API_URL+resId)
        const json = await data.json()
        setresMenu(json)
    }

    return resMenu
}

export default useReshook;