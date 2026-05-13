"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, MapPin, Mail, Loader2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    reset();
    
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <div className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Contato"
          title="Vamos iniciar o seu"
          highlight="projeto?"
          description="Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais."
          center={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
          {/* Form Side */}
          <ScrollReveal direction="right">
            <div className="border border-border bg-surface p-8 md:p-10">
              <h3 className="text-2xl font-serif text-text-primary mb-8">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Nome Completo</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Nome é obrigatório" })}
                    className="w-full px-4 py-3 bg-primary border border-border focus:outline-none focus:border-text-secondary transition-all text-text-primary"
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "E-mail é obrigatório",
                        pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" }
                      })}
                      className="w-full px-4 py-3 bg-primary border border-border focus:outline-none focus:border-text-secondary transition-all text-text-primary"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">Telefone / WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", { required: "Telefone é obrigatório" })}
                      className="w-full px-4 py-3 bg-primary border border-border focus:outline-none focus:border-text-secondary transition-all text-text-primary"
                      placeholder="(77) 99999-9999"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Como podemos ajudar?</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Mensagem é obrigatória" })}
                    className="w-full px-4 py-3 bg-primary border border-border focus:outline-none focus:border-text-secondary transition-all text-text-primary resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 text-primary font-medium transition-all"
                >
                  {isSubmitting ? (
                     <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                     <Send className="w-5 h-5" />
                  )}
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-center text-sm text-whatsapp mt-4 font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                )}
              </form>
            </div>
          </ScrollReveal>

          {/* Info Side */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex flex-col justify-between h-full space-y-10">
              
              <div className="space-y-8">
                <h3 className="text-2xl font-serif text-text-primary">Informações de Contato</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Endereço</h4>
                    <p className="text-text-secondary leading-relaxed">{COMPANY.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">E-mail</h4>
                    <a href={`mailto:${COMPANY.email}`} className="text-text-secondary hover:text-text-primary transition-colors">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="overflow-hidden h-[250px] border border-border bg-surface">
                {/* LEM Coordinates: -12.0963, -45.7806 */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.882191942127!2d-45.79250060938634!3d-12.09590623630689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9370cb9e24021295%3A0xcda650e85f0fb!2zTHXDrXMgRWR1YXJkbyBNYWdhbGjDo2VzLCBCQQ!5e0!3m2!1spt-BR!2sbr!4v1715400000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Luís Eduardo Magalhães"
                ></iframe>
              </div>
              
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
