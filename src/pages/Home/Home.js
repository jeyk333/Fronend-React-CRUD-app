import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../../layout";

const Home = ({ location }) => {
  return (
    <Layout path={location && location.pathname}>
      <Typography align="center">Inicio</Typography>
    </Layout>
  );
};

export default Home;
