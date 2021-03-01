import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../../layout";

const Quizzes = ({ location }) => {
  return (
    <Layout path={location && location.pathname}>
      <Typography align="center">Quizzes</Typography>
    </Layout>
  );
};

export default Quizzes;
