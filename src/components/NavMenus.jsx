import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiMoonWaningCrescent, mdiAccountCircleOutline } from '@mdi/js';
import LogoIcon from '../images/logo.svg';

export class NavMenus extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <NavLink exact to="/" activeClassName="not-active" className="HomeLogo">
                    <Icon path={mdiMoonWaningCrescent} size={1.6} rotate={-12} />
                        <img src={LogoIcon} alt="Logo Mis Lunas" className="NavBarLogo" />
                    </NavLink>
                    <div className="spacer" />
                    <Button color="inherit" endIcon={<Icon path={mdiAccountCircleOutline} size={1}/>} size="large">Iniciar Sesión</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavMenus
