import React, { Component } from 'react';
import {
    withStyles,
    Grow,
    Paper,
    Icon,
    IconButton,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Manager, Reference, Popper } from 'react-popper';
import _ from 'lodash';
import * as ReactDOM from 'react-dom';
import FuseNavHorizontalGroup from './FuseNavHorizontalGroup';
import FuseNavHorizontalItem from './FuseNavHorizontalItem';
import FuseNavHorizontalLink from './FuseNavHorizontalLink';
import FuseNavBadge from './../FuseNavBadge';

const propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        icon: PropTypes.string,
        children: PropTypes.array,
    }),
};

const defaultProps = {};

const styles = (theme) => ({
    root: {
        '& .list-item-text': {
            padding: '0 0 0 16px',
        },
    },
    button: {
        minHeight: 48,
        '&.open': {
            backgroundColor: 'rgba(0,0,0,.08)',
        },
        '&.dense': {
            padding: '8px 12px 8px 12px',
            minHeight: 40,
            '& .list-item-text': {
                padding: '0 0 0 8px',
            },
        },
    },
    popper: {
        zIndex: 999,
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

class FuseNavHorizontalCollapse extends Component {
    state = {
        open: false,
    };

    handleToggle = _.debounce((open) => {
        if (this.state.open === open) {
            return;
        }
        this.setState({ open });
    }, 150);

    render() {
        const { item, nestedLevel, classes, rights, role, userRole, dense } = this.props;
        const { open } = this.state;

        let newItem = {};
        if (role && role.id === 1) {
            newItem = item;
        } else {
            const { children } = item;
            const selected =
                children &&
                children.filter((child) => {
                    return (
                        rights &&
                        rights.some((r) => {
                            return r.module.id === child.key && r.canview === true;
                        })
                    );
                });
            newItem = Object.assign({}, item, { children: selected });
        }

        if (
            item.auth &&
            (!item.auth.includes(userRole) ||
                (userRole !== 'guest' && item.auth.length === 1 && item.auth.includes('guest')))
        ) {
            return null;
        }

        return (
            <ul className={classNames(classes.root, 'relative pl-0')}>
                <Manager>
                    <Reference>
                        {({ ref }) => (
                            <div ref={ref}>
                                <ListItem
                                    button
                                    onClick={this.handleClick}
                                    className={classNames(
                                        'list-item',
                                        classes.button,
                                        this.state.open && 'open',
                                        dense && 'dense'
                                    )}
                                    onMouseEnter={() => this.handleToggle(true)}
                                    onMouseLeave={() => this.handleToggle(false)}
                                    aria-owns={open ? 'menu-list-grow' : null}
                                    aria-haspopup="true"
                                >
                                    {item.icon && (
                                        <Icon color="action" className="text-16 flex-no-shrink">
                                            {item.icon}
                                        </Icon>
                                    )}
                                    <ListItemText
                                        className="list-item-text"
                                        primary={item.title}
                                        classes={{ primary: 'text-14' }}
                                    />
                                    {item.badge && (
                                        <FuseNavBadge className="ml-8 mr-4" badge={item.badge} />
                                    )}
                                    <IconButton disableRipple className="w-16 h-16 ml-4 p-0">
                                        <Icon className="text-16 arrow-icon">
                                            keyboard_arrow_right
                                        </Icon>
                                    </IconButton>
                                </ListItem>
                            </div>
                        )}
                    </Reference>
                    {ReactDOM.createPortal(
                        <Popper placement="right" eventsEnabled={open} positionFixed>
                            {({ ref, style, placement, arrowProps }) => (
                                <div
                                    ref={ref}
                                    style={{
                                        ...style,
                                        zIndex: 999 + nestedLevel + 1,
                                    }}
                                    data-placement={placement}
                                    className={classNames(classes.popper, {
                                        [classes.popperClose]: !open,
                                    })}
                                >
                                    <Grow
                                        in={open}
                                        id="menu-list-grow"
                                        style={{ transformOrigin: '0 0 0' }}
                                    >
                                        <Paper
                                            onMouseEnter={() => this.handleToggle(true)}
                                            onMouseLeave={() => this.handleToggle(false)}
                                        >
                                            {item.children && (
                                                <ul
                                                    className={classNames(classes.children, 'pl-0')}
                                                >
                                                    {item.children.map((item) => (
                                                        <React.Fragment key={item.id}>
                                                            {item.type === 'group' && (
                                                                <FuseNavHorizontalGroup
                                                                    item={item}
                                                                    nestedLevel={nestedLevel + 1}
                                                                    dense={dense}
                                                                />
                                                            )}

                                                            {item.type === 'collapse' && (
                                                                <NavHorizontalCollapse
                                                                    item={item}
                                                                    nestedLevel={nestedLevel + 1}
                                                                    dense={dense}
                                                                />
                                                            )}

                                                            {item.type === 'item' && (
                                                                <FuseNavHorizontalItem
                                                                    item={item}
                                                                    nestedLevel={nestedLevel + 1}
                                                                    dense={dense}
                                                                />
                                                            )}

                                                            {item.type === 'link' && (
                                                                <FuseNavHorizontalLink
                                                                    item={item}
                                                                    nestedLevel={nestedLevel + 1}
                                                                    dense={dense}
                                                                />
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </ul>
                                            )}
                                        </Paper>
                                    </Grow>
                                </div>
                            )}
                        </Popper>,
                        document.querySelector('#root')
                    )}
                </Manager>
            </ul>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        role: auth.user.data.role,
        userRole: auth.user.data.role.name,
        rights: auth.rights.right.rights,
    };
}

FuseNavHorizontalCollapse.propTypes = propTypes;
FuseNavHorizontalCollapse.defaultProps = defaultProps;

const NavHorizontalCollapse = withStyles(styles, { withTheme: true })(
    withRouter(connect(mapStateToProps)(FuseNavHorizontalCollapse))
);

export default NavHorizontalCollapse;
