import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../../layout";

const HelpCenter = ({ location }) => {
  return (
    <Layout path={location && location.pathname}>
      <Typography align="center">Centro de ayuda</Typography>
    </Layout>
  );
};

export default HelpCenter;
