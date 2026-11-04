/* Planta · catálogo de ferramentas e modelos de projeto.
   Usado pela página (window.PLANTA) e pelo script de seed (module.exports). */
(function (root) {
  /* 50 ferramentas mais usadas por quem trabalha no digital, na ordem de um projeto: planejar, construir, publicar, automatizar e vender.
     logo: desenho em logos.js (Simple Icons). Sem logo oficial livre: hex da marca + sigla. */
  const TOOLS = {
    // Inteligência artificial
    claude: { name: "Claude Code", role: "IA que escreve e revisa o código", color: 'orange', mono: 'CC', cat: 'Inteligência artificial' },
    chatgpt: { name: "ChatGPT", role: "Assistente de IA para tudo", color: 'green', mono: 'GPT', cat: 'Inteligência artificial' },
    gemini: { name: "Gemini", role: "IA do Google", color: 'indigo', mono: 'Ge', cat: 'Inteligência artificial' },
    perplexity: { name: "Perplexity", role: "Pesquisa com fontes", color: 'cyan', mono: 'Px', cat: 'Inteligência artificial' },
    cursor: { name: "Cursor", role: "Editor de código com IA", color: 'ink', mono: 'Cu', cat: 'Inteligência artificial' },
    lovable: { name: "Lovable", role: "Cria apps conversando", color: 'pink', mono: 'Lv', cat: 'Inteligência artificial', hex: '#F25D8E' },
    // Planejar e organizar
    notion: { name: "Notion", role: "Documentos e organização", color: 'ink', mono: 'N', cat: 'Planejar e organizar' },
    figma: { name: "Figma", role: "Desenho das telas", color: 'red', mono: 'Fg', cat: 'Planejar e organizar' },
    canva: { name: "Canva", role: "Artes e apresentações", color: 'cyan', mono: 'Ca', cat: 'Planejar e organizar' },
    miro: { name: "Miro", role: "Quadro colaborativo", color: 'yellow', mono: 'Mi', cat: 'Planejar e organizar' },
    trello: { name: "Trello", role: "Quadro de tarefas", color: 'blue', mono: 'Tr', cat: 'Planejar e organizar' },
    clickup: { name: "ClickUp", role: "Gestão de projetos", color: 'purple', mono: 'CU', cat: 'Planejar e organizar' },
    // Construir
    vscode: { name: "VS Code", role: "Editor onde o projeto vive", color: 'blue', mono: 'VS', cat: 'Construir', hex: '#007ACC' },
    github: { name: "GitHub", role: "Guarda o código e as versões", color: 'ink', mono: 'GH', cat: 'Construir' },
    wordpress: { name: "WordPress", role: "Sites e blogs", color: 'blue', mono: 'WP', cat: 'Construir' },
    webflow: { name: "Webflow", role: "Sites visuais sem código", color: 'blue', mono: 'Wf', cat: 'Construir' },
    framer: { name: "Framer", role: "Landing pages animadas", color: 'blue', mono: 'Fr', cat: 'Construir' },
    shopify: { name: "Shopify", role: "Loja virtual", color: 'green', mono: 'Sh', cat: 'Construir' },
    // Publicar e hospedar
    pages: { name: "GitHub Pages", role: "Publica o site de graça", color: 'indigo', mono: 'GP', cat: 'Publicar e hospedar' },
    vercel: { name: "Vercel", role: "Hospeda apps e sites", color: 'ink', mono: 'Ve', cat: 'Publicar e hospedar' },
    netlify: { name: "Netlify", role: "Hospeda sites estáticos", color: 'mint', mono: 'Nt', cat: 'Publicar e hospedar' },
    cloudflare: { name: "Cloudflare", role: "DNS, segurança e Workers", color: 'orange', mono: 'CF', cat: 'Publicar e hospedar' },
    hostinger: { name: "Hostinger", role: "Domínio, DNS e hospedagem", color: 'purple', mono: 'Ho', cat: 'Publicar e hospedar' },
    // Dados e arquivos
    supabase: { name: "Supabase", role: "Banco de dados e login", color: 'green', mono: 'Sb', cat: 'Dados e arquivos' },
    firebase: { name: "Firebase", role: "Backend do Google", color: 'orange', mono: 'Fb', cat: 'Dados e arquivos' },
    sheets: { name: "Google Sheets", role: "Planilhas online", color: 'green', mono: 'GS', cat: 'Dados e arquivos' },
    airtable: { name: "Airtable", role: "Planilha com cara de banco", color: 'cyan', mono: 'At', cat: 'Dados e arquivos' },
    drive: { name: "Google Drive", role: "Entrega de arquivos", color: 'yellow', mono: 'GD', cat: 'Dados e arquivos' },
    // Automação e atendimento
    n8n: { name: "n8n", role: "Automações no seu servidor", color: 'pink', mono: 'n8n', cat: 'Automação e atendimento' },
    make: { name: "Make", role: "Conecta apps sem código", color: 'purple', mono: 'Mk', cat: 'Automação e atendimento' },
    zapier: { name: "Zapier", role: "Automações prontas", color: 'orange', mono: 'Zp', cat: 'Automação e atendimento' },
    manychat: { name: "ManyChat", role: "Funis no Instagram", color: 'blue', mono: 'MC', cat: 'Automação e atendimento', hex: '#0084FF' },
    zapi: { name: "Z-API", role: "API de WhatsApp", color: 'green', mono: 'Z', cat: 'Automação e atendimento' },
    whatsapp: { name: "WhatsApp", role: "Atendimento e vendas", color: 'green', mono: 'WA', cat: 'Automação e atendimento' },
    // Tráfego e análise
    meta: { name: "Meta Ads", role: "Anúncios no Instagram e Facebook", color: 'blue', mono: 'MA', cat: 'Tráfego e análise' },
    googleads: { name: "Google Ads", role: "Anúncios no Google", color: 'blue', mono: 'GA', cat: 'Tráfego e análise' },
    analytics: { name: "Google Analytics", role: "Visitas e conversões", color: 'orange', mono: 'An', cat: 'Tráfego e análise' },
    gtm: { name: "Tag Manager", role: "Pixels e eventos do site", color: 'blue', mono: 'TM', cat: 'Tráfego e análise' },
    // Vender e receber
    hotmart: { name: "Hotmart", role: "Venda de infoprodutos", color: 'orange', mono: 'Hm', cat: 'Vender e receber', hex: '#F04E23' },
    kiwify: { name: "Kiwify", role: "Checkout de infoprodutos", color: 'green', mono: 'Kw', cat: 'Vender e receber' },
    cakto: { name: "Cakto", role: "Checkout e pagamentos", color: 'mint', mono: 'Ck', cat: 'Vender e receber' },
    stripe: { name: "Stripe", role: "Pagamentos internacionais", color: 'indigo', mono: 'St', cat: 'Vender e receber' },
    mercadopago: { name: "Mercado Pago", role: "Pagamentos e maquininha", color: 'cyan', mono: 'MP', cat: 'Vender e receber' },
    pix: { name: "Pix", role: "Pagamento instantâneo", color: 'mint', mono: 'Pix', cat: 'Vender e receber' },
    // Conteúdo e comunicação
    instagram: { name: "Instagram", role: "Conteúdo e alcance", color: 'pink', mono: 'IG', cat: 'Conteúdo e comunicação' },
    youtube: { name: "YouTube", role: "Vídeos e aulas", color: 'red', mono: 'YT', cat: 'Conteúdo e comunicação' },
    tiktok: { name: "TikTok", role: "Vídeos curtos", color: 'ink', mono: 'TT', cat: 'Conteúdo e comunicação' },
    capcut: { name: "CapCut", role: "Edição de vídeo", color: 'ink', mono: 'Cc', cat: 'Conteúdo e comunicação' },
    gmail: { name: "Gmail", role: "E-mail", color: 'red', mono: 'Gm', cat: 'Conteúdo e comunicação' },
    calendly: { name: "Calendly", role: "Agendamentos", color: 'blue', mono: 'Ca', cat: 'Conteúdo e comunicação' },
  };

  const rid = (p) => p + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);
  const seed = () => Math.floor(Math.random() * 2e9);

  function base(type, o) {
    return Object.assign({
      id: rid('e'), type, x: 0, y: 0, w: 0, h: 0,
      stroke: 'ink', fill: 'none', fillStyle: 'hachure', sw: 2, rough: 1, dash: false,
      font: 'hand', fs: 20, text: '', seed: seed(),
    }, o);
  }
  const tool = (key, x, y) => base('tool', { x, y, w: 236, h: 72, tool: key, show: 'both', font: 'clean' });
  const note = (text, x, y, color, w = 210, h = 130) => base('note', { x, y, w, h, fill: color, text, fs: 18 });
  const title = (text, x, y) => base('text', { x, y, w: text.length * 19, h: 52, text, fs: 40 });
  const goal = (text, x, y, color) => base('ellipse', { x, y, w: 180, h: 100, stroke: color, fill: color, fillStyle: 'hachure', text, fs: 24 });
  function arrow(a, b, text, color = 'gray') {
    const ax = a.x + a.w / 2, ay = a.y + a.h / 2, bx = b.x + b.w / 2, by = b.y + b.h / 2;
    return base('arrow', { x: ax, y: ay, points: [[0, 0], [bx - ax, by - ay]], startId: a.id, endId: b.id, text, fs: 17, stroke: color });
  }
  function squiggle(x, y, len) {
    const pts = [];
    for (let i = 0; i <= len; i += 12) pts.push(i, Math.round(Math.sin(i / 38) * 5 + i * 0.012));
    return base('pen', { x, y, w: len, h: 14, points: pts, stroke: 'orange', sw: 3, font: 'hand' });
  }
  const blk = (type, text = '', extra) => Object.assign({ id: rid('b'), type, text }, extra);
  const todo = (text, checked = false) => blk('todo', text, { checked });
  const toolBlk = (key) => blk('tool', '', { tool: key });

  const TEMPLATES = [
    {
      key: 'blank', name: 'Em branco', desc: 'Quadro vazio e uma página com objetivo e etapas.', color: 'blue', stack: [],
      build() {
        return {
          elements: [],
          blocks: [blk('h2', 'Objetivo'), blk('p', ''), blk('h2', 'Etapas'), todo('')],
        };
      },
    },
    {
      key: 'site', name: 'Site no ar', desc: 'Do briefing ao domínio próprio com Claude Code, GitHub e Hostinger.', color: 'blue',
      stack: ['claude', 'github', 'pages', 'hostinger'],
      build() {
        const t = title('Do zero ao site no ar', 0, -170);
        const idea = note('Ideia: site da academia com horários e botão de WhatsApp', -300, -30, 'yellow', 220, 132);
        const c = tool('claude', 0, 0), g = tool('github', 330, 0), p = tool('pages', 660, 0), h = tool('hostinger', 990, 0);
        const live = goal('No ar!', 1320, -14, 'green');
        return {
          elements: [
            t, squiggle(2, -112, 380), idea, c, g, p, h, live,
            arrow(idea, c, 'briefing'), arrow(c, g, 'commit'), arrow(g, p, 'deploy'), arrow(p, h, 'domínio'), arrow(h, live, 'DNS', 'green'),
            note('Peça o site em português, com dados reais do cliente.', 12, 120, 'orange'),
            note('Cada mudança vira um commit. Dá pra voltar qualquer versão.', 342, 120, 'gray'),
            note('Settings › Pages › branch main. Sai um link .github.io', 672, 120, 'indigo'),
            note('CNAME do www e registros A apontando pro GitHub.', 1002, 120, 'purple'),
          ],
          blocks: [
            blk('h2', 'Objetivo'),
            blk('p', 'Colocar no ar um site de uma página para a academia, com horários das aulas e botão de WhatsApp.'),
            blk('h2', 'Stack'),
            toolBlk('claude'), toolBlk('github'), toolBlk('pages'), toolBlk('hostinger'),
            blk('h2', 'Etapas'),
            todo('Escrever o briefing com nome, endereço, horários e fotos', true),
            todo('Gerar a primeira versão com o Claude Code', true),
            todo('Criar o repositório no GitHub e subir o código', true),
            todo('Ativar o GitHub Pages na branch main'),
            todo('Apontar o domínio na Hostinger (CNAME e registros A)'),
            todo('Testar no celular e mandar o link pro cliente'),
            blk('divider'),
            blk('callout', 'O HTTPS pode levar alguns minutos depois do DNS. Se travar, remova e recoloque o domínio no GitHub Pages.'),
          ],
        };
      },
    },
    {
      key: 'automacao', name: 'Automação de atendimento', desc: 'Comentário no Instagram vira proposta no WhatsApp, sem ninguém digitar.', color: 'green',
      stack: ['manychat', 'cloudflare', 'zapi', 'supabase'],
      build() {
        const t = title('Comentário vira proposta', 0, -170);
        const start = note('A pessoa comenta PROPOSTA no Reels', -300, -30, 'pink', 220, 132);
        const m = tool('manychat', 0, 0), w = tool('cloudflare', 330, 0), z = tool('zapi', 660, 0), s = tool('supabase', 330, 200);
        const done = goal('Lead atendido', 990, -14, 'green');
        return {
          elements: [
            t, squiggle(2, -112, 400), start, m, w, z, s, done,
            arrow(start, m, 'gatilho'), arrow(m, w, 'webhook'), arrow(w, z, 'envia'), arrow(w, s, 'salva o lead', 'green'), arrow(z, done, 'PDF', 'green'),
            note('O fluxo inteiro mora no código do Worker. O ManyChat só chama.', 0, 120, 'cyan', 236, 120),
            note('Manda o PDF da proposta como arquivo, nunca como link.', 672, 120, 'green'),
          ],
          blocks: [
            blk('h2', 'Objetivo'),
            blk('p', 'Quem comenta a palavra no Reels recebe a proposta em PDF no WhatsApp em menos de um minuto.'),
            blk('h2', 'Stack'),
            toolBlk('manychat'), toolBlk('cloudflare'), toolBlk('zapi'), toolBlk('supabase'),
            blk('h2', 'Etapas'),
            todo('Criar a automação de comentário no ManyChat', true),
            todo('Publicar o Worker que recebe o webhook'),
            todo('Conectar a instância da Z-API e testar no meu número'),
            todo('Salvar cada lead no Supabase com a origem'),
            blk('h2', 'Anotações'),
            blk('bullet', 'O número do cliente sempre vem do lead, nunca de palpite.'),
            blk('bullet', 'Testar primeiro no meu WhatsApp antes de ligar pra todos.'),
          ],
        };
      },
    },
    {
      key: 'infoproduto', name: 'Lançamento de infoproduto', desc: 'Anúncio, página de vendas, checkout, entrega e recuperação de Pix.', color: 'purple',
      stack: ['meta', 'lovable', 'cakto', 'drive', 'zapi'],
      build() {
        const t = title('Lançamento do ebook', 0, -170);
        const offer = note('Oferta: ebook R$97 com vídeos de bônus', -300, -30, 'yellow', 220, 132);
        const a = tool('meta', 0, 0), l = tool('lovable', 330, 0), c = tool('cakto', 660, 0), d = tool('drive', 990, 0), z = tool('zapi', 660, 200);
        const done = goal('Aluno dentro', 1320, -14, 'purple');
        return {
          elements: [
            t, squiggle(2, -112, 360), offer, a, l, c, d, z, done,
            arrow(offer, a, ''), arrow(a, l, 'clique'), arrow(l, c, 'compra'), arrow(c, d, 'aprovado'), arrow(c, z, 'Pix pendente', 'red'), arrow(d, done, 'acesso', 'purple'),
            note('Sequência de 5 mensagens para recuperar o Pix.', 1002, 190, 'green'),
          ],
          blocks: [
            blk('h2', 'Objetivo'),
            blk('p', 'Validar a oferta com R$100 por dia de anúncio e chegar nas primeiras 30 vendas.'),
            blk('h2', 'Stack'),
            toolBlk('meta'), toolBlk('lovable'), toolBlk('cakto'), toolBlk('drive'), toolBlk('zapi'),
            blk('h2', 'Etapas'),
            todo('Escrever a promessa e o mecanismo'),
            todo('Montar a página de vendas'),
            todo('Criar o produto e o checkout na Cakto'),
            todo('Subir 3 criativos e ligar o anúncio'),
            todo('Ligar a recuperação de Pix pela Z-API'),
          ],
        };
      },
    },
  ];

  function newProject({ name, template = 'blank', status = 'ideia', color } = {}) {
    const tpl = TEMPLATES.find((t) => t.key === template) || TEMPLATES[0];
    const now = Date.now();
    const built = tpl.build();
    return {
      id: rid('p'), name: name || (tpl.key === 'blank' ? 'Novo projeto' : tpl.name), status, color: color || tpl.color,
      createdAt: now, updatedAt: now, elements: built.elements, blocks: built.blocks,
    };
  }

  const api = { TOOLS, TEMPLATES, newProject };
  root.PLANTA = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
