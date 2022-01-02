import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Container, BottomNavigation } from "@material-ui/core";

export default function Footer() {
    return (
       <div color="primary">
            <Toolbar>
              <Typography >
                © 2019 Kwitter
              </Typography>
            </Toolbar>
        </div>
    )
}