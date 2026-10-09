"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Calendar } from "lucide-react";

export default function PropertyInquiryForm({ agent, propertyTitle }) {
  const [tab, setTab] = useState("schedule"); // 'schedule' | 'inquiry'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="sticky top-28 bg-surface-container-lowest p-6 rounded-2xl shadow-xl space-y-6 border border-outline-variant/20">
      {/* Agent Header */}
      {agent && (
        <div className="flex items-center gap-4 pb-6 border-b border-outline-variant/30">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-surface-container shrink-0">
            <Image
              src={agent.photo.src}
              alt={agent.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-headline-sm text-lg text-primary">
              {agent.name}
            </h4>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">
              {agent.title}
            </p>
            <p className="text-xs text-secondary font-medium mt-1">
              {agent.phone}
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-surface-container-low rounded-lg">
        <button
          type="button"
          onClick={() => setTab("schedule")}
          className={`flex-1 py-2 text-xs font-medium rounded-md transition-all ${
            tab === "schedule"
              ? "bg-surface text-primary shadow-sm"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          Schedule Viewing
        </button>
        <button
          type="button"
          onClick={() => setTab("inquiry")}
          className={`flex-1 py-2 text-xs font-medium rounded-md transition-all ${
            tab === "inquiry"
              ? "bg-surface text-primary shadow-sm"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          Request Info
        </button>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto">
            <Check size={24} />
          </div>
          <h4 className="font-headline-sm text-xl text-primary">
            Inquiry Received
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {agent?.name ? `${agent.name}'s office` : "Our advisory team"} will
            contact you within 2 business hours to confirm your private arrangement.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs underline text-secondary pt-2 block mx-auto"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-label-md uppercase text-on-surface-variant">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Lord / Lady / Mr. Smith"
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-label-md uppercase text-on-surface-variant">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="client@domain.com"
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-label-md uppercase text-on-surface-variant">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          {tab === "schedule" && (
            <div className="space-y-1">
              <label className="text-label-md uppercase text-on-surface-variant">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-label-md uppercase text-on-surface-variant">
              Message
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                tab === "schedule"
                  ? "I am interested in scheduling a private tour..."
                  : "Please send architectural specifications..."
              }
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary font-medium text-xs uppercase tracking-widest rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-98"
          >
            {tab === "schedule" ? "Schedule Private Viewing" : "Request Information"}
          </button>
        </form>
      )}
    </div>
  );
}
