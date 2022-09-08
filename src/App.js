import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WindowWidthError from "./components/WindowWidthError";
import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";
function App() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1300) {
                setShow(true);
            } else {
                setShow(false);
            }
        }

        window.addEventListener("resize", handleResize);
    });
    return (
        <Box>
            {show?
                <Routes>
                <Route path='/' element={<PageOne />} />
                <Route path='nuovo-preventivo' element={<PageTwo />} />
                <Route path='azioni' element={<PageThree />} />
            </Routes> :<WindowWidthError/>}
        </Box>
    );
}

export default App;
