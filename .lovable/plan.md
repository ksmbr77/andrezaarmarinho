

## Correcao de Desempenho Mobile e Otimizacao Geral

Apos analise completa do codigo, identifiquei os principais problemas que afetam o score de desempenho no PageSpeed mobile:

---

### 1. Remover carregamento duplicado da fonte LEMON MILK

A fonte LEMON MILK esta sendo carregada **duas vezes**: uma no `index.html` via `<link>` e outra no `index.css` via `@import`. Isso duplica o download e atrasa o First Contentful Paint.

**Acao**: Remover o `@import` do `index.css` e manter apenas o `<link>` no `index.html` (que ja tem `preconnect`). Adicionar `font-display: swap` para evitar texto invisivel durante o carregamento.

---

### 2. Reduzir tempo da Loading Screen

O loading screen espera 1200ms artificialmente antes de mostrar o conteudo. Isso prejudica diretamente o Largest Contentful Paint (LCP).

**Acao**: Reduzir de 1200ms para 600ms no `Index.tsx`.

---

### 3. Otimizar Instagram Embeds (maior impacto)

Os dois iframes do Instagram sao os maiores viloes de performance - cada embed carrega ~2MB+ de recursos (JS, CSS, imagens). Mesmo com lazy loading, eles impactam o Total Blocking Time (TBT) e o peso total da pagina.

**Acao**: Manter o lazy loading mas adicionar um placeholder mais explicito que so carrega o iframe quando o usuario clicar no botao de play (click-to-load pattern). Isso evita carregar os embeds automaticamente ao scroll.

---

### 4. Reduzir animacoes infinitas no mobile

Animacoes CSS infinitas (`animate-pulse`, `animate-whatsapp-pulse`, `animate-gentle-bounce`, marquee) consomem GPU constantemente. No mobile isso impacta o frame rate e drena bateria.

**Acao**:
- Usar `@media (prefers-reduced-motion: reduce)` para desativar animacoes pesadas
- Reduzir duplicacao de itens no MarqueeSection (de 6x para 4x)
- Remover `willChange: "transform"` fixo do marquee (so deve ser usado temporariamente)

---

### 5. Otimizar backdrop-blur no Navbar

`backdrop-blur` e computacionalmente caro no mobile. O navbar usa `backdrop-blur-xl` que forca composicao de camadas.

**Acao**: Substituir `backdrop-blur-xl` por `backdrop-blur-md` (menos intenso) e usar `bg-background/95` em vez de `bg-background/90` para compensar visualmente.

---

### 6. Adicionar `font-display: swap` nas fontes

A fonte Inter do Google Fonts ja pode ter swap, mas a LEMON MILK do cdnfonts nao tem, causando Flash of Invisible Text (FOIT).

**Acao**: Adicionar `&display=swap` na URL do cdnfonts e verificar o da Google Fonts.

---

### 7. Adicionar meta tags de performance no HTML

**Acao**: Adicionar `<meta name="theme-color">` e DNS prefetch para dominos externos (Instagram, Google Maps, WhatsApp).

---

### Resumo dos arquivos a editar

| Arquivo | Mudanca |
|---|---|
| `index.html` | Remover link duplicado LEMON MILK, adicionar dns-prefetch, theme-color |
| `src/index.css` | Remover @import duplicado, adicionar prefers-reduced-motion |
| `src/pages/Index.tsx` | Reduzir loading de 1200ms para 600ms |
| `src/components/Navbar.tsx` | Reduzir backdrop-blur-xl para backdrop-blur-md |
| `src/components/InstagramSection.tsx` | Implementar click-to-load nos iframes |
| `src/components/MarqueeSection.tsx` | Reduzir duplicacao de itens, remover willChange fixo |
| `src/components/HeroSection.tsx` | Simplificar gradientes sobrepostos |
| `src/components/WhatsAppButton.tsx` | Usar prefers-reduced-motion no pulse |

