import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import PersonalInfo from "./components/steps/PersonalInfo";
import { MoreInfo } from "./components/steps/MoreInfo";
import { Review } from "./components/steps/Review";
import { useStyles } from "./useStyle";

function getSteps() {
  return ["Personal Info", "More Info", "Review"];
}

function getStepContent(
  step: number,
  activeStep: number,
  steps: Array<String>,
  setActiveStep: Function
) {
  switch (step) {
    case 0:
      return (
        <PersonalInfo
          activeStep={activeStep}
          steps={steps}
          setActiveStep={setActiveStep}
        />
      );
    case 1:
      return <MoreInfo />;
    case 2:
      return <Review />;
    default:
      return "Unknown step";
  }
}

export const App = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(index, activeStep, steps, setActiveStep)}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};
