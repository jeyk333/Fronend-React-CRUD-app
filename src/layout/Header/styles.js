export const Styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 38px",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px 0",
      borderBottom: "1px solid rgba(219, 219, 219, 1)",
    },
  },
  contents: {
    display: "flex",
    alignItems: "center",
    width: "15%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  formControl: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 30,
    border: "1px solid #C6C7D4",
    boxShadow: "0px 2px 0px 0px rgba(198, 199, 212, 1)",
    "& .MuiSelect-root": {
      padding: "10px 15px",
      fontSize: 15,
      color: "#c6c7d4",
    },
    "& .MuiInput-underline": {
      "&::before": {
        content: "none",
      },
    },
  },
  searchIcon: {
    color: "gray",
  },
  iconGroup: {
    display: "flex",
    alignItems: "center",
    color: "rgba(217, 218, 227, 1)",
    "& div": {
      display: "flex",
      alignItems: "center",
      marginRight: 25,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  notifyIcon: {
    color: "rgba(154, 156, 181, 1)",
    marginRight: 35,
    width: 28,
    height: 28,
  },
  avatarIcon: {
    color: "rgba(56, 67, 208, 1)",
    width: 40,
    height: 40,
  },
  logo: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
});
