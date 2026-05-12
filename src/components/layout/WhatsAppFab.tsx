"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import WhatsAppDropdown from "@/components/ui/WhatsAppDropdown";

export default function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppDropdown position="top">
        <motion.button
          aria-label="Contato via WhatsApp"
          className="w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:shadow-whatsapp/50 transition-shadow outline-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
        </motion.button>
      </WhatsAppDropdown>
    </div>
  );
}
