import Home from "./Home"
import { Route, Routes } from 'react-router-dom';

export default function Pages() {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}