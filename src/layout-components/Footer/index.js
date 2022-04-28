import React, { Fragment } from 'react';

import clsx from 'clsx';

import { Paper, List, ListItem, ListItemText } from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = props => {
  const { footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        className={clsx('app-footer text-black-50', {
          'app-footer--fixed': footerFixed
        })}>
        <div className="app-footer--inner">
          <div className="app-footer--first">
            <List dense className="d-flex align-items-center">
             
            </List>
          </div>
          <div className="app-footer--second">
            <span>Branch Teller Module</span> ©
            2022 - crafted with <span className="text-danger px-1">❤</span> by{' '}
            <a
              href="m36ng.com"
              rel="noopener"
              target="_blank"
              title="Digital Venture">
             Digital Venture
            </a>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed
});
export default connect(mapStateToProps)(Footer);
