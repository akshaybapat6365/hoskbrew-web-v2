"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Select } from "./ui/Select";

const INQUIRY_OPTIONS = [
  { value: "manufacturing", label: "Cartridge Manufacturing" },
  { value: "packaging", label: "Packaging & Design" },
  { value: "qa", label: "QA & Testing" },
  { value: "fulfillment", label: "Fulfillment & Distribution" },
  { value: "retronomicon", label: "RetroNomicon Submission" },
  { value: "general", label: "General Inquiry" },
];

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Name" placeholder="Your name" required />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <Select
        label="Inquiry Type"
        options={INQUIRY_OPTIONS}
        placeholder="Select a topic"
        defaultValue=""
      />

      <Textarea
        label="Message"
        placeholder="Tell us about your project including platform, quantity, timeline, and any specific requirements."
        required
      />

      <Button
        type="submit"
        size="lg"
        variant="primary"
        fullWidth
        disabled={status === "submitting" || status === "success"}
      >
        {status === "submitting"
          ? "Sending..."
          : status === "success"
            ? "Message Sent!"
            : "Send Message"}
      </Button>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="rounded-md bg-brand-success/10 border border-brand-success/30 p-4"
        >
          <p className="text-sm text-brand-success text-center">
            Thanks for reaching out! We&apos;ll get back to you within 1-2
            business days.
          </p>
        </motion.div>
      )}
    </form>
  );
}
