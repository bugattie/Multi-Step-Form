import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";

interface FormFieldProps {
  name: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  return (
    <div>
      <Field
        component={TextField}
        name={name}
        label={label}
        variant="outlined"
        fullWidth
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};
