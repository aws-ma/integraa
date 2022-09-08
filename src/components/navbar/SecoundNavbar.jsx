import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import MenuListButton from "./MenuListButton";

// style components
const SecoundNavbarContainer = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C2230",
    padding: "0 30px",
});

const MenuButton = styled((props) => <Button component={Link} {...props} />)(
    ({ theme }) => ({
        padding: "5px 15px",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#F2DE31",
            color: "#1C2230",
        },
    })
);
const SecoundNavbar = () => {
    return (
        <SecoundNavbarContainer>
            <MenuButton  to="/">Home</MenuButton>
            <MenuListButton  to="/">Configurazioni</MenuListButton>
            <MenuButton  to="/">Documenti</MenuButton>
            <MenuButton  to="/">Servizi postali</MenuButton>
            <MenuButton  to="/" >Servizi idrici</MenuButton>
            <MenuButton  to="/">Servizi digitali</MenuButton>
            <MenuButton  to="/">Gestione</MenuButton>
            <MenuButton  to="/">Controllo</MenuButton>
            <MenuButton  to="/">Commerciale</MenuButton>
            <MenuButton  to="/">Supporto</MenuButton>
        </SecoundNavbarContainer>
    );
};

export default SecoundNavbar;
