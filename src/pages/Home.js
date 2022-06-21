import { makeStyles } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles({
  homePage: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
        This is the main page
    </div>
  );
}

export default Home;