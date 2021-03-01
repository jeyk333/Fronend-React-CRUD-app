export const Styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  content: {
    backgroundColor: "#F1F2F8",
    height: "100vh",
    width: "100%",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#fff",
    },
  },
  mobileSideMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      background: "#fff",
      zIndex: 1,
      minHeight: 64,
    },
  },
  desktopSideMenu: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});
