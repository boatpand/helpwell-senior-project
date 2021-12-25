import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme_vic from "./theme_vic";

import logo_white from "./image/logo_white_crop.png";

const useStyles = makeStyles((theme) => ({
  logoImage: {
    width: 120,
    height: 50,
  },
  Header: {
    height: "4rem",
    weight: "100%",
    padding: "0 5%",
    justifyContent: "center",
  },
  spancer: {
    flexGrow: 1,
  },
}));

export default function Header_Vic() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme_vic}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ flexGrow: 1 }}
      >
        <AppBar position="static" className={classes.Header}>
          <Toolbar>
            <Link
              to={{
                pathname: `/victims`,
              }}
            >
              <Typography>
                <img src={logo_white} className={classes.logoImage} />
              </Typography>
            </Link>
            <div className={classes.spancer} />
            <Link
              to={{
                pathname: `/victims`,
              }}
            >
              <Button fontFamily="Kanit" color="inherit">
                ความต้องการ
              </Button>
            </Link>
            <Link
              to={{
                pathname: `/victims/map`,
              }}
            >
              <Button color="inherit">map</Button>
            </Link>
            <Typography>|&nbsp;</Typography>
            <Link
              to={{
                pathname: `/victims/profile`,
              }}
            >
              <Button color="inherit">Profile</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
