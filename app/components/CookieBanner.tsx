"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accetto"
      cookieName="consenso-privacy-studio"
      style={{ background: "#1a1a1a", color: "#fff", zIndex: 999 }}
      buttonStyle={{ background: "#faf9f6", color: "#000", borderRadius: "5px", fontSize: "13px" }}
      expires={150}
    >
      Questo sito utilizza cookie per migliorare l&apos;esperienza. 
      Consulta la nostra <a href="/privacy-policy" className="underline">Privacy Policy</a>.
    </CookieConsent>
  );
}