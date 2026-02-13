"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block font-retro text-retro-white text-sm uppercase"
          >
            Name
          </label>
          <input
            id="name"
            required
            className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white focus:border-retro-accent focus:outline-none transition-colors rounded-none"
            placeholder="PLAYER 1"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block font-retro text-retro-white text-sm uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white focus:border-retro-accent focus:outline-none transition-colors rounded-none"
            placeholder="user@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="project"
          className="block font-retro text-retro-white text-sm uppercase"
        >
          Project Type
        </label>
        <select
          id="project"
          className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white focus:border-retro-accent focus:outline-none transition-colors rounded-none appearance-none"
        >
          <option>Manufacturing Inquiry</option>
          <option>Custom Cartridge Design</option>
          <option>RetroNomicon Submission</option>
          <option>General Support</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block font-retro text-retro-white text-sm uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          required
          className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white focus:border-retro-accent focus:outline-none transition-colors rounded-none resize-none"
          placeholder="Tell us about your quest..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting" || status === "success"}
      >
        {status === "submitting"
          ? "Transmitting..."
          : status === "success"
            ? "Transmission Received!"
            : "Send Message"}
      </Button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-retro-secondary font-retro text-center mt-4"
        >
          SUCCESS! WE WILL CONTACT YOU SOON.
        </motion.p>
      )}
    </form>
  );
}
