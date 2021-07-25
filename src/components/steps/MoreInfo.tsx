import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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
  city: Yup.string().required("City is required."),
  FirstName: Yup.number()
    .typeError("That doesn't look like a string")
    .required("Phone number is required")
    .integer("A phone number can't include a decimal point")
    .min(10),
});

export const MoreInfo = () => {
  const submitForm = (values: MoreInfoValues): void => {
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
              <FormField label="City" name="city" />
              <br />
              <FormField label="Phone Number" name="number" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
