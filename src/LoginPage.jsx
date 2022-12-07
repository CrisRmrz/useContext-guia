import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

    const { value, setValue } = useContext( UserContext ); //El user context es lo que esta en la carpeta context

    const onClick = () => {
        setValue([...value,{ id: 2, nombre: 'Luis' }])
    }

    console.log(value)

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <button onClick={ onClick } >Cambiar estado</button>
        </>
    )
}
