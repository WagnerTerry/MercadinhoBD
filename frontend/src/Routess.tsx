import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './views/Home';
import { Users } from './views/Users';

export function Routess(){
    return (
        <Router>
            <div id="route">
                <Routes>
                    <Route path={"/"} element={<Home />}  />
                    <Route path={'/users'} element={<Users />} />
                </Routes>
            </div>
        </Router>
    )
}