import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "./styles";
import Header from "./Header";
import SideMenu from "./SideMenu";
import MobileSideMenu from "./MobileSideMenu";

const Layout = ({ children, classes, path }) => {
  return (
    <div className={classes.root}>
      <div className={classes.desktopSideMenu}>
        <SideMenu path={path} />
      </div>
      <div className={classes.mobileSideMenu}>
        <MobileSideMenu path={path} />
      </div>
      <div className={classes.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default withStyles(Styles)(Layout);
