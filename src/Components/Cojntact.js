import React, { useContext } from 'react'
import UserContext from './UserContext'


const Cojntact = () => {
    const context = useContext(UserContext)

    return (

        <div>
            {context.logged}
            <h1>This is Contact page</h1>
        </div>
    )

}

export default Cojntact
