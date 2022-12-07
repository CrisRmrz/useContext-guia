import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink end to='/' className={({ isActive }) =>isActive ? 'activo' : ''}>HomePage</NavLink> {/*El NavLink me permite tener la clase activa, por ejemplo, estoy en la pagina de episodios, entonces queda como marcada esa. Y el end para arreglar la clase activa */}
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) =>isActive ? 'activo' : ''}>AboutPage</NavLink>
                </li>
                <li>
                    <NavLink to='/login' className={({ isActive }) =>isActive ? 'activo' : ''}>LoginPage</NavLink>
                </li>
            </ul>
        </nav>
    )
}
