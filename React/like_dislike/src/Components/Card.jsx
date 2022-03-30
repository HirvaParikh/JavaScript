import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { blue } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import useLike from "./useLike";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 50,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  const { like, handleLike, unlike, handleUnLike } = useLike();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            HP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Hirva Parikh"
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/200/300"
        title="Hirva Parikh"
      />
      <CardActions disableSpacing>
        <IconButton onClick={handleLike} aria-label="Like">
          <ThumbUpIcon color={like ? "primary" : ""} />
        </IconButton>
        <IconButton
          onClick={handleUnLike}
          aria-label="Dislike"
          className={classes.expand}
        >
          <ThumbDownIcon color={unlike ? "primary" : ""} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
