import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { useRef, useState } from "react";
import { Stack } from "@mui/system";

const options = [
    { title: "In attesa", color: "#F2DE31" },
    { title: "Approvato da responsabile", color: "#50B957" },
    { title: "Rigettato da responsabile", color: "#F45564" },
    { title: "Inviato al cliente", color: "#008DCB" },
    { title: "Approvato da cliente", color: "#31A339" },
    { title: "Rigettato da cliente", color: "#EB1A2D" },
];
const Stato = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex].title}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <ButtonGroup
                variant='contained'
                ref={anchorRef}
                aria-label='split button'>
                <Button
                    endIcon={<ArrowDropDownIcon />}
                    onClick={() => {
                        handleClick();
                        handleToggle();
                    }}
                    sx={{
                        maxHeight: "45px",
                        backgroundColor: options[selectedIndex].color,
                        "&:hover": {
                            backgroundColor: options[selectedIndex].color,
                        },
                    }}
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label='select merge strategy'
                    aria-haspopup='menu'>
                    {options[selectedIndex].title}
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom"
                                    ? "center top"
                                    : "center bottom",
                        }}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    component={Stack}
                                    spacing={1}
                                    sx={{ alignItems: "center" }}
                                    id='split-button-menu'
                                    autoFocusItem>
                                    {options.map((option, index) => (
                                        <Button
                                            variant='contained'
                                            sx={{
                                                width: "fit-content",
                                                backgroundColor: option.color,
                                                "&:hover": {
                                                    backgroundColor:
                                                        option.color,
                                                },
                                                color: "#fff",
                                            }}
                                            key={index}
                                            selected={index === selectedIndex}
                                            onClick={(event) =>
                                                handleMenuItemClick(
                                                    event,
                                                    index
                                                )
                                            }>
                                            {option.title}
                                        </Button>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default Stato;
