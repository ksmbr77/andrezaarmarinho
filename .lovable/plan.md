

## Scroll para o topo ao finalizar a loading screen

Quando a animacao de loading terminar e o conteudo aparecer, o site vai rolar automaticamente para a secao `#hero` (inicio), garantindo que o usuario veja o topo da pagina.

### Mudanca

**`src/pages/Index.tsx`**: Apos o estado `loading` mudar para `false`, chamar `window.scrollTo(0, 0)` para garantir que a pagina comece no topo. O `scrollTo` ja existe no `useEffect`, mas sera movido para executar no momento exato em que o loading termina, usando `{ behavior: 'instant' }` para evitar saltos visiveis.

Tambem sera adicionado um `scroll-to` para o elemento `#hero` como fallback, caso o browser mantenha a posicao de scroll anterior.

### Detalhes tecnicos

- Mover o `window.scrollTo(0, 0)` para dentro do callback que seta `setLoading(false)`
- Usar `document.getElementById('hero')?.scrollIntoView()` como seguranca adicional apos o render

