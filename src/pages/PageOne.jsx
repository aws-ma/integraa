import { Drawer, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Allegati from "../components/allegati/Allegati";
import MainTable from "../components/mainTable/MainTable";
import Navbar from "../components/navbar/Navbar";
import TableControl from "../components/tableControl/TableControl";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const PageOne = () => {
    const [open, setOpen] = useState(false);
    const handleDrawer = () => {
        setOpen((s) => !s);
    };
    return (
        <>
            <Navbar />
            <TableControl />
            <Box sx={{ borderRadius: "8px", padding: "0 30px" }}>
                <MainTable handleDrawer={handleDrawer} />
            </Box>
            <Drawer anchor='right' open={open} onClick={handleDrawer}>
                <Box sx={{ maxWidth: "1200px" }}>
                    <Allegati />
                </Box>
            </Drawer>
        </>
    );
};

export default PageOne;
