import React from "react";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";

import FormField from "../fields/FormField";
import { useStyles } from "../../useStyle";

interface PersonalInfoValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: PersonalInfoValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(4, "First name should be atleast 4 characters."),
  lastName: Yup.string()
    .required("Required")
    .min(4, "Last name should be atleast 4 characters."),
  email: Yup.string().required("Required").email("Invalid email"),
});

interface PersonalInfoProps {
  activeStep: number;
  steps: Array<String>;
  setActiveStep: Function;
  setFormValues: Function;
  prevValues: Object;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  activeStep,
  steps,
  setActiveStep,
  setFormValues,
  prevValues,
}) => {
  const classes = useStyles();

  const handleNext = (values: PersonalInfoValues) => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    setFormValues({ ...prevValues, ...values });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={schema}
      onSubmit={handleNext}
    >
      <>
        <Form autoComplete="off">
          <FormField label="First Name" name="firstName" />
          <br />
          <br />
          <FormField label="Last Name" name="lastName" />
          <br />
          <br />
          <FormField label="Email" name="email" />
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
  );
};

export default PersonalInfo;
