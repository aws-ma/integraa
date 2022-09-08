import { alpha, styled } from "@mui/material/styles";
import {
    Button,
    InputBase,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";


//style component
const Input = styled(InputBase)(({ theme }) => ({
    width: "80%",
    "& .MuiInputBase-input": {
        borderRadius: 4,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "100%",
        padding: "10px 12px",
        transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
        ]),
        "&:focus": {
            boxShadow: `${alpha(
                theme.palette.primary.main,
                0.25
            )} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));
const InputHolder = styled(Stack)({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
});
const InputsHolder = styled(Stack)({
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
});
const Label = styled(InputLabel)({
    color: "#1C2230",
});

const Form = () => {
    return (
        <Box
            component={Paper}
            sx={{
                height: "calc(100vh - 140px)",
                borderRadius: " 18px",
                color: "#1C2230",
                maxHeight: "calc(100vh - 140px)",
                overflowY: "auto",
                padding: "30px 20px 20px",
            }}>
            <form>
                <Typography variant='h5' gutterBottom>
                    Anagrafica cliente
                </Typography>
                <InputsHolder spacing={1}>
                    <InputHolder>
                        <Label>Tipologia cliente</Label>
                        <Input placeholder='Seleziona tipologia' />
                    </InputHolder>
                    <InputHolder>
                        <Label>Cliente</Label>
                        <Input placeholder='Seleziona tipologia' />
                    </InputHolder>
                </InputsHolder>

                <Typography variant='h5' gutterBottom>
                    Informazioni generali
                </Typography>
                <InputsHolder spacing={1}>
                    <InputHolder>
                        <Label>Ragione sociale</Label>
                        <Input placeholder='Sogert S.p.a.' />
                    </InputHolder>
                    <InputHolder>
                        <Label>P.IVA</Label>
                        <Input placeholder='IT0123456789' />
                    </InputHolder>
                    <InputHolder>
                        <Label>Codice fiscale</Label>
                        <Input placeholder='IT0123456789' />
                    </InputHolder>
                </InputsHolder>

                <Typography variant='h5' gutterBottom>
                    Informazioni di contatto
                </Typography>
                <InputsHolder spacing={1}>
                    <InputHolder>
                        <Label>Telefono</Label>
                        <Input placeholder='+39 123 456 7890' />
                    </InputHolder>
                    <InputHolder>
                        <Label>Fax</Label>
                        <Input placeholder='+39 051 123402' />
                    </InputHolder>
                    <InputHolder>
                        <Label>E-mail</Label>
                        <Input placeholder='info@sogert.com' />
                    </InputHolder>
                </InputsHolder>

                <Typography variant='h5' gutterBottom>
                    Indirizzo
                </Typography>
                <InputsHolder spacing={1}>
                    <InputHolder>
                        <Label>Indirizzo</Label>
                        <Input placeholder='Via Napoli' />
                    </InputHolder>
                    <InputHolder>
                        <Label>Civico</Label>
                        <Input placeholder='1' />
                    </InputHolder>
                    <InputHolder>
                        <Label>CAP</Label>
                        <Input placeholder='80010' />
                    </InputHolder>
                    <InputHolder>
                        <Label>Cittia</Label>
                        <Input placeholder='Napoli' />
                    </InputHolder>
                    <InputHolder>
                        <Label>Provincia</Label>
                        <Input placeholder='Napoli' />
                    </InputHolder>
                </InputsHolder>

                <Typography variant='h5' gutterBottom>
                    Referente
                </Typography>
                <InputsHolder spacing={1}>
                    <InputHolder sx={{alignItems:'start'}}>
                        <Label>Seleziona ref</Label>
                        <Box sx={{ width: "50%" }}>
                            <Input
                                sx={{ width: "100%" }}
                                placeholder='Inserisci nome cliente'
                            />
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: "#F2DE31",
                                    margin:"5px 5px 0 0",
                                    color: "#252D40",
                                    "&:hover": {
                                        backgroundColor: "#252D40",
                                        color: "#F2DE31",
                                    },
                                    fontSize: ".6rem",
                                    fontWeight: "bolder",
                                }}>
                                contatto 1
                            </Button>
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: "#F2DE31",
                                    margin:"5px 5px 0 0",
                                    color: "#252D40",
                                    "&:hover": {
                                        backgroundColor: "#252D40",
                                        color: "#F2DE31",
                                    },
                                    fontSize: ".6rem",
                                    fontWeight: "bolder",
                                }}>
                                contatto 2
                            </Button>
                        </Box>
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: "#F2DE31",
                                color: "#252D40",
                                "&:hover": {
                                    backgroundColor: "#252D40",
                                    color: "#F2DE31",
                                },
                                fontSize: ".6rem",
                                fontWeight: "bolder",
                            }}>
                            Crea nuovo contatto
                        </Button>
                    </InputHolder>
                </InputsHolder>
                <Stack direction='row' spacing={1} sx={{justifyContent:'flex-end'}}>
                <Button
                            variant='contained'
                            sx={{
                                backgroundColor: "#252D40",
                                color: "#F2DE31",
                                "&:hover": {
                                    backgroundColor: "#F2DE31",
                                    color: "#252D40",
                                },
                                fontSize: ".6rem",
                                fontWeight: "bolder",
                            }}>
                            Annulla
                        </Button>
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: "#F2DE31",
                                color: "#252D40",
                                "&:hover": {
                                    backgroundColor: "#252D40",
                                    color: "#F2DE31",
                                },
                                fontSize: ".6rem",
                                fontWeight: "bolder",
                            }}>
                            Avanti
                        </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default Form;
