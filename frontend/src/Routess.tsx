import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './views/Home';
import { Product } from "./views/Product";
import { Users } from './views/Users';

export function Routess() {
    return (
        <Router>
            <div id="route">
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={'/users'} element={<Users />} />
                    <Route path={'/products'} element={<Product />} />
                </Routes>
            </div>
        </Router>
    )
}