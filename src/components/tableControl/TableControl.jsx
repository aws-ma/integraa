import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
//style components
const StyledButton = styled(Button)({
    color: "#1C2230",
    backgroundColor: "#F2DE31",
    padding: "6px 20px",
    fontWeight: "bolder",
    "&:hover": {
        backgroundColor: "#1C2230",
        color: "#F2DE31",
    },
});
const TableControlContainer = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px",
});
const TableControl = () => {
    return (
        <TableControlContainer >
            <StyledButton >Filtra</StyledButton>
            <StyledButton startIcon={<AddCircleIcon />} component={Link} to='/nuovo-preventivo'>Nuovo Preventivo</StyledButton>
        </TableControlContainer>
    );
};

export default TableControl;
