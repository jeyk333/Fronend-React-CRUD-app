export const Styles = (theme) => ({
  container: {
    width: "70%",
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
  cardCover: {
    width: "100%",
    overflowY: "auto",
    height: "calc(100vh - 256px)",
    marginTop: 10,
    marginBottom: 86,
  },
  tabSelected: {
    color: "rgba(56, 67, 208, 1) !important",
  },
  tabRoot: {
    color: "rgba(154, 156, 181, 1)",
  },
  indicator: {
    backgroundColor: "rgba(56, 67, 208, 1)",
  },
  tabsRoot: {
    borderBottom: "1px solid rgba(219, 219, 219, 1)",
  },
  link: {
    background: "rgba(56, 67, 208, 1)",
    color: "#fff",
    borderRadius: 10,
    border: "3px solid rgba(33, 43, 128, 1)",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    padding: "5px 18px",
    boxShadow: "0px 2px 0px 0px rgba(33, 43, 128, 1)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  loading: {
    textAlign: "center",
  },
});
