import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    paddingTop: "10rem",
    background: "linear-gradient(to left,rgba(206,2,189,1) 0%, #7522b6)",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sectionContent: {
    marginLeft: "0.8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-around",
    color: "#fff",
    fontSize: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
      alignItems: "space-around",
    },
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {/* Section 1 */}
        <Grid item xs={12} md={6} className={classes.desc}>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className={classes.img}>
              <img
                src="https://www.cortexcopywriter.com/img/services/services-6.svg"
                alt=""
                className={classes.image}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.sectionContent}>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1>UX Writing</h1>
              <p>
                I develop clear and useful text in product interfaces to help
                users reach a specific goal, whether that's completing a form or
                tapping a button. This includes every type of content from
                on-screen help systems, user onboarding and in-app messages to
                push notifications and tooltips.
              </p>
              <ul>
                <li>Design Principles</li>
                <li>ChatBots</li>
                <li>User Research</li>
                <li>Content Style Guide</li>
              </ul>
            </div>
          </div>
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} md={6} className={classes.desc}>
          <div className={classes.sectionContent}>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1>Website Copywriting</h1>
              <p>
                Your website is a dialogue with your audience. I capture the
                essence of your business and communicate it clearly. Carefully
                considered writing and SEO best practices allow me to craft the
                perfect user journey online. Let me draw the map that guides
                users every step of the way from discovery, to consideration, to
                conversion.
              </p>
              <ul>
                <li>Information Architecture</li>
                <li>Wireframes</li>
                <li>Landing Page</li>
                <li>Sales Letter</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className={classes.img}>
              <img
                src="https://www.cortexcopywriter.com/img/services/services-7.svg"
                alt=""
                className={classes.image}
              />
            </div>
          </div>
        </Grid>

        {/* Section 3 */}
        <Grid item xs={12} md={6}>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className={classes.img}>
              <img
                src="https://www.cortexcopywriter.com/img/services/services-5.svg"
                alt=""
                className={classes.image}
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} className={classes.desc}>
          <div className={classes.sectionContent}>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1>Content Writing</h1>
              <p>
                Give your business a competitive edge with powerful content that
                can be targeted to any segment of your audience. No matter how
                large or complex your project, my custom-built solutions
                including articles, eDMs, and case studies will help you
                implement a plan that maximizes your business’s online exposure.
              </p>
              <ul>
                <li>Headlines & Taglines</li>
                <li>Content Strategy</li>
                <li>Blog & Articles</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
