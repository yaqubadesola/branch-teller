import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IconButton, Box } from '@material-ui/core';

import projectLogo from '../../assets/images/m36.svg';

const HeaderLogo = props => {
  return (
    <Fragment>
      <div className={clsx('app-header-logo', {})}>
        <Box
          className="header-logo-wrapper"
          title="Branch Module Teller">
          <Link to="/DashboardDefault" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="">
              <img
                className="app-header-logo-img"
                alt="Branch Teller Admin"
                src={projectLogo}
              />
            </IconButton>
          </Link>&nbsp;&nbsp;&nbsp;
          <Box className="header-logo-text">M36</Box>&nbsp;&nbsp;&nbsp;
          <Box component="div" style={{color:"yellow", background:"black", borderRadius:"5px",padding:"0px 5px"}} sx={{ display: 'inline' }}>Teller</Box>
        </Box>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
