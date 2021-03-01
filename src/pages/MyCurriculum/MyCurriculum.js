import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../../layout";

const MyCurriculum = ({ location }) => {
  return (
    <Layout path={location && location.pathname}>
      <Typography align="center">Mi plan de estudios</Typography>
    </Layout>
  );
};

export default MyCurriculum;
