"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_CONTACTS } from "@/lib/constants";

interface WhatsAppDropdownProps {
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
  align?: "left" | "right" | "center";
}

export default function WhatsAppDropdown({ 
  children, 
  className = "", 
  position = "bottom",
  align = "right"
}: WhatsAppDropdownProps) {
  
  const alignClasses = {
    left: "left-0 origin-top-left",
    right: "right-0 origin-top-right",
    center: "left-1/2 -translate-x-1/2 origin-top",
  };

  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      {({ open }) => (
        <>
          <Menu.Button as={Fragment}>
            {children}
          </Menu.Button>

          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items 
              className={`absolute ${position === "top" ? "bottom-full mb-3" : "top-full mt-3"} ${alignClasses[align]} w-[320px] rounded-2xl bg-secondary border border-white/10 shadow-2xl shadow-black/80 focus:outline-none overflow-hidden z-[100]`}
            >
              <div className="p-2">
                <div className="px-3 py-3 mb-1 border-b border-white/5">
                  <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Escolha com quem falar:
                  </p>
                </div>
                {WHATSAPP_CONTACTS.map((contact) => (
                  <Menu.Item key={contact.name}>
                    {({ active }) => (
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          active ? "bg-white/5 text-accent" : "text-text-primary"
                        } group flex w-full items-center gap-4 rounded-xl px-3 py-3 text-sm transition-colors`}
                      >
                        <div className="w-12 h-12 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0 group-hover:bg-whatsapp/20 transition-colors">
                          <MessageCircle className="w-6 h-6 text-whatsapp" />
                        </div>
                        <div className="flex flex-col text-left overflow-hidden">
                          <span className="font-bold text-base truncate">{contact.name}</span>
                          <span className="text-xs text-text-secondary truncate">{contact.role}</span>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
