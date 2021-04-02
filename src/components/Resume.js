import React from "react";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience
      </Typography>
      <Box className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017-2020
        </Typography>
        <Box className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Business & Client Manager - New York, NY
          </Typography>
          <Typography variant="body1" align="center">
            286 Madison Dental
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ fontStyle: "italic" }}
          >
            Multi-specialty dental service organization with over 6,000 active
            clients.
          </Typography>
          <Typography variant="subtitle1" align="center">
            Owned the practices’ online web services product. Worked closely
            with top-notch pros in UX and development to make sure the online
            client web product created the impact it was intended to. Improved
            patient (client) experience using insights from CRM (Dentrix) by
            attending to patient feedback and learning from their pain points,
            real-world A/B testing, and incentivizing repeat business. Created
            the “marketing stack” by researching and implementing products and
            services that employ best practice solutions for the healthcare
            space, including Facebook Ads and Yelp optimization.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015-2017
        </Typography>
        <Box className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Product & Client Manager - NYC, Tel Aviv
          </Typography>
          <Typography variant="body1" align="center">
            Atlis Labs Inc.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ fontStyle: "italic" }}
          >
            Online App Platform for real-time, personalized referrals for local
            business discovery.
          </Typography>
          <Typography variant="subtitle1" align="center">
            Collaborated with company co-founders on the initial product with
            the goal of connecting consumers and local businesses in an
            innovative and trustworthy way. Conducted user interviews with local
            business owners to understand pain points and other needs in order
            to establish a business product feature list. Analyzed user data,
            and performed usability tests to continually improve the product.
            Led extensive follow-up effort with business users to identify areas
            for improvement and expansion of product offering.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2012-2014
        </Typography>
        <Box className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            HEAD OF PRODUCT, Digital Dentistry - New Jersey
          </Typography>
          <Typography variant="body1" align="center">
            MIS Implants Technologies LTD
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ fontStyle: "italic" }}
          >
            Industry leader in 3-D printed dental technology (acquired for $375M
            in 2016).
          </Typography>
          <Typography variant="subtitle1" align="center">
            Established a digital dentistry division in the U.S., concentrating
            on 3-D printed solutions that expanded from operations in Israel.
            Disbursed product tutorials to promote the company brand including
            running workshops and training sessions. Instituted and wrote
            product specifications and workflow for prospective department
            employees. Recruited the sales department in the product’s
            specifications with a focus on the advantages of 3-D printing
            devices. Addressed the national sales team on promoting the product
            and service to their clients. Visited with clients nationwide to
            understand pain points of conventional practices, and conducted user
            interviews to gain coveted qualitative data in order to improve the
            user experience, as well as provided clinical training. Conducted
            virtual treatment planning with clients via MIS’s proprietary SaaS,
            successfully road-mapping hundreds of implant cases and leading to
            increased sales and service contracts.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2007-2011
        </Typography>
        <Box className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            University Student - New York, NY
          </Typography>
          <Typography variant="body1" align="center">
            Fordham University
          </Typography>
          <Typography variant="subtitle1" align="center">
            BACHELOR OF ARTS IN COMMUNICATION AND MEDIA (MINOR IN ENGLISH -
            CREATIVE WRITING).
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
