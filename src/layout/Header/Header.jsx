import React, { useState } from "react";
import { withStyles, Select, FormControl, MenuItem } from "@material-ui/core";
import {
  Search,
  Whatshot,
  Stars,
  LocalFlorist,
  AccountCircle,
  NotificationsNoneOutlined,
} from "@material-ui/icons";
import { Styles } from "./styles";
import { DROPDOWN_LIST } from "../../constants";
import Logo from "../../assets/images/mob-logo.png";

const Header = ({ classes }) => {
  const [Value, setValue] = useState(0);
  const [Counts, setCounts] = useState({ hot: 0, star: 0, flower: 0 });
  const { hot, star, flower } = Counts; //Destructuring the Counts state value
  return (
    <div className={classes.root}>
      <img src={Logo} alt="Logo" className={classes.logo} />
      <div className={classes.contents}>
        <FormControl className={classes.formControl}>
          <Select
            labelId="explorar-dropdown"
            id="explorar-dropdown-outlined"
            value={Value}
            onChange={(e) => setValue(e.target.value)}
            label="Explorar"
            fullWidth
          >
            {DROPDOWN_LIST.map((list) => (
              <MenuItem value={list.id} key={list.id}>
                {list.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Search className={classes.searchIcon} />
      </div>
      <div className={classes.iconGroup}>
        <div>
          <Whatshot />
          {hot}
        </div>
        <div>
          <Stars />
          {star}
        </div>
        <div>
          <LocalFlorist />
          {flower}
        </div>
      </div>
      <div className={classes.icons}>
        <NotificationsNoneOutlined className={classes.notifyIcon} />
        <AccountCircle className={classes.avatarIcon} />
      </div>
    </div>
  );
};

export default withStyles(Styles)(Header);
