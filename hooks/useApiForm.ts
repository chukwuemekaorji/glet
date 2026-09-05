"use client";

// Shared submit/status logic for every form on the site (contact, partner,
// newsletter) so each form component only has to manage its own fields —
// not reimplement fetch/error/success handling three times.
import { useState } from "react";

export type FormStatus = "idle" | "submitting" | "success" | "error";

interface ApiResponse {
  success: boolean;
  message: string;
}

export function useApiForm(endpoint: string) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [resultMessage, setResultMessage] = useState("");

  async function submit(payload: unknown): Promise<boolean> {
    setStatus("submitting");
    setResultMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: ApiResponse = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setResultMessage(data.message || "Something went wrong. Please try again.");
        return false;
      }

      setStatus("success");
      setResultMessage(data.message);
      return true;
    } catch {
      setStatus("error");
      setResultMessage("Something went wrong. Please check your connection and try again.");
      return false;
    }
  }

  return { status, resultMessage, submit };
}
