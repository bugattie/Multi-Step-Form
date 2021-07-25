import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    label,
    fullWidth: true,
    variant: "standard" as "standard",
    error: false,
    helperText: "",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <TextField {...configTextfield} required />;
};

export default FormField;
