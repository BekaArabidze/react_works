import { NavLink } from "react-router-dom"


const Navigation = () => {
    return (
        <div>
            <NavLink to="/" style={({ isActive }) => {
                return { color: isActive ? 'red' : 'black' }
            }}>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

        </div>
    )
}

export default Navigation