"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface DeliveryFormData {
  adventurerName: string;
  castleAddress: string;
  settlement: string;
  realmCoordinates: string;
  ravenMessage: string;
}

interface DeliveryFormErrors {
  adventurerName?: string;
  castleAddress?: string;
  settlement?: string;
  realmCoordinates?: string;
}

interface DeliveryFormProps {
  onNext: (data: DeliveryFormData) => void;
  onBack: () => void;
}

const fieldStyle = {
  background: "rgba(139,94,60,0.06)",
  border: "1px solid rgba(139,94,60,0.35)",
  borderRadius: "8px",
  color: "#2c1a0e",
  fontFamily: "var(--font-playfair)",
  fontSize: "0.95rem",
  padding: "0.75rem 1rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontSize: "0.7rem",
  fontFamily: "var(--font-cinzel)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "#8B5E3C",
  marginBottom: "0.4rem",
};

const errorStyle = {
  color: "#b91c1c",
  fontSize: "0.75rem",
  fontFamily: "var(--font-playfair)",
  fontStyle: "italic",
  marginTop: "0.3rem",
};

export default function DeliveryForm({ onNext, onBack }: DeliveryFormProps) {
  const [formData, setFormData] = useState<DeliveryFormData>({
    adventurerName: "",
    castleAddress: "",
    settlement: "",
    realmCoordinates: "",
    ravenMessage: "",
  });

  const [errors, setErrors] = useState<DeliveryFormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: DeliveryFormErrors = {};
    if (!formData.adventurerName.trim())
      newErrors.adventurerName = "⚠ The scribe requires this field";
    if (!formData.castleAddress.trim())
      newErrors.castleAddress = "⚠ The scribe requires this field";
    if (!formData.settlement.trim())
      newErrors.settlement = "⚠ The scribe requires this field";
    if (!formData.realmCoordinates.trim())
      newErrors.realmCoordinates = "⚠ The scribe requires this field";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof DeliveryFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const getFocusBorder = (field: string, hasError: boolean) => ({
    ...fieldStyle,
    borderColor: hasError
      ? "#b91c1c"
      : focusedField === field
      ? "#8B5E3C"
      : "rgba(139,94,60,0.35)",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        className="rounded-2xl shadow-2xl overflow-hidden"
        style={{
          background: "#f5e6c8",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        {/* Header */}
        <div
          className="px-8 pt-8 pb-4 text-center"
          style={{ borderBottom: "2px dashed rgba(139,94,60,0.3)" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "#8B5E3C", fontFamily: "var(--font-cinzel)" }}
          >
            Delivery Scroll
          </p>
          <h2
            className="text-2xl font-bold"
            style={{ color: "#2c1a0e", fontFamily: "var(--font-cinzel)" }}
          >
            Your Castle&apos;s Address
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="px-8 py-6 space-y-5">
          {/* Name of the Adventurer */}
          <div>
            <label htmlFor="adventurerName" style={labelStyle}>
              Name of the Adventurer
            </label>
            <input
              id="adventurerName"
              name="adventurerName"
              type="text"
              value={formData.adventurerName}
              onChange={handleChange}
              onFocus={() => setFocusedField("adventurerName")}
              onBlur={() => setFocusedField(null)}
              placeholder="Sir Aldric the Bold"
              style={getFocusBorder("adventurerName", !!errors.adventurerName)}
            />
            {errors.adventurerName && (
              <p style={errorStyle}>{errors.adventurerName}</p>
            )}
          </div>

          {/* Keep or Castle Address */}
          <div>
            <label htmlFor="castleAddress" style={labelStyle}>
              Keep or Castle Address
            </label>
            <input
              id="castleAddress"
              name="castleAddress"
              type="text"
              value={formData.castleAddress}
              onChange={handleChange}
              onFocus={() => setFocusedField("castleAddress")}
              onBlur={() => setFocusedField(null)}
              placeholder="Tower of the Eastern Wall, 3rd Battlement"
              style={getFocusBorder("castleAddress", !!errors.castleAddress)}
            />
            {errors.castleAddress && (
              <p style={errorStyle}>{errors.castleAddress}</p>
            )}
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nearest Town or Settlement */}
            <div>
              <label htmlFor="settlement" style={labelStyle}>
                Nearest Town or Settlement
              </label>
              <input
                id="settlement"
                name="settlement"
                type="text"
                value={formData.settlement}
                onChange={handleChange}
                onFocus={() => setFocusedField("settlement")}
                onBlur={() => setFocusedField(null)}
                placeholder="Ironhold"
                style={getFocusBorder("settlement", !!errors.settlement)}
              />
              {errors.settlement && (
                <p style={errorStyle}>{errors.settlement}</p>
              )}
            </div>

            {/* Realm Coordinates */}
            <div>
              <label htmlFor="realmCoordinates" style={labelStyle}>
                Realm Coordinates
              </label>
              <input
                id="realmCoordinates"
                name="realmCoordinates"
                type="text"
                value={formData.realmCoordinates}
                onChange={handleChange}
                onFocus={() => setFocusedField("realmCoordinates")}
                onBlur={() => setFocusedField(null)}
                placeholder="E7-N3"
                style={getFocusBorder("realmCoordinates", !!errors.realmCoordinates)}
              />
              {errors.realmCoordinates && (
                <p style={errorStyle}>{errors.realmCoordinates}</p>
              )}
            </div>
          </div>

          {/* Message to the Raven Courier */}
          <div>
            <label htmlFor="ravenMessage" style={labelStyle}>
              Message to the Raven Courier{" "}
              <span
                style={{ textTransform: "none", fontFamily: "var(--font-playfair)", fontSize: "0.7rem" }}
              >
                (optional)
              </span>
            </label>
            <textarea
              id="ravenMessage"
              name="ravenMessage"
              value={formData.ravenMessage}
              onChange={handleChange}
              onFocus={() => setFocusedField("ravenMessage")}
              onBlur={() => setFocusedField(null)}
              placeholder="Leave by the drawbridge after dusk…"
              rows={3}
              style={{
                ...getFocusBorder("ravenMessage", false),
                resize: "none",
              }}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <motion.button
              type="button"
              onClick={onBack}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 rounded-full font-bold text-sm uppercase tracking-widest"
              style={{
                background: "transparent",
                border: "2px solid rgba(139,94,60,0.4)",
                color: "#8B5E3C",
                fontFamily: "var(--font-cinzel)",
              }}
            >
              ← Back
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-[2] py-4 rounded-full font-bold text-sm uppercase tracking-widest"
              style={{
                background: "#8b0000",
                color: "#f5e6c8",
                fontFamily: "var(--font-cinzel)",
                boxShadow: "0 4px 20px rgba(139,0,0,0.4)",
              }}
            >
              Send the Raven →
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
