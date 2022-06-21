import { makeStyles } from "@material-ui/styles";
import React from "react";
import Employees from "./Employees/Employees";


const useStyles = makeStyles({
  formInput: {
    paddingLeft: '320px',
    width: '98%'
    
  }
})
function About() {
  const classes = useStyles();
  return (
    <div className={classes.formInput}>
        <Employees />
    </div>
  );
}

export default About;