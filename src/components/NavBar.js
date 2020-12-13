import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  style: {
    background: "linear-gradient(to right, #4b06c1, #ce02bd)",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.style}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cortex Copywriter
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
