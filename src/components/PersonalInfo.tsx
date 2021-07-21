import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormField } from "./FormField";

interface PersonalInfoVaues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: PersonalInfoVaues = {
  firstName: "",
  lastName: "",
  email: "",
};

const schema = Yup.object().shape({
  FirstName: Yup.string()
    .required("First name is required")
    .min(4, "First name should be atleast 4 characters."),
  LastName: Yup.string()
    .required("First name is required")
    .min(4, "Last name should be atleast 4 characters."),
  Email: Yup.string().required().email(),
});

export const PersonalInfo = () => {
  const submitForm = (values: PersonalInfoVaues): void => {
    console.log(JSON.stringify(values));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitForm}
      >
        {({ dirty, isValid }) => {
          return (
            <Form autoComplete="off">
              <FormField label="First Name" name="FirstName" />
              <br />
              <FormField label="Last Name" name="LastName" />
              <br />
              <FormField label="Email" name="Email" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
