export const Styles = () => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  menus: {
    marginTop: 30,
    padding: "0 20px",
    "& a": {
      textDecoration: "none",
      fontSize: 16,
      color: "#9A9CB5",
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      margin: "8px 0",
      "&:hover": {
        backgroundColor: "#EDEEFF",
        borderRadius: 50,
        width: "fit-content",
        "& span": {
          color: "#3843D0",
        },
        "& svg": {
          color: "#E8366C",
        },
      },
      "& svg": {
        paddingRight: 10,
      },
    },
  },
  selected: {
    backgroundColor: "#EDEEFF",
    borderRadius: 50,
    width: "fit-content",
    "& span": {
      color: "#3843D0",
    },
    "& svg": {
      color: "#E8366C",
    },
  },
});
