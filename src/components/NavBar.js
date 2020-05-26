import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import {AppBar, Button, Typography, IconButton} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";


const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    menuButton: {
        marginRight: theme.spacing(1),
    },

    title: {
        flexGrow: 1
    },


}));


const NavBar = () => {

    const classes = useStyle();

    return (
        <div>

            <AppBar position={"static"} color={"primary"}>
                <Toolbar>
                    <IconButton edge={"start"} className={classes.menuButton} color={"primary"} aria-label={"menu"}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant={"h6"} className={classes.title}>
                        News
                    </Typography>
                    <Button color={"inherit"}> Login </Button>
                </Toolbar>
            </AppBar>


        </div>
    )
}

export default NavBar;