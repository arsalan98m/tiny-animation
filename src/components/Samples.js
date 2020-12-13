import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SampleCard from "./SampleCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    paddingTop: "10rem",
    background: "#4b06c1",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  section: {
    display: "flex",
    marginBottom: "2rem",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
      alignItems: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
}));

const Samples = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {/* Section 1 */}
        <Grid item xs={12} md={4} className={classes.section}>
          <SampleCard
            text="Scripted Chatbot"
            image="https://www.cortexcopywriter.com/img/samples/chatbot.jpg"
          />
        </Grid>
        <Grid item xs={12} md={4} className={classes.section}>
          <SampleCard
            text="User Onboarding"
            image="https://www.cortexcopywriter.com/img/samples/speedpix.jpg"
          />
        </Grid>

        <Grid item xs={12} md={4} className={classes.section}>
          <SampleCard
            text="Product Development"
            image="https://www.cortexcopywriter.com/img/samples/startscale.jpg"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Samples;
