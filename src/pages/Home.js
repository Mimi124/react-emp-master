import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";


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
        <h1>This is the Dashboard</h1>

        <h4>
    Here is a link to view  and add Employees
    <Link to="/table"> Click Me </Link>
    </h4>
    </div>
  );
}

export default Home;