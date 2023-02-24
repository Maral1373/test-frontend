import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useFormControls } from "../utils/ContactFormControls";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

function Contact() {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <Container component="main" sx={{ my: 0, mt: 20 }} maxWidth="xl">
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              sx={{ pb: 3 }}
              key={index}
              onChange={handleInputValue}
              onBlur={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              error={errors[inputFieldValue.name]}
              multiline={inputFieldValue.multiline ?? false}
              fullWidth
              rows={inputFieldValue.rows ?? 1}
              autoComplete="none"
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
            />
          );
        })}
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={!formIsValid()}
        >
          Send Message
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
