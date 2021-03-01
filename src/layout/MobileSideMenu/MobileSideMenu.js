import React from "react";
import { withStyles } from "@material-ui/core";
import { BorderColor } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants";
import { Styles } from "./styles";

const MobileHeader = ({ classes, path }) => {
  let isAdd = path === "/add-community";
  return (
    <>
      <div className={classes.root}>
        {MENUS.map((menu) => (
          <Link
            to={menu.link}
            key={menu.id}
            className={path === menu.link ? classes.selected : ""}
          >
            {menu.icon}
          </Link>
        ))}
      </div>
      {isAdd && (
        <Link to="/add-community">
          <BorderColor className={classes.editIcon} />
        </Link>
      )}
    </>
  );
};

export default withStyles(Styles)(MobileHeader);
