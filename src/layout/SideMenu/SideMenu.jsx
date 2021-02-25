import React from "react";
import { withStyles, Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Styles } from "./styles.js";
import Logo from "../../assets/images/logo.svg";
import { MENUS } from "../../constants";

const SideMenu = ({ classes }) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <img src={Logo} alt="Logo" />
      <div className={classes.menus}>
        {MENUS.map((menu) => (
          <Link to="/" key={menu.id}>
            {menu.icon}
            <span>{menu.title}</span>
          </Link>
        ))}
      </div>
    </Drawer>
  );
};

export default withStyles(Styles)(SideMenu);
