

# Corrigir Erros, Destacar Vermelho, Instagram e Melhorar Hero

## Problemas Identificados

1. **Instagram**: Os embeds aparecem mas estao com tamanho inadequado e o container nao tem destaque visual suficiente
2. **Cards de categoria**: Muito palidos, sem destaque vermelho -- parecem "lavados" no fundo branco
3. **Hero Section**: Funcional mas pode ser mais impactante com melhor uso do vermelho e hierarquia visual
4. **Cards "WhyChooseUs"**: Falta contraste e destaque vermelho nos cards
5. **Botao "Proximo" no formulario**: Aparece com cor desbotada (rosa claro ao inves de vermelho forte)

---

## Mudancas Planejadas

### 1. Hero Section -- mais impactante
- Adicionar um gradiente vermelho sutil no fundo (radial glow maior e mais visivel)
- Melhorar o badge "O Maior Armarinho de Sergipe" com borda vermelha mais forte
- Aumentar o destaque visual da linha vermelha abaixo de "Aqui"
- Adicionar um elemento decorativo vermelho (linha ou detalhe) entre o subtitulo e os CTAs

### 2. Cards de Categoria -- vermelho destacado
- Adicionar `bg-card` (ou `bg-white`) com borda mais visivel
- Icones com fundo vermelho mais forte (`bg-primary/15` para `bg-primary/20`)
- Borda inferior ou lateral vermelha nos cards (`border-b-2 border-primary/30`)
- Hover com gradiente vermelho mais intenso

### 3. Instagram Section -- corrigir e melhorar
- Aumentar a altura minima dos containers dos iframes para garantir visibilidade
- Adicionar borda vermelha mais forte nos containers (`border-primary/25`)
- Melhorar o placeholder de loading com fundo mais contrastante
- Garantir que o aspect-ratio permita visualizacao adequada do conteudo

### 4. WhyChooseUs -- cards com mais vermelho
- Borda esquerda vermelha nos cards (`border-l-3 border-primary/40`)
- Hover mais impactante com shadow vermelha

### 5. OffersBanner -- ja esta bom, pequenos ajustes de shadow

### 6. LeadFormSection -- corrigir botao desbotado
- Garantir que o botao "Proximo" use `bg-primary` corretamente (sem opacity)

---

## Arquivos Modificados

| Arquivo | Mudanca |
|---------|---------|
| `src/components/HeroSection.tsx` | Glow vermelho mais visivel, badge e decoracoes melhoradas |
| `src/components/CategoriesSection.tsx` | Cards com borda vermelha, fundo mais contrastante, hover mais forte |
| `src/components/InstagramSection.tsx` | Containers maiores, bordas vermelhas, melhor loading state |
| `src/components/WhyChooseUs.tsx` | Borda lateral vermelha nos cards, hover mais impactante |
| `src/components/LeadFormSection.tsx` | Botao com cor correta, bordas melhoradas |

---

## Detalhes Tecnicos

### HeroSection.tsx
- Glow: mudar de `bg-primary/[0.04]` para `bg-primary/[0.08]` e aumentar tamanho
- Badge: mudar border de `border-primary/20` para `border-primary/40`
- Adicionar uma faixa decorativa vermelha fina no topo da section

### CategoriesSection.tsx
- Cards: adicionar `bg-white border-border hover:border-primary/40 shadow-sm hover:shadow-lg hover:shadow-primary/10`
- Icone container: `bg-primary/15 border border-primary/20` -> `bg-primary/10`
- Adicionar `border-b-2 border-b-primary/0 group-hover:border-b-primary/50 transition-all`

### InstagramSection.tsx
- Container: `aspect-[4/5]` esta adequado, mas adicionar `min-h-[400px] md:min-h-[500px]`
- Borda: `border-primary/15` -> `border-primary/30`
- Shadow: `shadow-lg shadow-primary/5` -> `shadow-xl shadow-primary/10`
- Loading: fundo com gradiente vermelho sutil

### WhyChooseUs.tsx
- Cards: adicionar `border-l-[3px] border-l-primary/30 hover:border-l-primary/60`
- Shadow no hover mais forte: `hover:shadow-xl hover:shadow-primary/10`

### LeadFormSection.tsx
- Verificar que `disabled:opacity-20` no botao nao esta causando o visual desbotado -- mudar para `disabled:opacity-30`

