import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, Stack, Chip } from "@mui/material";
import { Fastfood } from "@mui/icons-material";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";

import theme_admin from "./theme_admin";
import Header_admin from "./Header_admin";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card_helper from "../helper/Card_helper";

const useStyles = makeStyles((theme) => ({
  GridSpacer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 100,
    justifyContent: "center",
  },
  Stack: {
    padding: theme.spacing(2),
    justifyContent: "center",
    color: "black",
  },
  Spacer1: {
    padding: theme.spacing(2),
  },
  Spancer: {
    justifyContent: "flex-end",
  },
}));

export default function Accordion_helper(props) {
  const classes = useStyles();
  const {
    Mobile,
    Firstname,
    Lastname,
    Org_Name,
    isOrg,
    House_No,
    Soi,
    Road,
    Subdistrict,
    District,
    Province,
    ZIP_Code,
  } = props;

  const [accept_help, setAccept_help] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/accept/status/${Mobile}`)
      .then((res) => {
        // console.log("res is ", res.data);
        setAccept_help(res.data);
      })
      .catch((err) => {
        Promise.reject(err);
      });
  }, []);
  console.log("card_helper : ", accept_help);

  return (
    <ThemeProvider theme={theme_admin}>
      <Grid item xs={12}>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            {isOrg ? (
              <Typography
                fontFamily="Kanit"
                sx={{ flexShrink: 0 }}
                style={{ fontSize: "1.2vw", color: "#FFB172" }}
              >
                [องค์กร]&nbsp;:&nbsp;{Org_Name}
              </Typography>
            ) : (
              <Typography
                fontFamily="Kanit"
                style={{ fontSize: "1.2vw", color: "#FFB172" }}
              >
                [บุคคล]&nbsp;:&nbsp;{Firstname}&nbsp;&nbsp;{Lastname}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    fontFamily="Kanit"
                    sx={{ flexShrink: 0 }}
                    style={{ fontSize: "1.2vw", color: "#FFB172" }}
                  >
                    เบอร์โทรศัพท์&nbsp;:&nbsp;{Mobile}
                  </Typography>
                  {isOrg ? (
                    <Typography
                      fontFamily="Kanit"
                      sx={{ flexShrink: 0 }}
                      style={{ fontSize: "1.2vw", color: "#FFB172" }}
                    >
                      ชื่อผู้รับชอบ&nbsp;:&nbsp;{Firstname}&nbsp;&nbsp;
                      {Lastname}
                    </Typography>
                  ) : null}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    fontFamily="Kanit"
                    style={{ fontSize: "1.2vw", color: "#FFB172" }}
                  >
                    ที่อยู่ : &nbsp;&nbsp;&nbsp;{House_No}&nbsp;&nbsp;ซอย&nbsp;
                    {Soi}&nbsp;&nbsp;ถนน&nbsp;
                    {Road}&nbsp;&nbsp;แขวง&nbsp;{Subdistrict}
                    &nbsp;&nbsp;เขต&nbsp;
                    {District}&nbsp;&nbsp;
                    {Province}&nbsp;&nbsp;
                    {ZIP_Code}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
          <hr />
          <AccordionDetails>
            <Grid
              container
              spacing={2}
              justify="center"
              alignItems="center"
              display="block"
            >
              <Box
                ml={2.5}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  fontFamily="Kanit"
                  style={{ color: "#FFB172" }}
                >
                  รายการการช่วยเหลือ
                </Typography>
              </Box>

              {accept_help.map((accepts) => {
                return <Card_helper {...accepts}></Card_helper>;
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </ThemeProvider>
  );
}
