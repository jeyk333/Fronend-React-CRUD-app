export const Styles = () => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 38px",
  },
  contents: {
    display: "flex",
    alignItems: "center",
    width: "15%",
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
  },
});
