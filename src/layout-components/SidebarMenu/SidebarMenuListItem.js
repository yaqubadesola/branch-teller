import React, { useState, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { ListItem, Button, Collapse } from '@material-ui/core';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import '../Sidebar/sideBar.css';
const CustomRouterLink = forwardRef(function CustomLink(props, ref) {
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  );
});

const SidebarMenuListItem = props => {
  const {
    title,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
    label: Label,
    ...rest
  } = props;

  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  let paddingLeft = 15;

  if (depth > 0) {
    paddingLeft = 16 + 20 * depth;
  }
  const style = {
    paddingLeft,
    color:"#fff",
    background:"none",
    hover: {
      "&:hover": {
        color: '#00',
      }
    }
  };

  if (children) {
    return (
      <ListItem
        {...rest}
        className={clsx('app-sidebar-item', className)}
        disableGutters>
        <Button
          color="primary"
          className={clsx('app-sidebar-button', { active: open })}
          onClick={handleToggle}
          style={style}>
          <span className='textlink'>{title}</span>
          {open ? (
            <ExpandLessIcon style={{ fontSize: 80 }} className="sidebar-expand-icon" color="inherit" />
          ) : (
            <ExpandLessIcon
              style={{ fontSize: 80 }}
              className="sidebar-expand-icon sidebar-expand-icon-rotate"
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        {...rest}
        className={clsx('app-sidebar-item', className)}
        disableGutters>
        <Button
          activeClassName="active-item"
          color="primary"
          disableRipple
          variant="text"
          className={clsx('app-sidebar-button-wrapper', `depth-${depth}`)}
          component={CustomRouterLink}
          exact
          style={style}
          to={href}>
          {Icon && <Icon className="app-sidebar-icon" style={{padding:"5px"}} />}
          {title}
          {Label && (
            <span className="menu-item-label">
              <Label />
            </span>
          )}
        </Button>
      </ListItem>
    );
  }
};

SidebarMenuListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

SidebarMenuListItem.defaultProps = {
  depth: 0,
  open: false
};

export default SidebarMenuListItem;
