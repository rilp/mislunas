import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

export class NavMenus extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6">
                    News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavMenus
