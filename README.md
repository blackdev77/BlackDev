# BlackDev - Site Institucional

Site institucional premium da BlackDev, empresa de desenvolvimento web de Luís Eduardo Magalhães - BA.

## Tecnologias Utilizadas
- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Componentes**: Headless UI, React Hook Form

## Estrutura do Projeto
O projeto foi estruturado seguindo as melhores práticas do Next.js App Router:
- `src/app/`: Páginas e roteamento.
- `src/components/`: Componentes reutilizáveis (divididos em `home`, `layout` e `ui`).
- `src/lib/constants.ts`: Arquivo centralizado com todos os dados do site (portfólio, serviços, etc).

## Como rodar localmente

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Como customizar
Toda a configuração de dados (texto do hero, serviços, depoimentos, número do WhatsApp) está localizada no arquivo `src/lib/constants.ts`. Basta alterá-lo para que todo o site seja atualizado automaticamente.

## Deploy

O site está otimizado para deploy na **Vercel** ou **Hostinger**.

### Vercel (Recomendado)
1. Crie uma conta na [Vercel](https://vercel.com).
2. Conecte seu repositório do GitHub.
3. Clique em **Deploy**. A Vercel detectará automaticamente que é um projeto Next.js.

### Custom Server / Hostinger (cPanel / VPS)
Para fazer o build de produção:
```bash
npm run build
npm run start
```
*Nota: Para servidores que exigem exportação estática, adicione `output: 'export'` no `next.config.ts`.*
