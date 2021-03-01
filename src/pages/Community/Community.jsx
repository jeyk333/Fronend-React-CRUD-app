import React, { useState, useEffect } from "react";
import { withStyles, Typography, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import useInfiniteScroll from "@closeio/use-infinite-scroll";
import { Styles } from "./styles";
import Layout from "../../layout";
import CommunityCards from "../../components/CommunityCards";
import { getCommunities } from "../../store/community/action";

const Community = ({
  classes,
  location,
  communities,
  getCommunities,
  hasMore,
}) => {
  const [Value, setValue] = useState("POPULARES");
  const [page, loaderRef, scrollerRef] = useInfiniteScroll({ hasMore });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getCommunities(page + 1);
  }, [page]);

  return (
    <Layout path={location && location.pathname}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography className={classes.containerTitle}>
            Comunidad Luca
          </Typography>
          <Link to="/add-community" className={classes.link}>
            NUEVA PREGUNTA
          </Link>
        </div>
        <Tabs
          value={Value}
          onChange={handleChange}
          aria-label="status-tabs"
          classes={{ root: classes.tabsRoot, indicator: classes.indicator }}
        >
          <Tab
            label="POPULARES"
            value="POPULARES"
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected,
              textColorInherit: classes.tabDefault,
            }}
          />
          <Tab
            label="NUEVOS"
            value="NUEVOS"
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected,
              textColorInherit: classes.tabDefault,
            }}
          />
          <Tab
            label="SEGUIDOS"
            value="SEGUIDOS"
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected,
              textColorInherit: classes.tabDefault,
            }}
          />
        </Tabs>
        <div className={classes.cardCover} ref={scrollerRef}>
          {Value === "POPULARES" && <CommunityCards data={communities} />}
          {Value === "NUEVOS" && <CommunityCards data={communities} />}
          {Value === "SEGUIDOS" && <CommunityCards data={communities} />}
          {hasMore && (
            <div ref={loaderRef} className={classes.loading}>
              Loading…
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  communities: state.community.Communities,
  hasMore: state.community.HasMore,
});
const mapDispatchToProps = (dispatch) => ({
  getCommunities: (page) => dispatch(getCommunities(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(Community));
