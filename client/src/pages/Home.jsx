/** @format */

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import GitHub from "@mui/icons-material/GitHub";
import Fab from "@mui/material/Fab";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import { Api } from "../api/Api";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);

  const handleClick = () => {
    setLoading(true);
    const data = { url };
    Api(data)
      .then(function (response) {
        setLoading(false);
        setOpen(true);
        setError(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div classname='bg-image'>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box sx={{ height: "100vh", alignItems: "center", display: "flex" }}>
          <div className='full-width'>
            <Paper
              component='form'
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Enter URL'
                inputProps={{ "aria-label": "Enter URL" }}
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
              <IconButton
                color='primary'
                sx={{ p: "10px" }}
                aria-label='directions'
                onClick={handleClick}
                disabled={loading ? true : false}>
                {loading ? <CircularProgress size={24} /> : <SearchIcon />}
              </IconButton>
            </Paper>
            {open ? (
              <Alert
                action={
                  <IconButton
                    aria-label='close'
                    color='inherit'
                    size='small'
                    onClick={() => {
                      setOpen(false);
                    }}>
                    <CloseIcon fontSize='inherit' />
                  </IconButton>
                }
                sx={{ mb: 2, mt:2 }}>
                {error}
              </Alert>
            ) : null}
          </div>
        </Box>
      </Container>
      <Fab
        color='primary'
        aria-label='Github'
        href='https://github.com/chionye'>
        <GitHub />
      </Fab>
    </div>
  );
}
