

# Corrigir Alinhamento, Border Radius e Logos

## Problemas Identificados

1. **Logo "Andreza Armarinho" muito pequena** -- tanto na Navbar quanto no Footer
2. **Logo "Fly Agency" pouco visivel** no rodape (pequena e com opacity baixa)
3. **Border radius muito arredondado** -- botoes `rounded-full`, cards `rounded-2xl`/`rounded-3xl` precisam ser mais quadrados
4. **Botao "Proximo" rosa/desbotado** -- precisa ser vermelho solido
5. **Nova logo Fly Agency** -- o usuario enviou uma nova imagem para substituir a atual

---

## 1. Copiar nova logo Fly Agency para o projeto

Copiar `user-uploads://IMG_0313-2.PNG` para `src/assets/fly-agency.png` (substituindo a atual).

---

## 2. Aumentar logo Andreza Armarinho

**Navbar** (`src/components/Navbar.tsx`):
- De `h-10 md:h-14 lg:h-16` para `h-12 md:h-16 lg:h-20`

**Footer** (`src/components/Footer.tsx`):
- De `h-12 sm:h-16` para `h-16 sm:h-20`

---

## 3. Melhorar visibilidade da Fly Agency no rodape

**Footer** (`src/components/Footer.tsx`):
- Logo Fly: de `h-6 sm:h-8 opacity-80` para `h-10 sm:h-12 opacity-100`
- Texto "Fly Agency": de `text-xs sm:text-sm md:text-base` para `text-sm sm:text-base md:text-lg font-bold`
- Texto "Desenvolvido por": aumentar para `text-sm sm:text-base`

---

## 4. Reduzir border-radius global (mais quadrado)

**CSS** (`src/index.css`):
- Alterar `--radius: 0.75rem` para `--radius: 0.5rem`

**Botoes em todo o site** -- trocar `rounded-full` por `rounded-lg`:
- `HeroSection.tsx`: CTAs e badge
- `Navbar.tsx`: botao WhatsApp desktop e mobile
- `CategoriesSection.tsx`: cards de `rounded-2xl` para `rounded-xl`
- `WhyChooseUs.tsx`: cards de `rounded-2xl` para `rounded-xl`
- `OffersBanner.tsx`: container de `rounded-3xl` para `rounded-2xl`, botao CTA
- `LeadFormSection.tsx`: container de `rounded-3xl` para `rounded-xl`, botoes, chips de interesse
- `LocationSection.tsx`: botao e mapa container
- `Footer.tsx`: icones sociais de `rounded-full` para `rounded-lg`

**Classes globais** (`src/index.css`):
- `.btn-cta`, `.btn-cta-outline`, `.btn-whatsapp`: de `rounded-full` para `rounded-lg`
- `.glass-card`: de `rounded-2xl` para `rounded-xl`

---

## 5. Corrigir cor do botao "Proximo"

**LeadFormSection.tsx**:
- O botao ja tem `bg-primary text-primary-foreground` -- verificar se ha um conflito CSS com `disabled:opacity-40` que esta deixando rosa. Garantir que o estado ativo seja `bg-primary` solido (vermelho puro).

---

## Resumo de Arquivos

| Arquivo | Mudanca |
|---------|---------|
| `src/assets/fly-agency.png` | Substituir pela nova logo enviada |
| `src/index.css` | `--radius: 0.5rem`, atualizar classes `.btn-*` e `.glass-card` |
| `src/components/Navbar.tsx` | Logo maior, botao com `rounded-lg` |
| `src/components/HeroSection.tsx` | CTAs e badge com `rounded-lg` |
| `src/components/CategoriesSection.tsx` | Cards `rounded-xl` |
| `src/components/WhyChooseUs.tsx` | Cards `rounded-xl` |
| `src/components/OffersBanner.tsx` | Container `rounded-2xl`, botao `rounded-lg` |
| `src/components/LeadFormSection.tsx` | Container `rounded-xl`, botoes `rounded-lg`, chips `rounded-lg` |
| `src/components/LocationSection.tsx` | Botao `rounded-lg`, mapa `rounded-xl` |
| `src/components/Footer.tsx` | Logo maior, Fly Agency maior e mais visivel, icones `rounded-lg` |

