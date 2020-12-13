import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SampleCard({ image, text }) {
  const classes = useStyles();

  const { keyframes, timing } = pulse;

  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      iterations: Infinity,
      duration: 1500,
    },
  });

  return (
    <Card className={classes.root} ref={ref}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            facilis velit doloribus animi in temporibus numquam architecto
            inventore vel error?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
