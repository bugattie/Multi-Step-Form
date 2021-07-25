import React from "react";

import TextField from "@material-ui/core/TextField";

interface DisabledFieldProps {
  id: string;
  label: string;
  defaultValue: string;
}

const DisabledField: React.FC<DisabledFieldProps> = ({
  id,
  label,
  defaultValue,
}) => {
  return (
    <TextField
      disabled
      id={id}
      label={label}
      defaultValue={defaultValue}
      fullWidth
    />
  );
};

export default DisabledField;
