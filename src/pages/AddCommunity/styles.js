export const Styles = (theme) => ({
  container: {
    width: "50%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTitle: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 28,
  },
  link: {
    color: "rgba(56, 67, 208, 1)",
    backgroundColor: "#fff",
    borderRadius: 10,
    border: "3px solid rgba(56, 67, 208, 1)",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    padding: "5px 18px",
    boxShadow: "0px 2px 0px 0px rgba(56, 67, 208, 1)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  close: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  form: {
    marginTop: 40,
  },
  fieldWrapper: {
    "& label": {
      display: "block",
      marginBottom: 8,
      fontSize: 14,
      color: "rgba(86, 86, 86, 1)",
      fontWeight: 600,
    },
  },
  field: {
    border: "1px solid rgba(38, 38, 38, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 32,
    "& input": {
      paddingLeft: "10px",
    },
    "& textarea": {
      paddingLeft: "10px",
    },
    "& .MuiInput-underline": {
      "&:before": {
        content: "none",
      },
    },
  },
  button: {
    background: "rgba(56, 67, 208, 1)",
    color: "#fff",
    borderRadius: 10,
    border: "3px solid rgba(33, 43, 128, 1)",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    padding: "5px 18px",
    boxShadow: "0px 2px 0px 0px rgba(33, 43, 128, 1)",
    minWidth: 117,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  buttonCover: {
    textAlign: "right",
  },
  loader: {
    width: 24,
    height: 24,
    color: "#fff",
  },
});
