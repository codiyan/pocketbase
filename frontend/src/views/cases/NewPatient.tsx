import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Stack,
  Typography,
} from "@mui/joy";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { useNavigate } from "react-router-dom";
import { pb } from "../../services/pocketbase";

const NewPatient = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      // Perform your form submission logic here
      pb.collection("cases")
        .create({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
        })
        .then((res) => {
          setIsLoading(false);
          // Handle success or navigate to another page
          navigate(-1);
        })
        .catch((error) => {
          setIsLoading(false);
          // Handle error
          console.error("Error submitting form:", error);
        });
    },
  });

  const handleClose = () => {
    // go back
    navigate(-1);
  };

  return (
    <Modal open onClose={handleClose}>
      <ModalDialog>
        <ModalClose />
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Add New Case</Typography>
          <Typography level="body-sm">
            Every case represents a patient that you can schedule appointments
            and surgeries for.
          </Typography>
        </Box>
        <Divider />
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="row" spacing={3} sx={{ display: "flex", my: 1 }}>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  error={
                    formik.touched.first_name && formik.errors.first_name
                      ? true
                      : false
                  }
                >
                  <Stack direction="row" spacing={2}>
                    <Input
                      size="sm"
                      placeholder="First name"
                      sx={{ flex: 1 }}
                      type="text"
                      {...formik.getFieldProps("first_name")}
                    />

                    <Input
                      size="sm"
                      placeholder="Last name"
                      sx={{ flex: 1 }}
                      type="text"
                      {...formik.getFieldProps("last_name")}
                    />
                  </Stack>
                  <FormHelperText color="error">
                    {formik.touched.first_name && formik.errors.first_name
                      ? formik.errors.first_name
                      : null}
                  </FormHelperText>
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl
                  sx={{ flexGrow: 1 }}
                  required
                  error={!!formik.errors.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    sx={{ flexGrow: 1 }}
                    {...formik.getFieldProps("email")}
                  />
                  <FormHelperText color="error">
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : null}
                  </FormHelperText>
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <div />
            <Button
              color="primary"
              size="sm"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create"}
            </Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default NewPatient;
