import React from "react";
import {CssBaseline, Typography, Container} from "@material-ui/core";

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography component={"div"} style={{background: "#cfe8fc", height: "100vh"}}/>
            </Container>
        </React.Fragment>
    )
}