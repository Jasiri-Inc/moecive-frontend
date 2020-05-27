import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Background from "/public/main.jpg";


const useStyles = makeStyles((theme) => ({
    backgroundImage: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
    }
}));

export default function HomePage() {

    const classes = useStyles();

    return(
        <div>
            <img src="/public/main.jpg" alt={}/>
        </div>
    )


}
