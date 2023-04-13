import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import GitHub from '@mui/icons-material/GitHub';
import Fab from '@mui/material/Fab';

export default function Home() {
  return (
    <div classname="bg-image">
        <CssBaseline />
        <Container maxWidth="md">
          <Box sx={{ height: '100vh', alignItems:'center', display:'flex' }} >
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter URL"
                inputProps={{ 'aria-label': 'Enter URL' }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Container>
        <Fab color="secondary" aria-label="Github" href="https://github.com/chionye">
          <GitHub />
        </Fab>
    </div>
  )
}
