"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Dúvidas Frequentes"
          title="Perguntas"
          highlight="Frequentes"
          description="Tudo o que você precisa saber antes de iniciar seu projeto conosco."
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Disclosure as="div" className="glass rounded-xl overflow-hidden">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 text-left text-text-primary hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-accent/50">
                      <span className="font-medium pr-4">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-accent transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-100 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 pb-5 pt-2 text-text-secondary text-sm leading-relaxed">
                        {item.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
