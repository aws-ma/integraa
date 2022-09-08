import { Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";

const WindowWidthError = () => {
    return (
        <Stack sx={{backgroundColor: "#222222",width:'100%',height:'100vh',justifyContent:'center',
        alignItems:'center',}}>
            <Typography sx={{ color:'red'}} gutterBottom>
                The outer window size must be bigger than this window
            </Typography>
            <Stack
            direction='row'
                sx={{
                    width: "100%",
                              
                    justifyContent:'center',
                    alignItems:'center',
                    color:'#F2DE31'
                }}>
                Made With <FavoriteIcon sx={{color:"red"}}/> By Aws Maarouf 
            </Stack>
        </Stack>
    );
};

export default WindowWidthError;
