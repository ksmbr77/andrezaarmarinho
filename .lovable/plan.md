
# Corrigir Responsividade e Alinhar Cores do Site

## Problema Principal
A Navbar tem logo e links em cor escura sobre o fundo vermelho do Hero, ficando quase invisivel. Alem disso, varios componentes precisam de ajustes de responsividade em mobile e desktop.

---

## 1. Navbar -- cores alinhadas ao hero vermelho

A navbar precisa detectar que esta sobre o hero vermelho e usar cores brancas:

- Quando `scrolled = false` (no topo/hero): links em `text-primary-foreground` (branco), icone hamburger branco, logo com filtro `brightness(0) invert(1)` para ficar branca
- Quando `scrolled = true` (rolou): manter como esta, com `bg-background/90` e links escuros
- Mobile menu: manter bg claro com links escuros (ja esta ok)
- Logo: `h-10 md:h-14 lg:h-16` (menor e mais proporcional)

**Arquivo**: `src/components/Navbar.tsx`

---

## 2. Hero Section -- responsividade

- Desktop: reduzir headline de `lg:text-[6.5rem]` para `lg:text-[5.5rem]` para nao quebrar em 3 linhas
- Mobile: manter `text-[2.2rem]` que esta ok
- CTAs mobile: garantir `w-full sm:w-auto` para botoes ficarem full-width no mobile e inline no desktop
- Badge: `text-[10px] sm:text-[11px]` para mobile
- Padding: `px-4 sm:px-6` para mais espaco lateral no mobile pequeno

**Arquivo**: `src/components/HeroSection.tsx`

---

## 3. Marquee Section -- responsividade

- Texto mobile: `text-2xl sm:text-3xl md:text-6xl` (menor em telas muito pequenas)
- Gaps: `gap-4 sm:gap-6 md:gap-10`

**Arquivo**: `src/components/MarqueeSection.tsx`

---

## 4. Categories Section -- responsividade

- Grid mobile: `grid-cols-2` com `gap-3 sm:gap-4 md:gap-6`
- Cards padding: `p-4 sm:p-5 md:p-8`
- Icone container: `w-12 h-12 sm:w-14 sm:h-14` para proporcionalidade
- Titulo da secao: `text-2xl sm:text-3xl md:text-5xl lg:text-6xl`
- Placeholder "espaco reservado": padding `p-6 sm:p-8 md:p-16`

**Arquivo**: `src/components/CategoriesSection.tsx`

---

## 5. WhyChooseUs -- responsividade

- Cards padding: `px-5 py-5 sm:px-7 sm:py-6`
- Titulo: `text-2xl sm:text-3xl md:text-5xl lg:text-6xl`
- Section padding: `py-16 sm:py-24 md:py-32 lg:py-40`

**Arquivo**: `src/components/WhyChooseUs.tsx`

---

## 6. Instagram Section -- responsividade

- Video containers: `min-h-[350px] sm:min-h-[400px] md:min-h-[500px]`
- Titulo: `text-2xl sm:text-3xl md:text-5xl`
- Section padding: `py-16 sm:py-24 md:py-32 lg:py-40`

**Arquivo**: `src/components/InstagramSection.tsx`

---

## 7. Testimonials -- responsividade

- Texto depoimento: `text-base sm:text-lg md:text-2xl lg:text-3xl`
- Section padding: `py-16 sm:py-24 md:py-32 lg:py-40`

**Arquivo**: `src/components/TestimonialsSection.tsx`

---

## 8. OffersBanner -- responsividade

- Padding interno: `p-6 sm:p-8 md:p-16 lg:p-20`
- Titulo: `text-2xl sm:text-3xl md:text-5xl`

**Arquivo**: `src/components/OffersBanner.tsx`

---

## 9. LeadForm -- responsividade

- Container padding: `p-5 sm:p-6 md:p-10`
- Titulo: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- Section padding: `py-16 sm:py-24 md:py-32 lg:py-40`

**Arquivo**: `src/components/LeadFormSection.tsx`

---

## 10. Location Section -- responsividade

- Map height mobile: `h-[250px] sm:h-[280px] md:h-full`
- Grid gap: `gap-8 sm:gap-12 md:gap-16`
- Titulo: `text-2xl sm:text-3xl md:text-5xl`

**Arquivo**: `src/components/LocationSection.tsx`

---

## 11. Footer -- responsividade e alinhamento

- Logo height: `h-12 sm:h-16`
- Credits text: `text-xs sm:text-sm md:text-base`
- Flex gap columns: `gap-8 sm:gap-16`
- Mobile: stack tudo em coluna com alinhamento centralizado

**Arquivo**: `src/components/Footer.tsx`

---

## 12. App.css -- remover estilos conflitantes

O `src/App.css` tem `#root { max-width: 1280px; margin: 0 auto; padding: 2rem; text-align: center; }` que pode estar limitando a largura do site e adicionando padding indesejado. Remover ou limpar esses estilos.

**Arquivo**: `src/App.css`

---

## Resumo de Arquivos

| Arquivo | Mudanca Principal |
|---------|-------------------|
| `src/components/Navbar.tsx` | Links/logo brancos sobre hero, escuros ao rolar |
| `src/components/HeroSection.tsx` | Headline menor desktop, CTAs full-width mobile |
| `src/components/MarqueeSection.tsx` | Texto menor mobile |
| `src/components/CategoriesSection.tsx` | Cards/grid responsivos |
| `src/components/WhyChooseUs.tsx` | Padding/titulo responsivos |
| `src/components/InstagramSection.tsx` | Min-height e titulo responsivos |
| `src/components/TestimonialsSection.tsx` | Texto depoimento responsivo |
| `src/components/OffersBanner.tsx` | Padding interno responsivo |
| `src/components/LeadFormSection.tsx` | Container/titulo responsivos |
| `src/components/LocationSection.tsx` | Map e grid responsivos |
| `src/components/Footer.tsx` | Layout mobile melhorado |
| `src/App.css` | Remover max-width/padding do #root |
