import { Grid } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    paddingTop: "10rem",
    background: "linear-gradient(to right, #4b06c1, #ce02bd)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "red",
  },
  desc: {
    color: "#fff",
    padding: "2rem",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  featuredImage: {
    position: "absolute",
  },

  btn: {
    background: "linear-gradient(to bottom, #23ffdb, #1b5dbf)",
    color: "#fff",
    padding: "0.8rem",
    borderRadius: "20px",
    outline: "none",
    textAlign: "center",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
}));

const Header = () => {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateY(-50px)" },
      { transform: "translateY(10px)" },
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.desc}>
          <div className={classes.item}>
            <h1>
              CORTEX <br />
              COPYWRITER
            </h1>
            <p style={{ fontSize: "2rem", textAlign: "justify" }}>
              Enhance your communications with psychology-based copywriting and
              UX writing
            </p>
            <button className={classes.btn}>Send a message</button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.imageContainer}>
            <img
              src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg"
              alt="brain imahe"
              className={classes.brain}
              ref={ref}
            />

            <img
              src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg"
              alt="featured logo"
              className={classes.featuredImage}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
