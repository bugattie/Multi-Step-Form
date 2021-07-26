import { Button, Typography, Paper } from "@material-ui/core";
import React from "react";

import DisabledField from "../fields/DisabledField";
import { useStyles } from "../../useStyle";

interface ReviewProps {
  values: any;
  activeStep: number;
  steps: Array<String>;
  setActiveStep: Function;
}

const Review: React.FC<ReviewProps> = ({
  values,
  activeStep,
  steps,
  setActiveStep,
}) => {
  const classes = useStyles();
  console.log(values);

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <DisabledField
        id="firstName"
        label="First Name"
        defaultValue={values.firstName}
      />
      <br />
      <br />
      <DisabledField
        id="lastName"
        label="Last Name"
        defaultValue={values.lastName}
      />
      <br />
      <br />
      <DisabledField id="email" label="Email" defaultValue={values.email} />
      <br />
      <br />
      <DisabledField id="city" label="City" defaultValue={values.city} />
      <br />
      <br />
      <DisabledField
        id="number"
        label="Phone number"
        defaultValue={values.number}
      />
      <br />

      {activeStep === steps.length - 1 && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </>
  );
};

export default Review;
