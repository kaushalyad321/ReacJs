import React, { useState } from "react";
import { FormControl, TextField, FormGroup, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
function FormValidationRule() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    phoneno: "",
  });

  const validationSchema = yup.object({
      password: yup
      .string()
      .min(7, " minimum password letter should be 7 !")
      .max(15,'inimum password letter should be 7 !').required("Password is required"),
    phoneno: yup
      .string()
      .min(10, "mobile no is not valid")
      .max(10, "mobile no is not valid!")
      .required("mobile no is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
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
      <FormControl margin="normal" size="small">
        <TextField
          id="password"
          name="password"
          label="Password"
          value={formFields.password}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          onChange={(e) =>
            setFormFields({ ...formFields, password: e.target.value })
          }
          {...formik.getFieldProps("password")}
        />
      </FormControl>
      <FormControl margin="normal" size="small">
        <TextField
          name="phoneno"
          label="Phone No"
          value={formFields.phoneno}
          error={formik.touched.phoneno && formik.errors.phoneno}
          helperText={formik.touched.phoneno && formik.errors.phoneno}
          onChange={(e) =>
            setFormFields({ ...formFields, phoneno: e.target.value })
          }
          {...formik.getFieldProps("phoneno")}
        />
      </FormControl>
     
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </FormGroup>
  );
}

export default FormValidationRule;
