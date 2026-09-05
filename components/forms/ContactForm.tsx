"use client";

import { useState, type FormEvent } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { contactSchema } from "@/lib/validations";
import { useApiForm } from "@/hooks/useApiForm";
import FormStatusMessage from "@/components/ui/FormStatusMessage";
import PrimaryButton from "@/components/ui/PrimaryButton";

const INITIAL_FIELDS = { name: "", email: "", message: "", honeypot: "" };

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const { status, resultMessage, submit } = useApiForm("/api/contact");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(fields);

    if (!parsed.success) {
      setFieldError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    setFieldError(null);
    const success = await submit(parsed.data);
    if (success) setFields(INITIAL_FIELDS);
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          label="Your name"
          required
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        />
        <TextField
          label="Email address"
          type="email"
          required
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
        <TextField
          label="Message"
          required
          multiline
          minRows={4}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />

        {/* Honeypot — hidden from real visitors via off-screen styling, not
            display:none, so basic bots that skip hidden fields still fill it in. */}
        <Box
          sx={{ position: "absolute", left: "-9999px" }}
          aria-hidden="true"
        >
          <TextField
            label="Leave this field empty"
            tabIndex={-1}
            autoComplete="off"
            value={fields.honeypot}
            onChange={(e) => setFields({ ...fields, honeypot: e.target.value })}
          />
        </Box>

        <FormStatusMessage
          status={fieldError ? "error" : status}
          message={fieldError ?? resultMessage}
        />

        <PrimaryButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </PrimaryButton>
      </Stack>
    </Box>
  );
}
