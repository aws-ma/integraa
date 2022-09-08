import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const StepButton = styled(Button)({
    backgroundColor: "#252D40",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#252D40",
        color: "#fff",
    },
    "&.Mui-disabled":{
      backgroundColor: "#1C2230",
      color: "#fff",
    }
});
const Stepsbar = () => {
    return (
        <Box
            sx={{
                width: "230px",
                height: "calc(100vh - 140px)",
                backgroundColor: "#1C2230",
                borderRadius: "10px",
                color:'#fff',
                padding:'20px'
            }}>
            <Stack spacing={1} >
                <Typography variant='h6' gutterBottom>
                    Step 1: <br />
                    Elementi variabili
                </Typography>
                <StepButton>Anagrafica cliente</StepButton>
                <StepButton disabled={true}>Dati documento</StepButton>
                <StepButton disabled={true}>Info aggiuntive</StepButton>
                <hr/>
            </Stack>
            <Stack spacing={1} >
                <Typography variant='h6' gutterBottom>
                    Step 2: <br />
                    Elementi economici
                </Typography>
                <StepButton disabled={true}>Anagrafica cliente</StepButton>
  
            </Stack>
        </Box>
    );
};

export default Stepsbar;
