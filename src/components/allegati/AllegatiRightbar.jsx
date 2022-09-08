import { Box, Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

//Riepilogo data
const riepilogo = [
    { title: "Competenze", subtitle: "", price: "525,00 €", color: "#188EFF" },
    { title: "IVA", subtitle: "525,00 €", price: "115,50 €", color: "#188EFF" },
    {
        title: "Totale da pagare",
        subtitle: "",
        price: "640,50 €",
        color: "#188EFF",
    },
    {
        title: "Capienza determine",
        subtitle: "",
        price: "640,50 €",
        color: "#67AD21",
    },
    { title: "Rimanente", subtitle: "", price: "20,50 €", color: "#FFA700" },
];
const AllegatiRightbar = () => {
    return (
        <Box sx={{ height: "80vh", padding: "15px" }}>
            <Stack spacing={2}>
                <Typography variant='h5' sx={{ textAlign: "center" }}>
                    Azioni
                </Typography>
                <Button
                    component={Paper}
                    variant='contained'
                    sx={{
                        color: "#fff",
                        backgroundColor: "#50B957",
                        "&:hover": { backgroundColor: "#FEDA44" },
                    }}>
                    Approva
                </Button>
                <Button
                    component={Paper}
                    variant='contained'
                    sx={{
                        color: "#fff",
                        backgroundColor: "#F45564",
                        "&:hover": { backgroundColor: "#FEDA44" },
                    }}>
                    Rigetta
                </Button>
                <Button
                    component={Paper}
                    variant='contained'
                    sx={{
                        color: "#1C2230",
                        backgroundColor: "#fff",
                        "&:hover": { backgroundColor: "#FEDA44" },
                    }}>
                    Modifica
                </Button>
            </Stack>
            <Stack spacing={2}>
                <Typography
                    variant='h5'
                    sx={{ textAlign: "center", margin: "10px 0" }}>
                    Riepilogo
                </Typography>
               
                {riepilogo.map((item, index) => {
                    return (
                        <Stack
                            key={index}
                            direction='row'
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                            <Typography as='span' >
                                {item.title} 
                                <Typography
                                    as='span'
                                    sx={{ color: item.color,marginLeft:'5px' }}>
                                    {item.subtitle}
                                </Typography>
                            </Typography>
                            <Typography as='span' sx={{ color: item.color }}>
                                {item.price}
                            </Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default AllegatiRightbar;
