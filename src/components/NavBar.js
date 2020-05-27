import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, IconButton, Typography, InputBase, Toolbar} from "@material-ui/core";
import { MenuIcon } from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }


}));


export default function PrimarySearchBar() {

    const classes = useStyles();






    return(
        <div className={classes.grow}>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton
                        edge={"start"}
                        className={classes.menuButton}
                        color={"inherit"}
                        aria-label={"open drawer"}

                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )

}

