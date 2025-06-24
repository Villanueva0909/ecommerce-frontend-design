import { BrowserRouter, Routes, Route } from "react-router"
import { Navbar } from "../Components/Navbar"
import { Home } from "../Pages/Home/Home"
import { Login } from "../Pages/Auth/Login/Login"
import { Register } from "../Pages/Auth/Register/Register"
import Auth from "../Pages/Auth/Auth"


const MainLayout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="auth" element={<Auth />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default MainLayout