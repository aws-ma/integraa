import { Box, Grid } from "@mui/material";
import React from "react";
import Form from "./Form";
import Rightbar from "./Rightbar";
import Stepsbar from "./Stepsbar";
import Text from "./Text";

const NuovoPreventivo = () => {
    return (
        <Box sx={{ flexGrow: 1, paddingLeft: "30px" }}>
            <Grid container spacing={2}> 
                <Grid item xs={8.5}>
                    <Grid container spacing={2}>
                        <Grid>
                            <Text />
                        </Grid>
                        <Grid item xs={3}>
                            <Stepsbar />
                        </Grid>
                        <Grid item xs={9}>
                          <Form/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3.5}>
                    <Rightbar />
                </Grid>
            </Grid>
        </Box>
    );
};

export default NuovoPreventivo;
