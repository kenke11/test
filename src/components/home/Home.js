import {NavLink, Route, Router, Routes} from "react-router-dom";
import Profile from "./profile/Profile";

const Home = () => {
    return (
        <div>
            <h1 className="text-xl">Home</h1>
            <ul>
                <li><NavLink to='/home/profile'>rame 1</NavLink> </li>
                <li><NavLink to='/home/sxva'>rame sxva</NavLink> </li>
            </ul>

            <div>
                <Routes>
                    <Route path={'/home/profile'} element={<Profile />} />
                </Routes>
            </div>
        </div>
    )
}

export default Home;