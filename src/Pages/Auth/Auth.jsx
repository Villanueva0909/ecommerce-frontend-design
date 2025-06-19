import { Outlet } from "react-router"

export const Auth = () => {
    return (
        <>
            <div>this is auth page </div>
            <Outlet />
        </>
    )
}

export default Auth