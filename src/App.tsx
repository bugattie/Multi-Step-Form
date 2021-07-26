import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";

import PersonalInfo from "./components/steps/PersonalInfo";
import MoreInfo from "./components/steps/MoreInfo";
import Review from "./components/steps/Review";
import { useStyles } from "./useStyle";

function getSteps() {
  return ["Personal Info", "More Info", "Review"];
}

function getStepContent(
  step: number,
  activeStep: number,
  steps: Array<String>,
  setActiveStep: Function,
  setFormValues: Function,
  formValues: Object
) {
  switch (step) {
    case 0:
      return (
        <PersonalInfo
          activeStep={activeStep}
          steps={steps}
          setActiveStep={setActiveStep}
          setFormValues={setFormValues}
          prevValues={formValues}
        />
      );
    case 1:
      return (
        <MoreInfo
          activeStep={activeStep}
          steps={steps}
          setActiveStep={setActiveStep}
          setFormValues={setFormValues}
          prevValues={formValues}
        />
      );
    case 2:
      return (
        <Review
          values={formValues}
          activeStep={activeStep}
          steps={steps}
          setActiveStep={setActiveStep}
        />
      );
    default:
      return "Unknown step";
  }
}

export const App = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({});
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(
                  index,
                  activeStep,
                  steps,
                  setActiveStep,
                  setFormValues,
                  formValues
                )}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
