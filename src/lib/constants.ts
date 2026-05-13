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
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da BlackDev e gostaria de saber mais sobre os serviços de desenvolvimento web."
);

export const WHATSAPP_CONTACTS = [
  {
    name: "Edmundo",
    role: "Comercial / Projetos / Suporte",
    number: "5577998738251", // TODO: substituir pelo número real
    get link() {
      return `https://wa.me/${this.number}?text=${WHATSAPP_MESSAGE}`;
    }
  },
  {
    name: "Gustavo",
    role: "Suporte / Técnico / Comercial",
    number: "5577991050011", // TODO: substituir pelo número real
    get link() {
      return `https://wa.me/${this.number}?text=${WHATSAPP_MESSAGE}`;
    }
  }
];

/* ============================================
   Company Info
   ============================================ */
export const COMPANY = {
  name: "BlackDev",
  tagline: "Engenharia Digital & Posicionamento",
  city: "Luís Eduardo Magalhães",
  state: "BA",
  fullAddress: "Luís Eduardo Magalhães - BA",
  email: "contato@blackdev.com.br",
  phone: "(77) 9 9999-9999",
  founded: 2024,
  projectsDelivered: 10,
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
    title: "Arquitetura Escalável",
    description:
      "Sistemas desenhados para crescer com sua operação, utilizando tecnologias modernas e código limpo.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia de Conversão",
    description:
      "Design guiado por dados. Cada elemento visual é pensado para conduzir o usuário à decisão de negócio.",
  },
  {
    icon: MapPin,
    title: "Posicionamento Authority",
    description:
      "Construção de autoridade digital focada em empresas que exigem percepção premium de seus clientes.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação Direta",
    description:
      "Pontos de contato integrados (WhatsApp, CRM) para reduzir o atrito entre o cliente e o fechamento.",
  },
  {
    icon: Zap,
    title: "Performance Extrema",
    description:
      "Otimização rigorosa de tempo de carregamento e acessibilidade para máxima retenção de usuários.",
  },
  {
    icon: Headphones,
    title: "Parceria Estratégica",
    description:
      "Não entregamos apenas código. Acompanhamos a evolução do seu negócio com suporte e auditoria contínua.",
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
    title: "Plataformas Corporativas",
    description:
      "Presença digital robusta para empresas que buscam estabelecer autoridade, apresentar portfólio estruturado e gerar confiança no mercado B2B ou B2C.",
    features: [
      "Arquitetura da Informação estruturada",
      "Design System proprietário",
      "Painel de controle customizado",
      "Integração com ecossistema interno",
    ],
    slug: "sites-institucionais",
  },
  {
    icon: Layout,
    title: "High-Converting Pages",
    description:
      "Estruturas focadas exclusivamente em funis de venda, captação de leads e lançamento de produtos, com otimização contínua de conversão (CRO).",
    features: [
      "Copywriting focado em objeções",
      "Métricas de rastreamento avançado",
      "Formulários de qualificação",
      "Testes e validação de interface",
    ],
    slug: "landing-pages",
  },
  {
    icon: Database,
    title: "Engenharia de Software",
    description:
      "Desenvolvimento sob medida para necessidades operacionais complexas. De portais de clientes a sistemas de gestão interna.",
    features: [
      "Dashboards analíticos",
      "Arquitetura Cloud-native",
      "Regras de negócio complexas",
      "Controle granular de permissões",
    ],
    slug: "sistemas-web",
  },
  {
    icon: Wrench,
    title: "Auditoria & Manutenção",
    description:
      "Acompanhamento técnico para garantir segurança, evolução tecnológica e integridade do seu principal ativo digital.",
    features: [
      "Auditoria de Segurança (SecOps)",
      "Monitoramento de uptime 24/7",
      "Escalabilidade técnica",
      "Resolução pró-ativa de incidentes",
    ],
    slug: "manutencao-suporte",
  },
  {
    icon: Link2,
    title: "Conectividade & APIs",
    description:
      "Sincronização de dados entre seu site e os sistemas que movem sua operação, como ERPs, plataformas de pagamento e ferramentas de automação.",
    features: [
      "Integrações de Gateways",
      "Fluxos de automação (Webhooks)",
      "Integração com CRM",
      "APIs Restful e GraphQL",
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
    title: "Diagnóstico",
    description:
      "Mapeamento profundo do cenário do seu negócio, identificação de gargalos de comunicação e alinhamento de objetivos comerciais.",
    icon: Search,
  },
  {
    number: "02",
    title: "Arquitetura Visual",
    description:
      "Elaboração de interfaces baseadas em comportamento de usuário (UX) e design de alto padrão (UI), garantindo coerência de marca.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Engenharia Técnica",
    description:
      "Construção do código com tecnologias modernas, garantindo estabilidade, segurança e performance impecável em todos os dispositivos.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Auditoria & Lançamento",
    description:
      "Testes rigorosos de stress, validação de SEO técnico e deploy assistido para garantir que a transição seja perfeita.",
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
      "Presença digital completa para empresa do agronegócio em LEM. Plataforma com área de produtos, contato direto e integração com redes sociais.",
    image: "/images/portfolio-1.svg",
    tags: ["Next.js", "SEO", "Responsivo"],
  },
  {
    title: "Clínica Vida",
    category: "Landing Page",
    categorySlug: "landing-page",
    description: "Landing page de alta conversão para clínica médica local com agendamento online via WhatsApp e depoimentos de pacientes.",
    image: "/images/portfolio-2.svg",
    tags: ["React", "Conversão", "WhatsApp"],
  },
  {
    title: "Sabor do Oeste",
    category: "Site Institucional",
    categorySlug: "institucional",
    description:
      "Site premium para restaurante com cardápio digital interativo, galeria de fotos e sistema de reservas.",
    image: "/images/portfolio-4.svg",
    tags: ["Design", "Mobile-first", "SEO"],
  },
  {
    title: "FitZone Academy",
    category: "Landing Page",
    categorySlug: "landing-page",
    description:
      "Página de vendas para academia com apresentação de planos, depoimentos e botão de agendamento de aula experimental.",
    image: "/images/portfolio-6.svg",
    tags: ["Vendas", "Agendamento", "CTA"],
  },
  {
    title: "Construtora Horizonte",
    category: "Site Institucional",
    categorySlug: "institucional",
    description:
      "Site corporativo para construtora regional com galeria de obras, timeline de empreendimentos e formulário de contato qualificado.",
    image: "/images/portfolio-7.svg",
    tags: ["Institucional", "Galeria", "Forms"],
  },
  {
    title: "Pet Center Oeste",
    category: "Landing Page",
    categorySlug: "landing-page",
    description:
      "Landing page para clínica veterinária com agendamento de consultas, listagem de serviços e mapa de localização.",
    image: "/images/portfolio-8.svg",
    tags: ["Landing", "Maps", "WhatsApp"],
  },
  {
    title: "Studio Bella",
    category: "Site Institucional",
    categorySlug: "institucional",
    description:
      "Site elegante para salão de beleza com portfólio de trabalhos, preços e agendamento online integrado.",
    image: "/images/portfolio-9.svg",
    tags: ["Design", "Portfólio", "Booking"],
  },
  {
    title: "Auto Peças LEM",
    category: "Landing Page",
    categorySlug: "landing-page",
    description:
      "Página institucional para loja de autopeças com catálogo de produtos, orçamento via WhatsApp e localização.",
    image: "/images/portfolio-10.svg",
    tags: ["Catálogo", "WhatsApp", "SEO"],
  },
];

export const PORTFOLIO_CATEGORIES = [
  "Todos",
  "institucional",
  "landing-page",
];

export const PORTFOLIO_CATEGORY_LABELS: Record<string, string> = {
  Todos: "Todos",
  institucional: "Sites Institucionais",
  "landing-page": "Landing Pages",
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
    name: "Roberto Almeida",
    role: "Diretor Comercial",
    company: "AgroX Digital",
    content:
      "A reestruturação da nossa presença digital mudou completamente a percepção dos nossos clientes em LEM. A BlackDev foi cirúrgica na execução tecnológica e no design da nossa plataforma.",
    rating: 5,
  },
  {
    name: "Dra. Marina Santos",
    role: "Diretora Clínica",
    company: "Instituto Vida",
    content:
      "Precisávamos de um ambiente digital que transmitisse a mesma segurança e seriedade da nossa clínica. O resultado final superou nossas expectativas em termos de performance e clareza.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Sócio-Diretor",
    company: "Oeste Logistics",
    content:
      "A estabilidade do sistema web desenvolvido para nossa operação interna otimizou nossos processos em 40%. A comunicação com a equipe técnica sempre foi direta e transparente.",
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
    question: "Como os valores são estruturados?",
    answer:
      "Avaliamos o escopo de cada projeto de forma individual. Não trabalhamos com templates ou modelos engessados. Os valores refletem a complexidade da arquitetura, o design de interface e a engenharia envolvida. Realizamos um diagnóstico inicial gratuito para apresentar uma proposta técnica detalhada.",
  },
  {
    question: "Qual a estimativa de tempo para implementação?",
    answer:
      "Plataformas institucionais demandam de 10 a 20 dias úteis, enquanto sistemas web corporativos são avaliados conforme a regra de negócio. Mantemos cronogramas rígidos e atualizações de status semanais com nossos parceiros.",
  },
  {
    question: "O projeto possui adaptação para dispositivos móveis?",
    answer:
      "Absolutamente. A engenharia front-end é construída com fluidez total (fluid layout), garantindo que a interface opere perfeitamente em qualquer proporção de tela, priorizando sempre a experiência mobile-first.",
  },
  {
    question: "Qual é o nível de suporte oferecido pós-lançamento?",
    answer:
      "Estabelecemos contratos de manutenção que cobrem auditorias de segurança, integridade do servidor, atualizações de infraestrutura e suporte consultivo. O objetivo é manter o ativo digital performando sem interrupções.",
  },
  {
    question: "Como funciona a dinâmica de trabalho com a BlackDev?",
    answer:
      "Nossa metodologia baseia-se em quatro pilares: Diagnóstico comercial, Arquitetura Visual (UX/UI), Engenharia Técnica de desenvolvimento e, finalmente, Auditoria de Lançamento. O cliente valida etapas cruciais sem surpresas técnicas.",
  },
  {
    question: "O atendimento se restringe a Luís Eduardo Magalhães?",
    answer:
      "Nossa operação técnica está baseada em LEM, porém atendemos empresas de diferentes polos corporativos do Brasil de forma remota, mantendo a mesma proximidade estratégica.",
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
    title: "Rigor Técnico",
    description:
      "Não utilizamos atalhos. Construímos arquiteturas escaláveis e escrevemos código limpo para assegurar estabilidade de longo prazo.",
    icon: Code2,
  },
  {
    title: "Design de Performance",
    description:
      "O visual não é apenas estético. Cada escolha de interface é fundamentada em métricas, usabilidade e comportamento humano.",
    icon: Layout,
  },
  {
    title: "Transparência",
    description:
      "Comunicação direta, cronogramas respeitados e clareza total sobre as limitações e possibilidades técnicas de cada projeto.",
    icon: Search,
  },
  {
    title: "Orientação a Negócios",
    description:
      "Compreendemos que tecnologia é o meio, não o fim. Nossas soluções são desenhadas para amplificar autoridade e captação.",
    icon: TrendingUp,
  },
];
