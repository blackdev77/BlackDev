import {
  Globe,
  TrendingUp,
  MapPin,
  MessageCircle,
  Zap,
  Headphones,
  Monitor,
  Layout,
  Database,
  Wrench,
  Link2,
  Search,
  Palette,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

/* ============================================
   WhatsApp Config
   ============================================ */
export const WHATSAPP_NUMBER = "5577999999999"; // TODO: substituir pelo número real
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da BlackDev e gostaria de saber mais sobre os serviços de desenvolvimento web."
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/* ============================================
   Company Info
   ============================================ */
export const COMPANY = {
  name: "BlackDev",
  tagline: "Desenvolvimento Web Profissional",
  city: "Luís Eduardo Magalhães",
  state: "BA",
  fullAddress: "Luís Eduardo Magalhães - BA",
  email: "contato@blackdev.com.br",
  phone: "(77) 9 9999-9999",
  founded: 2024,
  projectsDelivered: 50,
  satisfactionRate: 98,
  supportHours: "24/7",
};

/* ============================================
   Navigation
   ============================================ */
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

/* ============================================
   Benefits
   ============================================ */
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: Globe,
    title: "100% Responsivo",
    description:
      "Sites que se adaptam perfeitamente a qualquer tela — celular, tablet ou desktop.",
  },
  {
    icon: TrendingUp,
    title: "Focado em Conversão",
    description:
      "Design estratégico que transforma visitantes em clientes reais para o seu negócio.",
  },
  {
    icon: MapPin,
    title: "SEO Local",
    description:
      "Otimização para buscas locais em Luís Eduardo Magalhães e região oeste da Bahia.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integrado",
    description:
      "Botão de contato direto via WhatsApp para gerar leads instantaneamente.",
  },
  {
    icon: Zap,
    title: "Ultra Rápido",
    description:
      "Sites com carregamento em menos de 2 segundos para a melhor experiência.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description:
      "Acompanhamento pós-entrega com suporte técnico e manutenção contínua.",
  },
];

/* ============================================
   Services
   ============================================ */
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

export const SERVICES: Service[] = [
  {
    icon: Monitor,
    title: "Sites Institucionais",
    description:
      "Sites profissionais que transmitem credibilidade e fortalecem a presença digital da sua empresa.",
    features: [
      "Design exclusivo e personalizado",
      "Otimizado para SEO",
      "Integração com redes sociais",
      "Painel administrativo",
    ],
    slug: "sites-institucionais",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão focadas em capturar leads e impulsionar vendas.",
    features: [
      "Copy persuasiva",
      "A/B Testing ready",
      "Formulários inteligentes",
      "Analytics integrado",
    ],
    slug: "landing-pages",
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description:
      "Aplicações web sob medida para automatizar processos e aumentar a produtividade.",
    features: [
      "Dashboards interativos",
      "Gestão de dados",
      "APIs e integrações",
      "Multi-usuário com permissões",
    ],
    slug: "sistemas-web",
  },
  {
    icon: Wrench,
    title: "Manutenção & Suporte",
    description:
      "Manutenção preventiva e suporte técnico para manter seu site sempre atualizado e seguro.",
    features: [
      "Atualizações de segurança",
      "Backup automático",
      "Monitoramento 24/7",
      "Correção de bugs",
    ],
    slug: "manutencao-suporte",
  },
  {
    icon: Link2,
    title: "Integrações",
    description:
      "Conecte seu site a ferramentas de pagamento, CRM, e-mail marketing e muito mais.",
    features: [
      "Gateway de pagamento",
      "CRM e automação",
      "E-mail marketing",
      "APIs de terceiros",
    ],
    slug: "integracoes",
  },
];

/* ============================================
   Process Steps
   ============================================ */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, público-alvo e objetivos para criar a estratégia ideal.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Criamos layouts modernos e intuitivos que encantam e convertem visitantes.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Codificamos com as melhores tecnologias, garantindo performance e segurança.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Lançamento",
    description:
      "Deploy, testes finais e acompanhamento para garantir o sucesso do projeto.",
    icon: Rocket,
  },
];

/* ============================================
   Portfolio Projects
   ============================================ */
export interface Project {
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "AgroX Digital",
    category: "Site Institucional",
    categorySlug: "institucional",
    description:
      "Presença digital completa para empresa do agronegócio em LEM.",
    image: "/images/portfolio-1.svg",
    tags: ["Next.js", "SEO", "Responsivo"],
  },
  {
    title: "Clínica Vida",
    category: "Landing Page",
    categorySlug: "landing-page",
    description: "Landing page de alta conversão para clínica médica local.",
    image: "/images/portfolio-2.svg",
    tags: ["React", "Conversão", "WhatsApp"],
  },
  {
    title: "GestãoPro",
    category: "Sistema Web",
    categorySlug: "sistema",
    description: "Sistema de gestão empresarial com dashboards interativos.",
    image: "/images/portfolio-3.svg",
    tags: ["TypeScript", "Dashboard", "API"],
  },
  {
    title: "Sabor do Oeste",
    category: "Site Institucional",
    categorySlug: "institucional",
    description:
      "Site premium para restaurante com cardápio digital e reservas.",
    image: "/images/portfolio-4.svg",
    tags: ["Design", "Mobile-first", "SEO"],
  },
  {
    title: "ImovelFácil",
    category: "Sistema Web",
    categorySlug: "sistema",
    description: "Plataforma de imóveis com filtros avançados e mapa.",
    image: "/images/portfolio-5.svg",
    tags: ["Full-stack", "Maps", "Filtros"],
  },
  {
    title: "FitZone Academy",
    category: "Landing Page",
    categorySlug: "landing-page",
    description:
      "Página de vendas para academia com planos e agendamento online.",
    image: "/images/portfolio-6.svg",
    tags: ["Vendas", "Agendamento", "CTA"],
  },
];

export const PORTFOLIO_CATEGORIES = [
  "Todos",
  "institucional",
  "landing-page",
  "sistema",
];

export const PORTFOLIO_CATEGORY_LABELS: Record<string, string> = {
  Todos: "Todos",
  institucional: "Sites Institucionais",
  "landing-page": "Landing Pages",
  sistema: "Sistemas Web",
};

/* ============================================
   Testimonials
   ============================================ */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "João Silva",
    role: "CEO",
    company: "AgroX",
    content:
      "Dobramos nossos leads em apenas 1 mês após o lançamento do novo site! A equipe da BlackDev entendeu perfeitamente nossas necessidades e entregou um resultado excepcional.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Diretora",
    company: "Clínica Vida",
    content:
      "O site ficou incrível e profissional. Nossos pacientes elogiam a facilidade de encontrar informações e agendar consultas pelo WhatsApp. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Proprietário",
    company: "Sabor do Oeste",
    content:
      "O cardápio digital revolucionou nosso atendimento. Os pedidos online aumentaram 40% e o site é lindo no celular. Melhor investimento que fizemos!",
    rating: 5,
  },
  {
    name: "Ana Souza",
    role: "Gerente de Marketing",
    company: "FitZone Academy",
    content:
      "A landing page converteu muito acima das nossas expectativas. Design moderno, rápido e estratégico. A BlackDev é parceira de verdade!",
    rating: 5,
  },
];

/* ============================================
   FAQ Items
   ============================================ */
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "O valor varia conforme a complexidade do projeto. Sites institucionais partem de R$ 1.500, enquanto landing pages e sistemas web têm valores personalizados. Entre em contato para um orçamento gratuito e sem compromisso.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "Sites institucionais são entregues em 7 a 15 dias úteis. Landing pages em 5 a 10 dias. Sistemas web variam de 30 a 60 dias, dependendo da complexidade. Trabalhamos com prazos claros e atualizações constantes.",
  },
  {
    question: "O site será responsivo (funciona no celular)?",
    answer:
      "Sim! Todos os nossos projetos são desenvolvidos com abordagem mobile-first, garantindo perfeita visualização e funcionamento em celulares, tablets, notebooks e desktops.",
  },
  {
    question: "Vocês oferecem manutenção após a entrega?",
    answer:
      "Sim! Oferecemos planos de manutenção mensal que incluem atualizações de segurança, backup, correção de bugs e suporte técnico. Garantimos que seu site esteja sempre atualizado e funcionando perfeitamente.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Nosso processo é dividido em 4 etapas: Descoberta (entender seu negócio), Design (criar o visual), Desenvolvimento (codificar) e Lançamento (publicar e acompanhar). Você participa de cada etapa com aprovações.",
  },
  {
    question: "Vocês atendem empresas fora de Luís Eduardo Magalhães?",
    answer:
      "Sim! Embora nossa base seja em LEM, atendemos empresas de toda a região oeste da Bahia e de todo o Brasil de forma remota, com a mesma qualidade e dedicação.",
  },
];

/* ============================================
   Company Values
   ============================================ */
export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const VALUES: Value[] = [
  {
    title: "Inovação",
    description:
      "Utilizamos as tecnologias mais modernas para criar soluções que se destacam no mercado.",
    icon: Zap,
  },
  {
    title: "Qualidade",
    description:
      "Cada projeto é tratado com atenção meticulosa aos detalhes, garantindo excelência em cada pixel.",
    icon: Monitor,
  },
  {
    title: "Compromisso",
    description:
      "Cumprimos prazos e mantemos comunicação transparente durante todo o projeto.",
    icon: Headphones,
  },
  {
    title: "Resultados",
    description:
      "Focamos em métricas reais: mais leads, mais vendas e mais visibilidade para seu negócio.",
    icon: TrendingUp,
  },
];
