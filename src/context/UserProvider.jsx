import { useState } from "react"
import { UserContext } from "./UserContext"



export const UserProvider = ({ children }) => {

    const [value, setValue] = useState([
        {
            id: 1,
            nombre: 'Cris'
        }
    ])

    return (
        <UserContext.Provider value={ {value, setValue} }>
            {children}
        </UserContext.Provider>
    )
}
