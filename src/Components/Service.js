import { useContext } from "react";
import React, { useContext } from "react";
import UserContext from "./UserContext";

const Service = () => {
    const data = useContext(UserContext)

    return (<div>
        <h2>This Is service</h2>
        <h4>{data.logged }</h4>
    </div>
    )
}

export default Service;