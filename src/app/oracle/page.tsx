import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Oracle Fate Quiz — Café Arcadia",
  description:
    "Consult the Oracle and discover which Café Arcadia brew is destined for your soul. Answer five questions and let fate reveal your legendary brew.",
};

const OracleQuiz = dynamic(() => import("@/components/oracle/OracleQuiz"), {
  ssr: false,
});

export default function OraclePage() {
  return <OracleQuiz />;
}
