import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: 'red',
    },
    tabs: {
        color: '#ffffff',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {

    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="./">React Navigation Demo</NavLink>
                <NavLink className={classes.tabs} to="./">First</NavLink>
                <NavLink className={classes.tabs} to="./SecondComponent">Second</NavLink>
                <NavLink className={classes.tabs} to="./ThirdComponent">Third</NavLink>
                <NavLink className={classes.tabs} to="./FourthComponent">Fourth</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;