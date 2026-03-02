

# Mudar Tema para Fundo Branco + Melhorar Tipografia

## Resumo

Inverter completamente a paleta de cores do site: sair do fundo preto com letras brancas para fundo branco com textos em preto e vermelho. Ao mesmo tempo, atualizar a tipografia para uma combinacao mais moderna e sofisticada.

---

## 1. Tipografia Premium

Trocar as fontes atuais (Playfair Display + DM Sans) por uma combinacao mais moderna e elegante:

- **Headings**: `Inter` ou `Outfit` (sem serifa, moderno, limpo) -- peso 600-800
- **Body**: `Inter` (sans-serif, excelente legibilidade)

Isso vai dar um visual mais clean e contemporaneo, alinhado com o padrao de marcas de alto nivel.

## 2. Paleta de Cores -- Inversao Completa

Alterar as CSS variables em `src/index.css`:

| Variavel | Antes (escuro) | Depois (claro) |
|----------|----------------|-----------------|
| `--background` | 0 0% 4% (preto) | 0 0% 100% (branco) |
| `--foreground` | 0 0% 100% (branco) | 0 0% 8% (preto) |
| `--card` | 0 0% 7% | 0 0% 98% |
| `--card-foreground` | branco | preto |
| `--muted` | 0 0% 15% | 0 0% 96% |
| `--muted-foreground` | 0 0% 65% | 0 0% 40% |
| `--border` | 0 0% 16% | 0 0% 90% |
| `--primary` | vermelho (mantido) | vermelho (mantido) |
| `--primary-foreground` | branco (mantido) | branco (mantido) |

## 3. Componentes Impactados

Ajustes necessarios em componentes que usam cores hardcoded (nao via variavel CSS):

- **HeroSection.tsx**: Remover glow escuro, ajustar grid overlay e vinheta para fundo branco
- **Navbar.tsx**: Atualizar `bg-background/90` (ja funciona via variavel), ajustar borda
- **MarqueeSection.tsx**: Gradientes de fade nas bordas usam `from-background` (funciona automatico)
- **LoadingScreen.tsx**: Usa `bg-background` (funciona automatico)
- **Footer.tsx**: Borda e textos ajustam automaticamente
- **WhyChooseUs.tsx**: Cards com `bg-foreground/[0.04]` precisam de revisao para contraste no claro
- **LeadFormSection.tsx**: Bordas e inputs transparentes funcionam, mas revisar contraste
- **TestimonialsSection.tsx**: Revisar botoes de navegacao

## 4. Detalhes Tecnicos

### Arquivo: `src/index.css`
- Trocar URL do Google Fonts para `Inter:wght@300;400;500;600;700;800`
- Atualizar todas as CSS variables para a paleta clara
- Atualizar `--font-heading` e `--font-body` para `Inter`

### Arquivo: `tailwind.config.ts`
- Atualizar `fontFamily` para `Inter`

### Arquivo: `src/components/HeroSection.tsx`
- Trocar glow vermelho escuro por um glow sutil claro
- Ajustar grid para funcionar em fundo branco
- Vinheta: inverter gradiente radial

### Arquivo: `src/components/WhyChooseUs.tsx`
- Trocar `bg-foreground/[0.04]` por `bg-muted` ou `bg-card` para cards

### Arquivo: `src/components/Navbar.tsx`
- O WhatsApp button verde precisa garantir contraste no fundo claro

### Arquivo: `src/components/LeadFormSection.tsx`
- Revisar placeholder e borda de inputs para contraste claro

---

## Resultado Esperado

Site limpo, moderno, fundo branco com tipografia Inter, textos pretos e destaques em vermelho. Visual sofisticado e leve, mantendo toda a estrutura e funcionalidade existente.

