import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();
  return (
    <>
      <TextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
