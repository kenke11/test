import './App.css';
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Profile from "./components/home/profile/Profile";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li><NavLink to={'/home'}>home</NavLink></li>
                        <li><NavLink to={'/posts'}>posts</NavLink></li>

                        <li>rame</li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/posts' element={<Posts />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
