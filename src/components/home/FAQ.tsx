"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FAQ"
          title="Perguntas"
          highlight="Frequentes"
          description="Alinhamento sobre modelo de trabalho, prazos e engenharia de software."
          center={true}
        />

        <div className="mt-16 border-t border-border">
          {FAQ_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Disclosure as="div" className="border-b border-border">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center py-6 text-left text-text-primary hover:text-text-secondary transition-colors focus:outline-none">
                      <span className="font-serif text-xl pr-4">{item.question}</span>
                      {open ? (
                        <Minus className="w-5 h-5 shrink-0 text-text-muted" />
                      ) : (
                        <Plus className="w-5 h-5 shrink-0 text-text-muted" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-300 ease-out"
                      enterFrom="transform -translate-y-4 opacity-0"
                      enterTo="transform translate-y-0 opacity-100"
                      leave="transition duration-200 ease-out"
                      leaveFrom="transform translate-y-0 opacity-100"
                      leaveTo="transform -translate-y-4 opacity-0"
                    >
                      <Disclosure.Panel className="pb-8 text-text-secondary text-base leading-relaxed">
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
