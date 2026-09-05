"use client";

import { useState, type FormEvent } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { newsletterSchema } from "@/lib/validations";
import { useApiForm } from "@/hooks/useApiForm";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface NewsletterFormProps {
  /** "light" for use on dark backgrounds (footer); "dark" for light-page use. */
  tone?: "light" | "dark";
}

export default function NewsletterForm({ tone = "dark" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const { status, resultMessage, submit } = useApiForm("/api/newsletter");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) return;

    const success = await submit(parsed.data);
    if (success) setEmail("");
  }

  const isLight = tone === "light";

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack direction="row" spacing={1}>
        <TextField
          size="small"
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={
            isLight
              ? {
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": { bgcolor: "background.paper" },
                }
              : { flexGrow: 1 }
          }
        />
        <PrimaryButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={status === "submitting"}
        >
          Subscribe
        </PrimaryButton>
      </Stack>
      {status === "success" && (
        <Typography variant="body2" sx={{ mt: 1, color: isLight ? "primary.light" : "secondary.dark" }}>
          {resultMessage}
        </Typography>
      )}
      {status === "error" && (
        <Typography variant="body2" sx={{ mt: 1, color: "error.main" }}>
          {resultMessage}
        </Typography>
      )}
    </Box>
  );
}
