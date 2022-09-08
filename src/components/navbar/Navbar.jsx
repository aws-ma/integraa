import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import FirstNavbar from "./FirstNavbar";
import SecoundNavbar from "./SecoundNavbar";
import ThirdNavbar from "./ThirdNavbar";

const Nanbar = () => {
    return (
        <AppBar sx={{ backgroundColor: "#fff",position:'static',boxShadow:'none'}} >
            <Toolbar sx={{ backgroundColor: "#fff", padding: '0!important' }}>
                <Stack sx={{ width: "100%" }}>
                    <FirstNavbar />
                    <SecoundNavbar />
                    <ThirdNavbar />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Nanbar;
