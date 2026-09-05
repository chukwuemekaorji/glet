"use client";

import { useState, type FormEvent } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { partnerSchema, PARTNERSHIP_TYPES } from "@/lib/validations";
import { useApiForm } from "@/hooks/useApiForm";
import FormStatusMessage from "@/components/ui/FormStatusMessage";
import PrimaryButton from "@/components/ui/PrimaryButton";

const INITIAL_FIELDS = {
  organisationName: "",
  contactName: "",
  email: "",
  phone: "",
  partnershipType: "" as (typeof PARTNERSHIP_TYPES)[number] | "",
  message: "",
  honeypot: "",
};

export default function PartnerForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const { status, resultMessage, submit } = useApiForm("/api/partner");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const parsed = partnerSchema.safeParse(fields);

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
          label="Organisation name"
          required
          value={fields.organisationName}
          onChange={(e) => setFields({ ...fields, organisationName: e.target.value })}
        />
        <TextField
          label="Your name"
          required
          value={fields.contactName}
          onChange={(e) => setFields({ ...fields, contactName: e.target.value })}
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
          <TextField
            label="Email address"
            type="email"
            required
            fullWidth
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
          />
          <TextField
            label="Phone (optional)"
            fullWidth
            value={fields.phone}
            onChange={(e) => setFields({ ...fields, phone: e.target.value })}
          />
        </Stack>
        <TextField
          select
          label="Type of partnership"
          required
          value={fields.partnershipType}
          onChange={(e) =>
            setFields({
              ...fields,
              partnershipType: e.target.value as (typeof PARTNERSHIP_TYPES)[number],
            })
          }
        >
          {PARTNERSHIP_TYPES.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Tell us more"
          required
          multiline
          minRows={4}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />

        <Box sx={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
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
          color="secondary"
          size="large"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Submit Inquiry"}
        </PrimaryButton>
      </Stack>
    </Box>
  );
}
