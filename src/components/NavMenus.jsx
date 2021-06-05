import React, { Component } from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {AppBar, Toolbar, Button, IconButton, Tooltip} from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiMoonWaningCrescent, mdiAccountCircleOutline, mdiLogout, mdiPiggyBank } from '@mdi/js';
import LogoIcon from '../images/logo.svg';
import '../sass/calendar.scss';

export class PublicNavMenu extends Component {
    render() {
        return (
            <AppBar position="sticky" id="public-navbar" elevation={1}>
                <Toolbar>
                    <NavLink exact to="/" activeClassName="not-active">
                        <Icon path={mdiMoonWaningCrescent} size={1.6} rotate={-12} />
                        <img src={LogoIcon} alt="Logo Mis Lunas" className="navbar-logo" />
                    </NavLink>
                    <div className="spacer" />
                    <NavLink to="/login" activeClassName="not-active">
                        <Button color="inherit" endIcon={<Icon path={mdiAccountCircleOutline} size={1}/>} size="large">Iniciar Sesión</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        )
    }
}

export class CalendarMenu extends Component {
    render() {
        return (
            <div className="side-menu">
                <Tooltip title="很好" placement="right" arrow>
                    <div className="menu-item menu-item-1">
                        <IconButton><Icon path={mdiMoonWaningCrescent} size={1.2}/></IconButton>
                    </div>
                </Tooltip>
                <Tooltip title="常常" placement="right" arrow>
                    <div className="menu-item menu-item-2">
                        <IconButton><Icon path={mdiAccountCircleOutline} size={1.2}/></IconButton>
                    </div>
                </Tooltip>
                <Tooltip title="上课" placement="right" arrow>
                <div className="menu-item menu-item-3">
                    <IconButton><Icon path={mdiPiggyBank} size={1.2}/></IconButton>
                </div>
                </Tooltip>
                <Tooltip title="Salir" placement="right" arrow>
                <div className="menu-item menu-item-4">
                    <IconButton><Icon path={mdiLogout} size={1.2}/></IconButton>
                </div>
                </Tooltip>
            </div>
        )
    }
}

function getMenu (path) {
    if (path==="/calendario")
        return <CalendarMenu />
    else
        return <PublicNavMenu />
}

const NavMenus = () => {
    const location = useLocation();
    return (
        getMenu(location.pathname)
    )
}

export default NavMenus
