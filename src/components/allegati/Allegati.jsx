import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AllegatiHeader from './AllegatiHeader';
import AllegatiRightbar from './AllegatiRightbar';
import ListaProdotti from './ListaProdotti';
import AllegatiFooter from './AllegatiFooter';
const Allegati = () => {
  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor:'#F6F5FA'}}  >
    <Grid container  >
      <Grid item xs={12}  >
        <AllegatiHeader/>
      </Grid>
      <Grid item xs={9}  >
        <ListaProdotti/>
      </Grid>
      <Grid item xs={3}  >
        <AllegatiRightbar/>
      </Grid>
     
      <Grid item xs={9} >
        <AllegatiFooter>xs=6 md=8</AllegatiFooter>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Allegati