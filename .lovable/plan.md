

## Adicionar divisor visual entre Instagram e Depoimentos

O espaço branco entre a seção de vídeos do Instagram e a seção de Depoimentos será preenchido com um divisor animado vermelho, seguindo o mesmo padrão visual (`section-divider` com efeito shimmer) já usado no site.

### O que será feito

**Arquivo: `src/components/TestimonialsSection.tsx`**

- Adicionar um `<div className="section-divider" />` no topo da seção de Depoimentos, antes do conteúdo atual
- Envolver a seção em um container `relative` para manter a consistência com a InstagramSection
- Isso cria uma linha vermelha com gradiente e animação shimmer, igual ao divisor que já existe acima dos vídeos do Instagram

A classe `section-divider` já está definida no CSS global com:
- Linha de 2px com gradiente vermelho (transparente nas pontas, vermelho no centro)
- Efeito shimmer animado que percorre a linha continuamente

Nenhuma nova CSS ou animação precisa ser criada -- reutilizamos o padrão visual existente.

