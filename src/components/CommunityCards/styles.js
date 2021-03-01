export const Styles = (theme) => ({
  card: {
    display: "flex",
    padding: "16px 10px",
    background: "rgba(255, 255, 255, 0.2)",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      padding: "16px 10px 0",
    },
  },
  cardRoot: {
    borderBottom: "1px solid rgba(219, 219, 219, 1)",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    marginTop: 16,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  root: {
    marginTop: 10,
    marginBottom: 86,
  },
  avatar: {
    marginRight: 32,
    width: 56,
    height: 56,
    [theme.breakpoints.down("sm")]: {
      marginRight: 15,
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: "rgba(79, 79, 79, 1)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 520,
    [theme.breakpoints.down("sm")]: {
      width: 220,
    },
  },
  publication: {
    fontSize: "13px",
    color: "rgba(130, 130, 130, 1)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 520,
    [theme.breakpoints.down("sm")]: {
      width: 220,
    },
  },
  icons: {
    marginRight: 20,
    width: 20,
    height: 20,
    color: "#9A9CB5",
  },
  details: {
    color: "#828282",
    fontSize: 13,
    "& span": {
      color: "#3843D0",
    },
  },
  chatCounts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 7,
    "& img": {
      marginRight: 8,
    },
    "& p": {
      fontSize: 14,
      color: "rgba(154, 156, 181, 1)",
    },
  },
  verticalItems: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  share: {
    color: "#9A9CB5",
    width: 20,
    height: 20,
    marginRight: 22,
  },
  star: {
    color: "#9A9CB5",
    width: 20,
    height: 20,
  },
  cardDetails: {
    flex: 1,
  },
  cardMobFooter: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      marginTop: 16,
    },
  },
});
