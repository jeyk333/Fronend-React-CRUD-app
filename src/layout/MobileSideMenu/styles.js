export const Styles = () => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderTop: "1px solid rgba(219, 219, 219, 1)",
    "& a": {
      "& svg": {
        padding: "20px 10px",
        width: 40,
        height: 40,
        color: "#9A9CB5",
        "&:hover": {
          color: "#E8366C",
          borderTop: "4px solid #3843D0",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
      },
    },
  },
  selected: {
    "& svg": {
      color: "#E8366C !important",
      borderTop: "4px solid #3843D0",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  },
  editIcon: {
    color: "#fff",
    background: "#3843D0",
    position: "fixed",
    bottom: 105,
    right: 20,
    borderRadius: 50,
    boxShadow: "0px 2px 0px #212B80",
    width: 40,
    height: 40,
    padding: 10,
  },
});
