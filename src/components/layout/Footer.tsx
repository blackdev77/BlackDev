import Link from "next/link";
import { Code2, Mail, MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import WhatsAppDropdown from "@/components/ui/WhatsAppDropdown";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-bold">
                Black<span className="text-accent">Dev</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Desenvolvimento web profissional para empresas que buscam crescer
              com presença digital de alta performance.
            </p>
            <WhatsAppDropdown position="top">
              <button
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium rounded-lg transition-colors outline-none"
              >
                Fale Conosco
              </button>
            </WhatsAppDropdown>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Serviços
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicos#sites-institucionais"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Sites Institucionais
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#landing-pages"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#sistemas-web"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Sistemas Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#manutencao-suporte"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Manutenção
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#integracoes"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Integrações
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">
                  {COMPANY.fullAddress}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\D/g, "")}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-text-muted">
            Feito com{" "}
            <span className="text-accent" aria-label="amor">
              ♥
            </span>{" "}
            em {COMPANY.city} - {COMPANY.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
