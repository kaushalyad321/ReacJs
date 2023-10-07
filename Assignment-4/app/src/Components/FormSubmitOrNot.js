import React, { useState } from "react";
import { FormControl, TextField, FormGroup, Button } from "@mui/material";
import { useFormik } from "formik";
import isEmailValidator from 'validator/lib/isEmail';
import * as yup from "yup";
function FormSubmitOrNot() {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(2, "FirstName Too Short!")
      .max(20, "FirstName Too Long!")
      .required("FirstName is Required"),
    lastName: yup
      .string()
      .min(2, "LastName Too Short!")
      .max(20, "LastName Too Long!")
      .required("LastName is Required"),
    email: yup.string().email("Invalid email").required("Email is Required").test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new yup.ValidationError("Invalid value")),
  });

  const handleSubmit = () => {
    console.log(formFields);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <FormGroup>
      <FormControl margin="normal" size="small">
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formFields.firstName}
          error={formik.touched.firstName && formik.errors.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
          onChange={(e) =>
            setFormFields({ ...formFields, firstName: e.target.value })
          }
          {...formik.getFieldProps("firstName")}
        />
      </FormControl>
      <FormControl margin="normal" size="small">
        <TextField
          name="lastName"
          label="Last Name"
          value={formFields.lastName}
          error={formik.touched.lastName && formik.errors.lastName}
          helperText={formik.touched.lastName && formik.errors.lastName}
          onChange={(e) =>
            setFormFields({ ...formFields, lastName: e.target.value })
          }
          {...formik.getFieldProps("lastName")}
        />
      </FormControl>
      <FormControl margin="normal" size="small">
        <TextField
          name="email"
          label="Email"
          value={formFields.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onChange={(e) =>
            setFormFields({ ...formFields, email: e.target.value })
          }
          {...formik.getFieldProps("email")}
        />
      </FormControl>
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </FormGroup>
  );
}

export default FormSubmitOrNot;