import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Text = () => {
    return (
        <Box sx={{ color: "#1C2230",padding:'30px 0 20px',height:'140px'}} >
            <Typography variant='h5' gutterBottom>Richiesta preventivo</Typography>
            <Typography variant='subtitle2'>
                Descrizione del servizio - Questo campo di testo serve a
                descrivere il servizio e il suo scopo, insieme al processo del
                servizio menzionato. Suggerimenti importanti dovrebbero essere
                suggeriti qui.
            </Typography>
        </Box>
    );
};

export default Text;
