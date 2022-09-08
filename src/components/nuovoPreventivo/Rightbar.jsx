import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

//import Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
const Rightbar = () => {
    return (
        <Stack direction='row'>    
            <Box
                sx={{
                  width:'35vw',
                    height: "100vh",
                    backgroundColor: "#F6F5FA",
                    borderRadius: "30px 0px 0px 30px",
                    padding:'30px'
                }}>
                <Typography gutterBottom variant='h5' align="center">Elementi fissi</Typography>
                <Typography variant='h6' gutterBottom>Termini e condizioni</Typography>
                <Stack
                    component={Paper}
                    direction='row'
                    sx={{ padding: "10px", justifyContent: "space-between" }}>
                    <Button
                        sx={{ color: "#1C2230", fontWeight: 600 }}
                        startIcon={<AddCircleIcon sx={{ color: "#188EFF" }} />}>
                        Aggiungi condizione
                    </Button>
                    <Box>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandCircleDownIcon />
                        </IconButton>
                    </Box>
                </Stack>
                <Typography variant='h6' gutterBottom>Note</Typography>
                <Stack
                    component={Paper}
                    direction='row'
                    sx={{ padding: "10px", justifyContent: "space-between" }}>
                    <Button
                        sx={{ color: "#1C2230", fontWeight: 600 }}
                        startIcon={<AddCircleIcon sx={{ color: "#188EFF" }} />}>
                        Aggiungi nota
                    </Button>
                    <Box>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandCircleDownIcon />
                        </IconButton>
                    </Box>
                </Stack>
                <Typography variant='h6' gutterBottom>Elementi personalizzati</Typography>
                <Stack
                    component={Paper}
                    direction='row'
                    sx={{ padding: "10px", justifyContent: "space-between" }}>
                    <Button
                        sx={{ color: "#1C2230", fontWeight: 600 }}
                        startIcon={<AddCircleIcon sx={{ color: "#188EFF" }} />}>
                        Aggiungi elemento
                    </Button>
                    <Box>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandCircleDownIcon />
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Rightbar;
