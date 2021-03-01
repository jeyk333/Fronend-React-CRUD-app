import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../../layout";

const MyCourses = ({ location }) => {
  return (
    <Layout path={location && location.pathname}>
      <Typography align="center">Mis cursos</Typography>
    </Layout>
  );
};

export default MyCourses;
