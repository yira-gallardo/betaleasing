"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5660594172", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-[9999]"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        display: "block",
        width: "auto",
        height: "auto",
      }}
    >
      <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default WhatsAppButton;
