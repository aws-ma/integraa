import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import PrintIcon from "@mui/icons-material/Print";

//table data  database
const tableHeadCells = [
    "Azioni",
    "Prodotto",
    "Codice prodotto",

    <span>
        Categoria
        <br />
        Servizio
        <br /> Sottocategoria
    </span>,
    <span>
        IVA <br />
        Sconto
    </span>,
    <span>
        Prezzo netto
        <br />
        Quantità
        <br />
        Importo totale
    </span>,
];
const tableData = [
    {
        title: "Commessa N° 20220630112016-62BD86F02DB78",
        body: {
            headCells: [
                "Busta tari - 1 fg f/r + 1 fg f24",
                <span>
                    tari22
                    <br />
                    Combinato
                </span>,

                <span>
                    Postale
                    <br />
                    Servizi stampati
                    <br />
                    Stampa
                </span>,
                <span>
                    22%
                    <br />
                    0%
                </span>,
                <span>
                    0,15 €
                    <br />
                    1000
                    <br />
                    150,00 €
                </span>,
            ],
            bodyCells: [
                {
                    Busta: "F24",
                    tari22: (
                        <span>
                            0F24
                            <br />
                            Base
                        </span>
                    ),
                    Postale: (
                        <span>
                            Postale
                            <br />
                            Stampa
                        </span>
                    ),
                    iva: (
                        <span>
                            22%
                            <br />
                            0%
                        </span>
                    ),
                    Prezzo: (
                        <span>
                            0,15 €
                            <br />
                            1000
                            <br />
                            150,00 €
                        </span>
                    ),
                },
            ],
        },
    },
];
const ListaProdotti = () => {
    return (
        <Box sx={{ height: "80vh", padding: "15px" }}>
            <Stack
                direction='row'
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#1C2230",
                    marginBottom: "15px",
                }}>
                <Box />
                <Typography variant='h5' sx={{ fontWeight: "bolder" }}>
                    Lista Prodotti
                </Typography>
                <IconButton
                    sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "5px",
                        boxShadow: "0 0 5px #1C2230",
                    }}>
                    <PrintIcon />
                </IconButton>
            </Stack>
            <TableContainer component={Paper} sx={{ height: "70vh" }}>
                <Table aria-label='simple table' stickyHeader>
                    <TableHead sx={{ backgroundColor: "red" }}>
                        <TableRow>
                            {tableHeadCells.map((cellTitle, index) => {
                                return (
                                    <TableCell
                                        sx={{
                                            padding: "12px 16px",
                                            backgroundColor: "#222222",
                                            color: "#FEDA44",
                                            fontSize: "14px",
                                            "&:not(:last-child)": {
                                                borderRight: "solid #fff 1px",
                                            },
                                        }}
                                        align='center'
                                        key={index}>
                                        {cellTitle}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow></TableRow>
                        <TableRow>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ListaProdotti;
