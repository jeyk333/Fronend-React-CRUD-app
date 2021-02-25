import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./styles";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <SideMenu />
      <div className={classes.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default withStyles(Styles)(Layout);
