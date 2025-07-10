# Real Locação e Turismo - Site Oficial

Site profissional para empresa de locação e turismo na Bahia.

## 🚀 Como Colocar Online

### Opção 1: Vercel (Recomendado - GRATUITO)

1. **Criar conta no Vercel:**
   - Acesse: https://vercel.com
   - Clique em "Sign Up" e crie uma conta (pode usar GitHub)

2. **Conectar o projeto:**
   - Clique em "New Project"
   - Conecte seu repositório GitHub (se tiver) ou faça upload dos arquivos
   - O Vercel detectará automaticamente que é um projeto Next.js

3. **Configurar domínio:**
   - Vercel fornece um domínio gratuito (ex: seu-projeto.vercel.app)
   - Para domínio personalizado: vá em Settings > Domains

### Opção 2: Netlify (GRATUITO)

1. **Criar conta no Netlify:**
   - Acesse: https://netlify.com
   - Clique em "Sign Up"

2. **Fazer deploy:**
   - Arraste a pasta do projeto para a área de deploy
   - Ou conecte com GitHub

3. **Configurar build:**
   - Build command: `npm run build`
   - Publish directory: `out` (se usar export) ou `.next`

### Opção 3: Hostinger/GoDaddy (PAGO)

1. **Comprar hospedagem:**
   - Hostinger: R$ 10-20/mês
   - GoDaddy: R$ 15-30/mês

2. **Fazer upload:**
   - Use File Manager ou FTP
   - Faça build: `npm run build && npm run export`
   - Faça upload da pasta `out`

## 🔧 Configurações Necessárias

### 1. Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Email (opcional)
EMAIL_SERVICE=gmail
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-app

# WhatsApp Business API (opcional)
WHATSAPP_TOKEN=seu-token
WHATSAPP_PHONE=5571999999999

# Google Analytics (opcional)
GA_TRACKING_ID=G-XXXXXXXXXX
```

### 2. Integrações Recomendadas

#### Email (Gratuito):
- **Gmail SMTP:** Para receber emails dos formulários
- **SendGrid:** Para emails transacionais (200 emails/dia grátis)

#### WhatsApp Business:
- **API Oficial:** Para receber mensagens automaticamente
- **Alternativa:** Link direto para WhatsApp

#### Analytics:
- **Google Analytics:** Para acompanhar visitantes
- **Google Search Console:** Para SEO

#### Pagamentos:
- **Pix:** Integração direta
- **Mercado Pago:** Para cartão de crédito
- **PagSeguro:** Alternativa

## 📱 Funcionalidades Implementadas

✅ **Site Responsivo** - Funciona em celular, tablet e computador  
✅ **Formulários Funcionais** - Contato e reservas  
✅ **Galeria de Fotos** - Com filtros e lightbox  
✅ **Depoimentos** - Carrossel automático  
✅ **Seção de Serviços** - Interativa  
✅ **Seção de Embarcações** - Com preços  
✅ **Botão WhatsApp** - Contato direto  
✅ **SEO Otimizado** - Para Google  

## 🎯 Próximos Passos

### Imediato (1-2 dias):
1. Escolher plataforma de deploy
2. Fazer deploy inicial
3. Configurar domínio
4. Testar formulários

### Curto Prazo (1 semana):
1. Adicionar fotos reais
2. Configurar email
3. Integrar WhatsApp
4. Adicionar Google Analytics

### Médio Prazo (1 mês):
1. Sistema de pagamentos
2. Calendário de reservas
3. Área administrativa
4. Blog/notícias

## 🛠️ Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Exportar para hospedagem estática
npm run export

# Deploy no Vercel
vercel
```

## 📞 Suporte

Para dúvidas sobre:
- **Deploy:** Consulte a documentação da plataforma escolhida
- **Funcionalidades:** Verifique os comentários no código
- **Personalização:** Edite os arquivos em `components/`

## 🔒 Segurança

- Formulários com validação
- Proteção contra spam
- HTTPS automático (Vercel/Netlify)
- Backup automático

---

**Desenvolvido com ❤️ para Real Locação e Turismo** 