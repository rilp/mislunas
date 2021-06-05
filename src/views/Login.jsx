import React from 'react'
import { Card, Container, Box, Button, InputLabel, InputAdornment, OutlinedInput, FormControl } from '@material-ui/core'
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiLockOutline, mdiFacebook } from '@mdi/js';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <main>
        <Container>
            <Card id="login-card">
                <Box px={4} py={2}>
                    <Button variant="contained" className="btn-fb-login" size="large" startIcon={<Icon path={mdiFacebook} size={0.8} />}>Iniciar sesión con Facebook</Button>
                    <div className="o-divider"><span>O</span></div>
                    <form noValidate autoComplete="off">
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="adornment-email">Tu email</InputLabel>
                        <OutlinedInput
                            id="adornment-email"
                            endAdornment={
                            <InputAdornment position="end">
                                <Icon path={mdiEmailOutline} size={1} color="#999999" />
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="adornment-password"
                            type='password'
                            endAdornment={
                            <InputAdornment position="end">
                                <Icon path={mdiLockOutline} size={1} color="#999999" />
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <NavLink exact to="/calendario">
                        <Button variant="contained" color="secondary" size="large">Iniciar Sessión</Button>
                    </NavLink>
                    <Button color="secondary" className="password-reset">¿Olvidaste tu contraseña?</Button>
                    </form>
                </Box>
                <Box px={4} py={2} className="gray-zone">
                    <div className="subtitle">¿Aún no tienes tu cuenta en Mis Lunas?</div>
                    <Button variant="outlined" color="primary" size="large">Crear Cuenta</Button>
                </Box>
            </Card>
        </Container>
        </main>
    )
}

export default Login
