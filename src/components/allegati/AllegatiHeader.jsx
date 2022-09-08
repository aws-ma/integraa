import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const AllegatiHeader = () => {
    return (
        <Stack
            sx={{
                height: "200px",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "30px 30px 20px",
                position: "relative",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    width: "90%",
                    height: "2px",
                    bottom: 0,
                    left: "5%",
                    backgroundColor: "#E3E2E8",
                },
            }}>
            <Box sx={{ color: "#1C2230" }}>
                <Typography variant='h5' gutterBottom>
                    Sogert S.p.a.
                </Typography>
                <Typography variant='subtitle2'>I T5349432102</Typography>
                <Typography variant='subtitle2'>
                    Via Napoli 1, 80010 Napoli (NA)
                </Typography>
                <Typography variant='subtitle2'>+ 39 322 223 3244</Typography>
                <Typography variant='subtitle2'>+39 051 123402</Typography>
                <Typography variant='subtitle2'>info@sogert.it</Typography>
            </Box>
            <Box sx={{ color: "#1C2230" }}>
                <Typography variant='h5' gutterBottom>
                    N° Preventivo 654865
                </Typography>
                <Typography variant='subtitle2'>
                    <Typography as='span' sx={{ fontWeight: "bolder" }}>
                        Creato da:
                    </Typography>{" "}
                    Mario Rossi
                </Typography>
                <Typography variant='subtitle2'>
                    <Typography as='span' sx={{ fontWeight: "bolder" }}>
                        Approvato da:
                    </Typography>
                    Giuseppe Miraglia
                </Typography>
            </Box>
        </Stack>
    );
};

export default AllegatiHeader;
