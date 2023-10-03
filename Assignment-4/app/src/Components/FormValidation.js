import React, { useState } from "react";
import { FormControl, TextField, FormGroup, Button } from "@mui/material";
import { useFormik } from "formik";
import isEmailValidator from 'validator/lib/isEmail';

import * as yup from "yup";
function FormValidation() {
  const [formFields, setFormFields] = useState({
    email: "",
    name:''
  });

  const validationSchema = yup.object({
   
    name: yup
      .string()
       .min(2,"Name is too short!")
      .max(13, "Name is too large!")
      .required("Name is Required"),
    email: yup.string().email("Invalid email").required("Email is Required").test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new yup.ValidationError("Invalid value"))
  
  });

  const handleSubmit = () => {
    console.log(formFields);
  };

  const formik = useFormik({
    initialValues: {
      name:'' ,
      email: ""
    },
    validationSchema: validationSchema,
  });

  return (
    <FormGroup>
      
      <FormControl margin="normal" size="small">
        <TextField
          id="name"
          name="name"
          label="name"
          value={formFields.name}
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
          onChange={(e) =>
            setFormFields({ ...formFields, name: e.target.value })
          }
          {...formik.getFieldProps("name")}
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

export default FormValidation;
