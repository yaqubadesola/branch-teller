import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import Divider from "../common/Divider";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Step1 = ({ state, handleChange, handlePrev, handleNext }) => {
  const classes = useStyles();
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={8}>
        {renderText({
          label: "Confirm your BVN Details",
          type: "h3",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={4} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "firstName",
            label: "FullName",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "walletID",
            label: "M36 Wallet ID",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
    
      <Grid container spacing={4} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} md={6} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone Number",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email Address",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Box mt={1} mb={2}>
          <Divider>KYC STATUS & BVN CONNECT</Divider>
      </Box>
      <Grid container spacing={10} style={{ marginBottom: "5px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <Card elevation={0} className={classes.root}>
              <CardContent elevation={0}>
        
                <Typography variant="h5" className={classes.pos} component="box" >
                  KYC STATUS &nbsp;&nbsp;<span component="span" 
                  style={{color:"#fff", background:"#35AFEA", borderRadius:"5px",padding:"2px 10px"}} 
                  sx={{ display: 'inline' }}>Upgrade KYC</span><br/>
                </Typography>
                <br/>
                <Typography className={classes.pos} color="textSecondary">
                  M36: Tier 1 (BVN Validated)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  UBN Account: Tier 3 (Savings)
                </Typography>
              </CardContent>
          </Card>    
        </Grid>
        <Grid item xs={12} sm={6} md={6} direction="row"  alignItems="right"  justify="flex-end">
        <Card elevation={0} className={classes.root}>
              <CardContent elevation={0} alignItems="center"  justify="flex-end">
        
                <Typography variant="h5" className={classes.pos} component="box" >
                  BVN CONNECT <br/>
                </Typography>
                <br/>
                <Typography className={classes.pos} color="textSecondary">
                  BVN &nbsp;&nbsp;<CompareArrowsIcon></CompareArrowsIcon>&nbsp;&nbsp;M36: YES
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  BVN &nbsp;&nbsp;<CompareArrowsIcon></CompareArrowsIcon>&nbsp;&nbsp;UBN Account: YES
                </Typography>
              </CardContent>
          </Card> 
        </Grid>
      </Grid>
    
      <Grid container spacing={4} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6} md={6}>
        <Box display="flex"  width={"100%"}  height={60} >
          {renderButton({ label: "Back", variant:"contained",color:"inheritDefault1", custom: false, fullWidth:true, onClick: handlePrev })}
        </Box> 
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Box display="flex"  width={"100%"}  height={60} >
          {renderButton({ label: "Confirm", variant:"contained", custom: true, fullWidth:true, onClick: handleNext })}
        </Box> 
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Step1;
