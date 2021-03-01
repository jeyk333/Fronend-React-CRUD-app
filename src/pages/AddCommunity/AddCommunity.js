import React, { useState, useEffect } from "react";
import {
  withStyles,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Styles } from "./styles";
import Layout from "../../layout";
import { postCommunity, resetState } from "../../store/community/action";
import history from "../../utils/history";

const AddCommunity = ({
  classes,
  postCommunity,
  loading,
  success,
  resetState,
  location,
}) => {
  const [Title, setTitle] = useState("");
  const [Publication, setPublication] = useState("");
  const [IsSubmitted, setIsSubmitted] = useState(false);

  //To handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (Title && Publication) {
      let data = {
        title: Title,
        publication: Publication,
      };
      postCommunity(data);
    }
  };

  useEffect(() => {
    if (success) {
      resetState();
      setIsSubmitted(false);
      history.push("/");
    }
  }, [success]);

  return (
    <Layout path={location && location.pathname}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography className={classes.containerTitle}>
            Haz una pregunta
          </Typography>
          <Link to="/" className={classes.link}>
            CANCELAR
          </Link>
          <Link to="/" className={classes.close}>
            <Close />
          </Link>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.fieldWrapper}>
            <label htmlFor="community-title">Título de publicación</label>
            <TextField
              placeholder="Escribe tu título aquí"
              id="community-title"
              className={classes.field}
              fullWidth
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              helperText={IsSubmitted && !Title && "Value is required"}
              error={IsSubmitted && !Title}
            />
          </div>
          <div className={classes.fieldWrapper}>
            <label htmlFor="community-publication">Publicación</label>
            <TextField
              placeholder="Escribe tu publicación aquí"
              id="community-publication"
              className={classes.field}
              fullWidth
              multiline
              rows="8"
              value={Publication}
              onChange={(e) => setPublication(e.target.value)}
              helperText={IsSubmitted && !Publication && "Value is required"}
              error={IsSubmitted && !Publication}
            />
          </div>
          <div className={classes.buttonCover}>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress className={classes.loader} />
              ) : (
                "PUBLICAR"
              )}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

//To get state data from store
const mapStateToProps = (state) => ({
  loading: state.community.PostLoading,
  success: state.community.PostSuccess,
});

//To call a action to store
const mapDispatchToProps = (dispatch) => ({
  postCommunity: (data) => dispatch(postCommunity(data)),
  resetState: () => dispatch(resetState()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(AddCommunity));
