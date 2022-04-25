
import React, { Fragment } from 'react';
import FormComponent from "./FormComponent";
import { Grid, Card, CardContent, Button, Divider } from '@material-ui/core';
function NewInvestmentApp() {
  return (
    <Fragment>
      <Grid container spacing={12}>
        <Grid item md={12}>
          <Card className="card-box  border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">                  
                  <FormComponent />;
              </div>              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default NewInvestmentApp;
