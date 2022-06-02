
import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"


const ShareLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet/>
        </>
    )
}

export default ShareLayout