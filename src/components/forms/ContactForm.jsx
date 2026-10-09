"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm({
  initialIntent = "general",
  propertyName = "",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    intent: initialIntent || "general",
    message: propertyName ? `I am inquiring regarding ${propertyName}. ` : "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate response delay
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      intent: "general",
      message: "",
    });
    setStatus("idle");
  };

  return (
    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm relative overflow-hidden border border-outline-variant/30">
      {status === "success" ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="font-headline-sm text-2xl text-primary">
            Inquiry Received
          </h3>
          <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
            Thank you, {formData.fullName}. Your confidential portfolio request has
            been logged in our demonstration environment. An advisor will review
            your inquiry promptly.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs uppercase tracking-widest text-secondary hover:underline font-medium"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-label-lg text-on-surface block"
              >
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Eleanor Vance"
                className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 rounded text-on-surface text-sm focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-label-lg text-on-surface block"
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="client@domain.com"
                className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 rounded text-on-surface text-sm focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="font-label-lg text-on-surface block"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
                className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 rounded text-on-surface text-sm focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            {/* Primary Intent */}
            <div className="space-y-2">
              <label
                htmlFor="intent"
                className="font-label-lg text-on-surface block"
              >
                Primary Intent *
              </label>
              <select
                id="intent"
                name="intent"
                value={formData.intent}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 rounded text-on-surface text-sm focus:outline-none focus:border-secondary transition-colors cursor-pointer"
              >
                <option value="buy">Buy a Property</option>
                <option value="rent">Rent / Lease an Estate</option>
                <option value="sell">Sell an Architectural Asset</option>
                <option value="general">General Advisory Inquiry</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="font-label-lg text-on-surface block"
            >
              Project Details or Inquiry *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your architectural preferences, target timeline, or property details..."
              className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 rounded text-on-surface text-sm focus:outline-none focus:border-secondary transition-colors leading-relaxed"
            ></textarea>
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-50 text-error rounded flex items-center gap-2 text-xs">
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Footer & Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-outline-variant/30">
            <p className="text-xs text-on-surface-variant italic">
              * Demo form. Messages are simulated in demonstration environment.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3.5 rounded font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-xs uppercase tracking-wider disabled:opacity-50"
            >
              <span>{status === "submitting" ? "Transmitting..." : "Transmit Inquiry"}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
