import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Background from "public/image/main.jpg";


const useStyles = makeStyles((theme) => ({
    backgroundImage: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${Background})`,
    }
}));

export default function HomePage() {

    const classes = useStyles();

}
