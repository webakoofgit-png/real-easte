"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Lock, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Acquisition Inquiry",
    destination: "Beverly Hills / Bel-Air",
    capitalBudget: "₹25 Cr – ₹50 Cr",
    contactPreference: "Encrypted Email",
    message: "",
    ndaRequired: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-panel rounded-3xl p-10 md:p-14 border border-[#d4af37]/40 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
            Transmission Secured
          </span>
          <h3 className="font-serif text-3xl font-medium text-white mb-2">
            Inquiry Registered with Partner Desk
          </h3>
          <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed font-light">
            Thank you, {formData.name || "Client"}. Your private inquiry has been assigned to a Senior Advisory Partner. An encrypted confirmation will be sent to {formData.email} within 2 hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-md mx-auto text-xs text-zinc-400 space-y-1 text-left">
          <div className="flex justify-between">
            <span className="text-zinc-500">Inquiry Classification:</span>
            <span className="text-white font-medium">{formData.inquiryType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Selected Destination:</span>
            <span className="text-white font-medium">{formData.destination}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Capital Allocation:</span>
            <span className="text-[#d4af37] font-medium">{formData.capitalBudget}</span>
          </div>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 space-y-6 shadow-2xl"
    >
      <div className="border-b border-white/[0.08] pb-6 space-y-1">
        <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-widest">
          <Lock className="w-3.5 h-3.5" />
          <span>Encrypted Client Intake</span>
        </div>
        <h3 className="font-serif text-2xl font-normal text-white">
          Direct Partner Inquiry
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          All submissions are governed under our mutual private confidentiality protocol.
        </p>
      </div>

      {/* Inquiry Type Radio / Buttons */}
      <div className="space-y-2">
        <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
          Service Required (Loans | Property | Financial Solutions)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            "Loans & Mortgage",
            "Property Acquisition",
            "Financial Solutions",
            "Off-Market Portfolio",
          ].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, inquiryType: type })}
              className={`py-2.5 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                formData.inquiryType === type
                  ? "bg-[#d4af37] text-black border-[#d4af37] font-semibold"
                  : "bg-black/30 text-zinc-300 border-white/10 hover:border-white/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
            Full Legal Name / Representative
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Eleanor Vance"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
            Confidential Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="client@familyoffice.com"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
            Direct Telephone
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 019-2834"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
            Preferred Metropolis / Territory
          </label>
          <select
            value={formData.destination}
            onChange={(e) =>
              setFormData({ ...formData, destination: e.target.value })
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]"
          >
            <option value="Beverly Hills / Bel-Air">Beverly Hills & Bel-Air, CA</option>
            <option value="Manhattan & Tribeca">Manhattan & Tribeca, NY</option>
            <option value="Star Island & Miami">Miami Beach & Palm Beach, FL</option>
            <option value="Aspen Mountain">Aspen & Snowmass, CO</option>
            <option value="Point Dume & Malibu">Malibu Coastline, CA</option>
            <option value="Lake Tahoe">Lake Tahoe, NV</option>
          </select>
        </div>
      </div>

      {/* Capital Range & Preference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
            Anticipated Capital Allocation
          </label>
          <select
            value={formData.capitalBudget}
            onChange={(e) =>
              setFormData({ ...formData, capitalBudget: e.target.value })
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]"
          >
            <option value="₹10 Cr – ₹25 Cr">₹10 Crore – ₹25 Crore</option>
            <option value="₹25 Cr – ₹50 Cr">₹25 Crore – ₹50 Crore</option>
            <option value="₹50 Cr+">₹50 Crore+ (Ultra-Prime / Corporate)</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
            Contact Channel
          </label>
          <select
            value={formData.contactPreference}
            onChange={(e) =>
              setFormData({ ...formData, contactPreference: e.target.value })
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]"
          >
            <option value="Encrypted Email">Encrypted Email</option>
            <option value="Signal / WhatsApp Private">Signal / WhatsApp Messenger</option>
            <option value="Direct Phone Call">Confidential Phone Call</option>
            <option value="In-Person Private Suite">In-Person at Private Office</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
          Acquisition Parameters or Property Notes
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Specify architectural requirements, acreage, timeline, or particular estate identifier..."
          className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] resize-none"
        />
      </div>

      {/* NDA Checkbox */}
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="contact-nda"
          checked={formData.ndaRequired}
          onChange={(e) =>
            setFormData({ ...formData, ndaRequired: e.target.checked })
          }
          className="mt-1 accent-[#d4af37]"
        />
        <label
          htmlFor="contact-nda"
          className="text-xs text-zinc-400 leading-relaxed"
        >
          Execute formal Bilateral Non-Disclosure Agreement prior to delivering property dossiers, architectural blueprints, and showing coordinates.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Dispatch Private Inquiry</span>
      </button>
    </form>
  );
}
