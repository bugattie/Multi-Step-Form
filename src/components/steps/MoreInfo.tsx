import React from "react";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";

import { useStyles } from "../../useStyle";
import FormField from "../fields/FormField";

interface MoreInfoValues {
  city: string;
  number: string;
}

const initialValues: MoreInfoValues = {
  city: "",
  number: "",
};

const schema = Yup.object().shape({
  city: Yup.string().required("Required"),
  number: Yup.number()
    .typeError("That doesn't look like a string")
    .required("Required")
    .integer("A phone number can't include a decimal point")
    .min(10),
});

interface MoreInfoProps {
  activeStep: number;
  steps: Array<String>;
  setActiveStep: Function;
  setFormValues: Function;
  prevValues: Object;
}

const MoreInfo: React.FC<MoreInfoProps> = ({
  activeStep,
  steps,
  setActiveStep,
  setFormValues,
  prevValues,
}) => {
  const classes = useStyles();

  const handleNext = (values: MoreInfoValues) => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    setFormValues(Object.assign(values, prevValues));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  return (
    <div>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={schema}
        onSubmit={handleNext}
      >
        <>
          <Form autoComplete="off">
            <FormField label="City" name="city" />
            <br />
            <br />
            <FormField label="Phone Number" name="number" />
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          </Form>
        </>
      </Formik>
    </div>
  );
};

export default MoreInfo;
