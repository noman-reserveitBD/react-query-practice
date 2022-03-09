import React from "react";
import Appbar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Appbar>
        <Toolbar>
          <Stack spacing={2} direction="row">
            <Typography component={Link} to="/">
              Posts with axios
            </Typography>
            <Typography component={Link} to="postwithrq">
              Posts with RQ
            </Typography>
            <Typography component={Link} to="suprherosWithRQ">
              SuperHeros with RQ
            </Typography>
            <Typography component={Link} to="users">
              Users
            </Typography>
          </Stack>
        </Toolbar>
      </Appbar>
      <div style={{ marginBottom: "10rem" }} />
    </>
  );
};

export default Header;
