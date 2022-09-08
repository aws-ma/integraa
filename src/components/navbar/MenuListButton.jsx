import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const StyledMenuItem = styled(MenuItem)({
    "&:hover": {
        backgroundColor: " #F2DE31",
        color: "#1C2230",
    },
});

export default function MenuListButton() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction='row' spacing={2} sx={{ zIndex: 9999999 }}>
            <div>
                <Button
                    sx={{
                        padding: "5px 15px",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#F2DE31",
                            color: "#1C2230",
                        },
                    }}
                    ref={anchorRef}
                    id='composition-button'
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup='true'
                    onClick={handleToggle}>
                    Configurazioni
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement='bottom-start'
                    transition
                    disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom-start"
                                        ? "left top"
                                        : "left bottom",
                            }}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        sx={{
                                            backgroundColor: "#1C2230",
                                            color: "#fff",
                                            zIndex: 9999999,
                                        }}
                                        autoFocusItem={open}
                                        id='composition-menu'
                                        aria-labelledby='composition-button'
                                        onKeyDown={handleListKeyDown}>
                                        <StyledMenuItem onClick={handleClose}>
                                            Destinazioni
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                            Cespiti
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                            Destinazioni
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                            Cespiti
                                        </StyledMenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
