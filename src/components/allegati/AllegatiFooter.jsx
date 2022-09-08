import { Box, Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

//import icons
import CloseIcon from "@mui/icons-material/Close";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const footerData = [
    {
        title: "Condizioni",
        subtitle: "Condizione sogert",
        icon: <AssignmentIcon sx={{ color: "green" }} />,
    },
    {
        title: "Note",
        subtitle: "Nota sogert",
        icon: <ReceiptIcon sx={{ color: "blue" }} />,
    },
    {
        title: "Elementi personalizzati",
        subtitle: "Field Sogert",
        icon: <AddBoxIcon sx={{ color: "orange" }} />,
    },
];
const AllegatiFooter = () => {
    return (
        <Box sx={{ minHeight: "300px", padding: "15px" }}>
            <Button
                startIcon={<ArrowRightIcon />}
                sx={{
                    color: "#1C2230",
                    fontWeight: 600,
                }}>
                Info aggiuntive
            </Button>
            <Stack
                direction='row'
                sx={{ flexWrap: "wrap", alignItems: "flex-start" }}>
                {footerData.map((content, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{ color: "#1C2230", margin: "0 20px 20px 0" }}>
                            <Typography variant='h5' gutterBottom>
                                {content.title}
                            </Typography>
                            <Stack
                                component={Paper}
                                direction='row'
                                sx={{
                                    padding: "20px 10px",
                                    width: "280px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                <Stack
                                    direction='row'
                                    sx={{
                                        alignItems: "center",
                                    }}>
                                    {content.icon}
                                    <Typography
                                        variant='subtitle2'
                                        sx={{ marginLeft: "5px" }}>
                                        {content.subtitle}
                                    </Typography>
                                </Stack>
                                <CloseIcon
                                    sx={{ fontWeight: 600, color: "red" }}
                                />
                            </Stack>
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default AllegatiFooter;
