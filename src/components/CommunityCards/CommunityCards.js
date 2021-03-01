import React from "react";
import { withStyles, Avatar, Typography } from "@material-ui/core";
import {
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  ShareOutlined,
  StarBorderOutlined,
} from "@material-ui/icons";
import { Styles } from "./styles";
import Chat from "../../assets/images/chat.svg";
import { colorGenerator } from "../../utils";

const CommunityCards = ({ classes, data }) => {
  return (
    // <div className={classes.root}>
    <>
      {data &&
        data.map((item, index) => (
          <div className={classes.cardRoot} key={item.id}>
            <div className={classes.card}>
              <Avatar
                className={classes.avatar}
                style={{
                  background: colorGenerator(),
                }}
              />
              <div className={classes.cardDetails}>
                <Typography className={classes.title}>{item.title}</Typography>
                <Typography className={classes.publication}>
                  {item.publication}
                </Typography>
                <div className={classes.cardFooter}>
                  <ThumbUpAltOutlined className={classes.icons} />
                  <ThumbDownAltOutlined className={classes.icons} />
                  <Typography className={classes.details}>
                    Pregunta juan.c23 en <span>Matemáticas 6º</span>
                  </Typography>
                </div>
              </div>
              <div className={classes.verticalItems}>
                <div className={classes.chatCounts}>
                  <img src={Chat} alt="Chat" /> <p>{25 * index + 1}</p>
                </div>
                <div>
                  <ShareOutlined className={classes.share} />
                  <StarBorderOutlined className={classes.star} />
                </div>
              </div>
            </div>
            <div className={classes.cardMobFooter}>
              <ThumbUpAltOutlined className={classes.icons} />
              <ThumbDownAltOutlined className={classes.icons} />
              <Typography className={classes.details}>
                Pregunta juan.c23 en <span>Matemáticas 6º</span>
              </Typography>
              <div className={classes.chatCounts}>
                <img src={Chat} alt="Chat" /> <p>{25 * index + 1}</p>
              </div>
              <StarBorderOutlined className={classes.star} />
            </div>
          </div>
        ))}
    </>
  );
};

export default withStyles(Styles)(CommunityCards);
