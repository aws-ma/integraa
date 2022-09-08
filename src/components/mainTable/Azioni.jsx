import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";

const options = [
    "Modifica",
    "Elimina",
    "Duplica",
    "Invia al cliente",
    "Cambia stato",
    "Assegna a agente",
    "Carica documenti",
    "Crea commessa",
];

const ITEM_HEIGHT = 48;
export default function LongMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                sx={{
                    backgroundColor: "#1C2230",
                    color: "#E9EBF0",
                    "&:hover": { backgroundColor: "#E9EBF0", color: "#1C2230" },
                }}
                aria-label='more'
                id='long-button'
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup='true'
                onClick={handleClick}>
                <MoreHorizIcon />
            </IconButton>
            <Menu
                id='long-menu'
                MenuListProps={{
                    "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        Minwidth: "15rem",
                        width: "15rem",
                        boxShadow: "0 8px 16px #8B8C8F66",
                    },
                }}>
                {options.map((option) => (
                    <MenuItem 
                        sx={{ color: "#1C2215" }}
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
