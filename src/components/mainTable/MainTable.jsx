import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, 
} from "@mui/material";
import Azioni from "./Azioni";
import Stato from "./Stato";
import { tableHeadCells, tableData } from "./tableData.js";
//style components
const StyledTableCell = styled(TableCell)({
    position: "relative",
    "&::after": {
        position: "absolute",
        content: "''",
        top: "50%",
        right: 0,
        transform: " translateY(-50%)",
        width: "2px",
        height: "23px",
        backgroundColor: "#fff",
    },
});
const MainTable = ({ handleDrawer }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
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
                    {tableData.map((row, index) => {
                        return (
                            <TableRow
                                key={index}
                                sx={{
                                    backgroundColor:
                                        index % 2 === 0 ? "#F1F1F1" : "#DBDBDB",
                                    "&:last-child td,&:last-child th": {
                                        border: 0,
                                    },
                                }}>
                                <StyledTableCell>
                                    <Azioni />
                                </StyledTableCell>
                                <StyledTableCell>
                                    {row.NumeroPreventivo}
                                </StyledTableCell>
                                <TableCell>{row.Agenzia}</TableCell>
                                <TableCell>{row.Cliente}</TableCell>
                                <TableCell>
                                    <Stack
                                        sx={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            minWidth: "170px",
                                        }}>
                                        <Stato />
                                    </Stack>
                                </TableCell>
                                <TableCell>{row.CreatoDa}</TableCell>
                                <TableCell>{row.Agente}</TableCell>
                                <TableCell>{row.DataCreazione}</TableCell>
                                <TableCell>{row.ApprovaDa}</TableCell>
                                <TableCell>{row.DataApprovazione}</TableCell>
                                <TableCell>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            backgroundColor: "#F2DE31",
                                            color: "#1C2230",
                                            "&:hover": {
                                                backgroundColor: "#1C2230",
                                                color: "#F2DE31",
                                            },
                                        }}
                                        onClick={handleDrawer}>
                                        Allegati
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <Stack
            direction='row'
                sx={{
                    width: "100%",
                    height: "40px",
                    backgroundColor: "#222222",
                    justifyContent:'center',
                    alignItems:'center',
                    color:'#F2DE31'
                }}>
                Made With <FavoriteIcon sx={{color:"red"}}/> By Aws Maarouf 
            </Stack>
        </TableContainer>
    );
};

export default MainTable;
