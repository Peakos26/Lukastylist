# Luka - Consultoria de Imagem Inteligente

Plataforma completa para Personal Stylists com 3 ecossistemas: Portal da Consultora, App da Cliente e Painel Administrativo.

## 🚀 Como Rodar

### Modo Simples
Dê duplo clique em `index.html` para abrir no navegador.

### Modo Servidor Local
```bash
python -m http.server 5173
# ou
npx serve -l 5173
```

Depois acesse: http://localhost:5173/

## 📁 Estrutura

- `index.html` - Landing/Hub (página inicial)
- `portal.html` - Portal da Consultora
- `app-cliente.html` - App da Cliente (device frame)
- `admin.html` - Painel Administrativo
- `css/` - Design system (styles.css, cliente.css)
- `js/` - Dados mock e lógica (data.js, app.js, cliente.js)

## 🎨 Design System

- Paleta: Camel/Creme (tons quentes, editorial)
- Fontes: Playfair Display (títulos) + Inter (corpo)
- Ícones: Lucide via CDN

## 📦 Stack

Protótipo 100% estático (HTML/CSS/JS) sem build e sem backend.

Stack-alvo para produção:
- Web: React/Next.js
- Backend: NestJS
- Banco: PostgreSQL
- IA: OpenAI/Claude/Gemini
- Mobile: Flutter
