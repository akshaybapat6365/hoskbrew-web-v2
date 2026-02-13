"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { GlitchText } from "./ui/Effects";

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
      <div className="border-b border-retro-accent/30 pb-4 mb-6">
        <h3 className="font-mono text-retro-phosphor text-sm typing-effect">
          {">"} ESTABLISH_UPLINK...
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block font-retro text-retro-white text-sm uppercase"
          >
            IDENTIFIER
          </label>
          <input
            id="name"
            required
            className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white font-mono focus:border-retro-accent focus:outline-none transition-colors rounded-none placeholder:text-retro-white/20"
            placeholder="PLAYER 1"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block font-retro text-retro-white text-sm uppercase"
          >
            COMMS_FREQ
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white font-mono focus:border-retro-accent focus:outline-none transition-colors rounded-none placeholder:text-retro-white/20"
            placeholder="user@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="project"
          className="block font-retro text-retro-white text-sm uppercase"
        >
          MISSION_TYPE
        </label>
        <select
          id="project"
          className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white font-mono focus:border-retro-accent focus:outline-none transition-colors rounded-none appearance-none"
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
          DATA_PACKET
        </label>
        <textarea
          id="message"
          rows={6}
          required
          className="w-full bg-retro-gray/50 border-2 border-retro-white/20 p-3 text-retro-white font-mono focus:border-retro-accent focus:outline-none transition-colors rounded-none resize-none placeholder:text-retro-white/20"
          placeholder="Input transmission data..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        variant="cyber"
        className="w-full"
        disabled={status === "submitting" || status === "success"}
      >
        {status === "submitting"
          ? "UPLOADING..."
          : status === "success"
            ? "UPLOAD COMPLETE"
            : "TRANSMIT"}
      </Button>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-retro-phosphor/20 border border-retro-phosphor p-4 mt-4"
        >
          <p className="text-retro-phosphor font-mono text-center">
            {">"} PACKET RECEIVED. AWAIT RESPONSE.
          </p>
        </motion.div>
      )}
    </form>
  );
}
