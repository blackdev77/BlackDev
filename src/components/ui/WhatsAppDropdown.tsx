"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MessageCircle, User } from "lucide-react";
import { WHATSAPP_CONTACTS } from "@/lib/constants";

interface WhatsAppDropdownProps {
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
}

export default function WhatsAppDropdown({ children, className = "", position = "bottom" }: WhatsAppDropdownProps) {
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
              className={`absolute ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"} right-0 sm:left-0 sm:right-auto w-64 origin-top-right rounded-2xl glass border border-white/10 shadow-2xl shadow-black/50 focus:outline-none overflow-hidden z-50`}
            >
              <div className="p-2">
                <div className="px-3 py-2 mb-2 border-b border-white/5">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Falar com:
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
                        } group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors`}
                      >
                        <div className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0 group-hover:bg-whatsapp/20 transition-colors">
                          <MessageCircle className="w-5 h-5 text-whatsapp" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-semibold">{contact.name}</span>
                          <span className="text-xs text-text-secondary">{contact.role}</span>
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
