import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

//import Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

//styled component
const ElementiFissicontainer = styled(Stack)({
    width: "375px",
    height: "936px",
    backgroundColor: "#F6F5FA",
    borderRadius: "30px 0px 0px 30px",
    padding: "30px",
});
const StyledButton = styled(Button)({
    color: "#1C2230",
    fontWeight: 600,
});
const StyledStack = styled(Stack)({
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
});
const ElementiFissi = () => {
    return (
        <ElementiFissicontainer spacing={2}>
            <Typography  variant="h5" sx={{fontWeight:'bold',textAlign:'center'}}>Elementi fissi</Typography>

            <Box>
                <Typography variant="h6" gutterBottom>Termini e condizioni</Typography>
                <StyledStack component={Paper}>
                    <StyledButton
                        startIcon={<AddCircleIcon sx={{ color: "#188EFF" }} />}>
                        Aggiungi condizione
                    </StyledButton>
                    <Box>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandCircleDownIcon />
                        </IconButton>
                    </Box>
                </StyledStack>
            </Box>

            <Box>
                <Typography  variant="h6" gutterBottom>Note</Typography>
                <StyledStack component={Paper}>
                    <StyledButton
                        startIcon={<AddCircleIcon sx={{ color: "#188EFF" }} />}>
                        Aggiungi nota
                    </StyledButton>
                    <Box>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandCircleDownIcon />
                        </IconButton>
                    </Box>
                </StyledStack>
            </Box>

            <Box>
                <Typography  variant="h6" gutterBottom>Elementi personalizzati</Typography>
                <StyledStack component={Paper}>
                    <StyledButton
                        startIcon={<AddCircleIcon sx={{ color: "#188EFF" }} />}>
                        Aggiungi elemento
                    </StyledButton>
                    <Box>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandCircleDownIcon />
                        </IconButton>
                    </Box>
                </StyledStack>
            </Box>
        </ElementiFissicontainer>
    );
};

export default ElementiFissi;
