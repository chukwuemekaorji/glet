import Alert from "@mui/material/Alert";
import type { FormStatus } from "@/hooks/useApiForm";

interface FormStatusMessageProps {
  status: FormStatus;
  message: string;
}

// Renders nothing until a form has actually succeeded or failed — avoids
// every form component repeating the same conditional.
export default function FormStatusMessage({ status, message }: FormStatusMessageProps) {
  if (status !== "success" && status !== "error") return null;

  return (
    <Alert severity={status === "success" ? "success" : "error"} sx={{ borderRadius: 3 }}>
      {message}
    </Alert>
  );
}
