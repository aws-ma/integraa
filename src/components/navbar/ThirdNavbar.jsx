import styled from "@emotion/styled";
import { Button, Link } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
// style components
const ThirdNavbarContainer = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9EBF0",
    padding: "0 30px",
});
const MenuButton = styled((props) => <Button component={Link} {...props} />)(
    ({ theme }) => ({
        padding: "5px 15px",
        color: "#1C2230",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: "#F2DE31",
        },
    })
);
const ThirdNavbar = () => {
    return (
        <ThirdNavbarContainer>
            <MenuButton>Preventivi</MenuButton>
            <MenuButton>Capienze</MenuButton>
            <MenuButton>Capienze</MenuButton>
            <MenuButton>Agenti</MenuButton>
            <MenuButton>CRM</MenuButton>
        </ThirdNavbarContainer>
    );
};

export default ThirdNavbar;
