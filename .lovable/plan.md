

# Ajustes no Rodape e Correcoes de Cor

## 1. Destaque "Desenvolvido por Fly Agency" com fundo

**Arquivo**: `src/components/Footer.tsx`

Envolver o link "Desenvolvido por Fly Agency" em um container com fundo semi-transparente branco para destacar:
- Adicionar `bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-5 py-3` ao `<a>` que envolve o bloco
- Isso cria um "quadrado" de fundo sutil que destaca o credito sem perder a harmonia com o rodape vermelho

## 2. Corrigir botao "Proximo" rosa/desbotado

**Arquivo**: `src/components/LeadFormSection.tsx`

O botao "Proximo" aparece rosa porque quando desabilitado usa `disabled:opacity-40`. A opacidade sobre vermelho gera o efeito rosa.

Correcao:
- Trocar `disabled:opacity-40` por `disabled:bg-primary/40 disabled:text-primary-foreground/60` para manter o vermelho (mais suave) ao inves de ficar rosa transparente
- Alternativa mais simples: aumentar `disabled:opacity-40` para `disabled:opacity-50` para ficar menos desbotado

## 3. Verificar e corrigir outras inconsistencias de cor

Nao foram encontrados outros erros de cor significativos. Os demais componentes (OffersBanner, LocationSection, CategoriesSection, etc.) estao usando as cores corretamente.

---

## Resumo de Arquivos

| Arquivo | Mudanca |
|---------|---------|
| `src/components/Footer.tsx` | Adicionar fundo destacado ao bloco "Desenvolvido por Fly Agency" |
| `src/components/LeadFormSection.tsx` | Corrigir cor do botao desabilitado para nao ficar rosa |

