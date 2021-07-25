import React from "react";

import DisabledField from "../fields/DisabledField";

interface ReviewProps {
  formValues: Object;
}

const Review: React.FC<ReviewProps> = ({ formValues }) => {
  console.log(formValues);
  return (
    <>
      <DisabledField
        id="firstName"
        label="First Name"
        defaultValue={formValues.firstName}
      />
      <DisabledField
        id="lastName"
        label="Last Name"
        defaultValue={formValues.lastName}
      />
      <DisabledField id="email" label="Email" defaultValue={formValues.email} />
      <DisabledField id="city" label="City" defaultValue={formValues.city} />
      <DisabledField
        id="phone"
        label="Phone"
        defaultValue={formValues.number}
      />
    </>
  );
};

export default Review;
