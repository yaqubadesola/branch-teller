import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  input1: {
    height: 50
  },
  input2: {
    height: 200,
    fontSize: "3em"
  },
  grid: {
    height: "100%"
  }
}));
const Step1 = ({ state, handleChange, handleNext }) => {
  
const classes = useStyles();
  return (
    <Paper style={styles.steps}>
      <Box mt={1} mb={10}>
        {renderText({
          label: "Kindly enter your BVN to get Started!",
          type: "h3",
          color: "textPrimary",
          align: "center",
          InputProps:{ classes: { input: classes.input1 } }, 
        })}
      </Box>

      <Grid container direction="column" spacing={0} >
        <Grid item 
              className={classes.grid}
              container
              justifyContent="center"  
              alignItems="center"
              fullWidth
        >
        <Box  display="flex" width={500} height={80} >
          {renderInputField({
            state,
            name: "bvn",
            label: "Enter BVN Number",
            fullWidth:true,
            onChange: handleChange,
          })}
        </Box>
        </Grid>
      </Grid>

      <Grid container component={Box}  justifyContent="center"  alignItems="center" style={{ marginTop: "-10px",marginBottom: "25px" }} mt={2} p={2}>
        <Box display="flex"  width={500} height={60} >
          {renderButton({ label: "Continue", variant:"contained", custom: true, fullWidth:true, onClick: handleNext })}
        </Box>        
      </Grid>
    </Paper>
  );
};

export default Step1;
