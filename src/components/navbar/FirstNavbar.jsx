import React from "react";
import {
    Avatar,
    Button,
    ButtonGroup,
    IconButton,
    Tooltip,
} from "@mui/material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import logo from "../../image/logo.png";
//import icons from Material ui
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
//style components
const StyledStack = styled(Stack)({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
});
const StyledIconButton = styled(IconButton)({
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    color: "#212121",
});
const StyledButton = styled(IconButton)({
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    backgroundColor: "#F2DE31",
    fontWeight: "bolder",
    color: "#212121",
});
const FirstNavbar = () => {
    return (
        <StyledStack
            sx={{
                width: "100%",
                padding:'0 30px'
            }}>
            <Avatar
                variant='square'
                sx={{ width: "119px", height: "54px" }}
                src={logo}
                alt='Integraa logo'
            />
            <StyledStack>
                <ButtonGroup sx={{ height: "36px" }}>
                    <StyledIconButton aria-label='assignment turned'>
                        <AssignmentTurnedInIcon />
                    </StyledIconButton>
                    <StyledIconButton aria-label='assignment'>
                        <AssignmentIcon />
                    </StyledIconButton>
                    <StyledIconButton aria-label='groups'>
                        <GroupsIcon />
                    </StyledIconButton>
                    <StyledIconButton aria-label='notifications'>
                        <NotificationsNoneIcon />
                    </StyledIconButton>
                </ButtonGroup>
                <Tooltip
                    title='Luigi Trooiano'
                    placement='left'
                    sx={{ backgroundColor: "#212121" }}>
                    <StyledButton>LT</StyledButton>
                </Tooltip>
            </StyledStack>
        </StyledStack>
    );
};

export default FirstNavbar;
