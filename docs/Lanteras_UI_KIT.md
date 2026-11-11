# Lanternas — UI Kit

Guia visual para um site sobre as tropas dos Lanternas, inspirado na estética dos quadrinhos e no conteúdo de `Tropas_dos_Lanternas_DC.md`. Os componentes, valores e layouts abaixo são propostas para a interface.

## Conceito visual

Um universo espacial de quadrinhos, com fundos profundos, símbolos circulares, anéis, energia luminosa e retratos de personagens. Cada tropa possui uma área com cor e atmosfera próprias; a **área central** reúne todo o espectro e permite navegar entre elas. O tom pode combinar aventura e acolhimento, conforme a proposta do projeto de ser um site de RPG ou um site fofo sobre as tropas.

- Use a cor de cada tropa como destaque sobre uma base escura e consistente.
- Trate brilhos, raios e partículas como elementos decorativos; mantenha textos e controles legíveis.
- Prefira símbolos de anéis e emblemas em círculos, reforçando a identidade das tropas.
- Use imagens de personagens como destaque editorial, com camadas escuras quando houver texto sobre elas.
- Os valores hexadecimais são sugestões visuais inspiradas nas imagens, não amostras exatas.

## Mapa de áreas

| Área | Tropa ou grupo | Força associada |
|---|---|---|
| Central | Encontro das tropas | União do espectro |
| Verde | Lanternas Verdes | Vontade |
| Azul | Lanternas Azuis | Esperança |
| Amarela | Tropa Sinestro | Medo |
| Vermelha | Lanternas Vermelhos | Raiva |
| Laranja | Agente Laranja | Avareza |
| Índigo | Tribo Índigo | Compaixão |
| Violeta | Safiras-Estrelas | Amor |
| Preta | Lanternas Negros | Morte |
| Branca | Lanternas Brancos | Vida |

Vida e morte são forças associadas às tropas branca e negra, respectivamente; não são apresentadas como emoções. A área branca tem identidade própria e não substitui a área central.

## Estrutura inspirada no site da DC

A análise da [página inicial da DC](https://www.dc.com/) mostra uma organização editorial em blocos: destaques com título, descrição e chamada para ação; seções de vídeos, quadrinhos e notícias; e apresentações de personagens com links para seus perfis. A [página da Tropa dos Lanternas Verdes](https://www.dc.com/characters/green-lantern-corps) reúne uma apresentação da tropa, um quadro de informações, personagens relacionados e uma galeria.

Para o site dos Lanternas, adapte essa estrutura ao conteúdo disponível:

| Padrão observado na DC | Aplicação proposta no site dos Lanternas |
|---|---|
| Destaque editorial com chamada para ação | Hero da área central com uma apresentação do espectro e acesso às tropas. |
| Seções temáticas com títulos e conjuntos de cards | Blocos separados para tropas, personagens e histórias, com links para conteúdos existentes. |
| Apresentação de personagens em destaque | Destaques de integrantes com descrição curta e acesso aos respectivos conteúdos, quando disponíveis. |
| Página de grupo com informações principais | Páginas das áreas de cor com introdução, força associada, poderes e integrantes. |
| Personagens relacionados e galeria | Cards de integrantes e, quando houver materiais disponíveis, galeria com créditos. |

Essas são orientações de estrutura, não a reprodução literal do site. A DC também usa recursos promocionais e listas de mídia que só devem ser incluídos aqui se houver conteúdo e funcionalidades correspondentes.

### Arquitetura sugerida

- **Área central / início:** apresentação do espectro, acesso às nove áreas, apresentação das entidades, destaques de personagens e histórias e introdução aos anéis.
- **Tropas:** catálogo das nove áreas, com nome, símbolo, força associada e acesso à página individual.
- **Página de cada tropa:** hero temático, introdução, informações principais, integrantes, poderes, histórias e conteúdos relacionados.
- **Entidades:** seção na área central com as forças do espectro e acesso às entidades relacionadas em cada área de cor.
- **Personagens e histórias:** seções ou páginas próprias quando houver conteúdo suficiente, interligadas às respectivas tropas.
- **Rodapé:** navegação essencial, créditos e informações do projeto.

### Ordem sugerida das páginas

**Área central:** cabeçalho → hero com chamada principal → grade das nove tropas → apresentação do espectro e dos anéis → entidades do espectro → personagens em destaque → histórias para conhecer → rodapé. As seções de personagens e histórias podem aparecer conforme o conteúdo estiver disponível.

**Área de cor:** cabeçalho → hero com nome, símbolo e força → introdução → quadro de informações principais → entidade associada → integrantes → poderes e funcionamento do anel → histórias relacionadas → links para outras tropas e retorno à área central → rodapé. As informações variam conforme a tropa: inclua apenas dados pertinentes e disponíveis.

Na navegação global, priorize **Início**, **Tropas**, **Personagens** e **Histórias** quando essas seções existirem. Em cada área, a cor muda, mas a ordem e os componentes permanecem reconhecíveis. Para listas de cards, uma grade responsiva é suficiente; um carrossel é opcional e deve oferecer controles acessíveis se for adotado.

## Fundamentos compartilhados

### Cores neutras

| Token | Valor | Aplicação |
|---|---|---|
| `--bg` | `#080B12` | Fundo geral escuro |
| `--surface` | `#141A26` | Cards, painéis e navegação |
| `--surface-raised` | `#202939` | Superfícies elevadas e interação |
| `--border` | `#465266` | Bordas e divisórias |
| `--text` | `#F5F7FC` | Texto principal |
| `--text-muted` | `#C3CDDA` | Texto secundário |
| `--focus` | `#FFFFFF` | Contorno de foco sobre superfícies escuras |

### Tipografia

Use uma fonte sem serifa de leitura clara, como **Inter**, com fallback `system-ui, sans-serif`. Títulos podem usar uma fonte condensada e forte, como **Barlow Condensed**, com fallback `sans-serif`. Se as fontes não estiverem disponíveis, os fallbacks mantêm a interface funcional.

| Elemento | Tamanho sugerido | Peso | Entrelinha |
|---|---:|---:|---:|
| Título principal | `clamp(2.25rem, 5vw, 4.5rem)` | 700 | 1,05 |
| Título de seção | `clamp(1.75rem, 3vw, 2.75rem)` | 700 | 1,15 |
| Título de card | `1.25rem` | 700 | 1,25 |
| Corpo | `1rem` | 400 | 1,6 |
| Texto auxiliar | `0.875rem` | 400–600 | 1,5 |
| Botão e menu | `1rem` | 600–700 | 1,25 |

Títulos podem aparecer em caixa alta para lembrar capas de quadrinhos; evite caixa alta em parágrafos longos. Use larguras de texto de aproximadamente 60–75 caracteres por linha.

### Espaçamento, forma e profundidade

- Escala de espaçamento: `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64` e `96px`.
- Largura máxima do conteúdo: `1200px`, centralizada; margens laterais de `16px` no celular e `32px` em telas maiores.
- Bordas: `1px` em painéis; raio de `12px` em cards, `8px` em campos e botões, `999px` em selos e ícones circulares.
- Sombras discretas para elevar cards; brilho colorido opcional em emblemas, bordas e foco de elementos destacados.
- Texturas cósmicas e traços de quadrinhos devem ficar atrás do conteúdo, sem reduzir sua leitura.

## Área central — encontro de todas as cores

**Papel:** página de entrada e ponto de encontro das tropas. Apresente o espectro como um conjunto de forças com identidades próprias.

**Composição:** fundo espacial escuro; título e introdução curtos; ilustração coletiva ou composição de anéis; seletor com nove cards identificados por nome, símbolo, força e cor. Combine o espectro em um halo, faixa ou anel multicolorido, sem misturar várias cores atrás do mesmo texto.

**Cores:** base `#080B12`, superfície `#141A26`, texto `#F5F7FC`; use os destaques de cada área nos respectivos cards. Para detalhes decorativos, um gradiente pode seguir vermelho → laranja → amarelo → verde → azul → índigo → violeta; represente preto e branco também em seus próprios cards.

**Componentes principais:**

1. Cabeçalho com marca e navegação principal.
2. Hero com título sugerido “Explore o espectro dos Lanternas” e botão “Conhecer as tropas”.
3. Grade das nove tropas com indicação visual de cada cor e link para sua área.
4. Introdução ao espectro e aos anéis, seção de entidades e destaques de personagens e histórias conforme o conteúdo disponível.
5. Rodapé com navegação e créditos dos materiais utilizados.

Em telas largas, a grade pode ter três colunas; em telas médias, duas; em celulares, uma. Um card é inteiramente clicável e tem foco visível, nome e força em texto.

## Área verde — vontade

- **Paleta:** fundo `#071A12`; superfície `#102A1D`; destaque `#36D978`; brilho `#B8FFCE`.
- **Atmosfera:** coragem, proteção e união. Use feixes verdes, formas circulares e construções de luz com aspecto sólido.
- **Aplicação:** hero com representante ou grupo, emblema verde, chamada “Força de vontade” e cards de integrantes, poderes e histórias. Bordas e indicadores ativos recebem o verde de destaque.

## Área azul — esperança

- **Paleta:** fundo `#071629`; superfície `#10273E`; destaque `#50B8FF`; brilho `#C6F0FF`.
- **Atmosfera:** serenidade e apoio. Use gradientes azuis suaves, pontos de luz e halos ao redor do anel.
- **Aplicação:** hero com Saint Walker ou outro representante, chamada “Esperança”, e cards sobre cura, apoio e relação com a luz verde.

## Área amarela — medo

- **Paleta:** fundo `#1B1607`; superfície `#30260D`; destaque `#FFD43B`; brilho `#FFF1A8`.
- **Atmosfera:** imponência e tensão. Use silhuetas, contrastes fortes e feixes dourados.
- **Aplicação:** hero com a Tropa Sinestro, chamada “Medo” e cards sobre integrantes, poder e histórias. Sobre preenchimento amarelo, use texto escuro.

## Área vermelha — raiva

- **Paleta:** fundo `#21090C`; superfície `#351218`; destaque `#FF5964`; brilho `#FFC0B8`.
- **Atmosfera:** intensidade e movimento. Use energia fragmentada, manchas de luz e traços dinâmicos sem prejudicar controles.
- **Aplicação:** hero com Atrocitus ou a tropa, chamada “Raiva” e cards sobre origem, membros e efeitos do anel.

## Área laranja — avareza

- **Paleta:** fundo `#211006`; superfície `#38200F`; destaque `#FF9F43`; brilho `#FFD3A0`.
- **Atmosfera:** posse, calor e excesso. Use faíscas, brilho incandescente e detalhes que sugiram acúmulo.
- **Aplicação:** hero centrado em Larfleeze, chamada “Avareza” e cards sobre o Agente Laranja e suas construções. O conteúdo deve refletir sua relação singular com o poder laranja.

## Área índigo — compaixão

- **Paleta:** fundo `#120D27`; superfície `#211A3C`; destaque `#B29BFF`; brilho `#E4DAFF`.
- **Atmosfera:** mistério e transformação. Use pontos cósmicos, linhas finas e formas inspiradas em cajados.
- **Aplicação:** hero com representante da Tribo Índigo, chamada “Compaixão” e cards sobre a tribo, seus poderes e sua história. Diferencie visualmente o índigo azulado do violeta rosado.

## Área violeta — amor

- **Paleta:** fundo `#210B25`; superfície `#35143B`; destaque `#F174DF`; brilho `#FFD4F6`.
- **Atmosfera:** afeto, intensidade e brilho. Use estrelas, cristais e halos rosados.
- **Aplicação:** hero com as Safiras-Estrelas, chamada “Amor” e cards sobre integrantes, vínculos e poderes. Prefira símbolos de estrela a corações genéricos para reforçar a identidade da tropa.

## Área preta — morte

- **Paleta:** fundo `#090A0D`; superfície `#1A1D24`; destaque `#C6CFDA`; brilho `#F2F5F8`.
- **Atmosfera:** escuridão, silêncio e ameaça. Use fumaça, relâmpagos e imagens dessaturadas.
- **Aplicação:** hero com a Tropa Negra, chamada “Morte” e cards sobre Nekron, Mão Negra e a Noite Mais Densa. Como preto sobre fundo preto não se destaca, identifique a área com símbolo claro e bordas cinzas.

## Área branca — vida

- **Paleta:** fundo `#101C2B`; superfície `#24364A`; destaque `#F5FAFF`; brilho `#D2EFFF`.
- **Atmosfera:** renovação e energia. Use branco luminoso, tons de gelo e raios suaves.
- **Aplicação:** hero com portadores da luz branca, chamada “Vida” e cards sobre a luz da vida e sua ligação com o espectro. Mantenha texto claro em painéis escuros; em superfícies brancas, use texto `#101C2B`.

## Entidades do espectro — os espíritos dos Lanternas

As entidades são manifestações das forças associadas ao espectro emocional. Elas são seres distintos dos anéis e das tropas e, em algumas histórias, podem se ligar a um hospedeiro. A relação com cada força e seu papel mudam conforme a continuidade dos quadrinhos. A vida e a morte têm ligações próprias com as luzes branca e negra.

| Área | Entidade ou figura associada | Força | Apresentação sugerida |
|---|---|---|---|
| Verde | Ion | Vontade | Criatura cósmica de aspecto aquático, cercada de luz verde. |
| Azul | Adara | Esperança | Figura alada envolta em energia azul. |
| Amarela | Parallax | Medo | Criatura de aparência insetoide, destacada em amarelo. |
| Vermelha | The Butcher | Raiva | Figura semelhante a um touro, cercada por energia vermelha. |
| Laranja | Ophidian | Avareza | Serpente de energia laranja, com formas sinuosas. |
| Índigo | Proselyte | Compaixão | Criatura com tentáculos, em tons de índigo. |
| Violeta | The Predator | Amor | Criatura de aspecto alienígena, em violeta e rosa. |
| Branca | Entidade da Vida | Vida | Figura luminosa associada à luz branca e à vida. |
| Preta | Nekron | Morte | Figura sombria ligada à morte e aos Lanternas Negros. |

Nekron e a Entidade da Vida devem ser apresentados como figuras ligadas à morte e à vida, respectivamente, com suas particularidades narrativas; não como emoções adicionais. Veja a [DC Database sobre as entidades](https://dc.fandom.com/wiki/Entity) e a [sinopse da DC para Green Lantern Corps #15](https://www.dc.com/comics/green-lantern-corps-2025/green-lantern-corps-2025-15) para referências sobre o espectro.

### Organização e componentes

- **Área central:** inclua uma seção “Entidades do espectro” depois da introdução aos anéis. Apresente um texto curto e uma grade de cards, usando a cor de cada área junto ao nome e à força associada.
- **Áreas de cor:** inclua um bloco “Entidade associada” após as informações principais da tropa, com nome, breve descrição e representação visual quando disponível. Relacione o bloco à seção central.
- **Card de entidade:** imagem ou ilustração, nome, cor, força e descrição de uma ou duas frases. Acrescente um link para detalhes apenas quando houver conteúdo correspondente.
- **Estilo:** use um halo e uma borda na cor da entidade, preservando a base escura do site. Na área branca, use contraste escuro/claro; na preta, destaque a silhueta com cinza e branco.
- **Adaptação:** três colunas em telas largas, duas em telas médias e uma em celulares, conforme o espaço disponível. Identifique as entidades por texto e não apenas pela cor.

## Componentes reutilizáveis

| Componente | Estrutura e comportamento |
|---|---|
| Cabeçalho | Marca à esquerda; links para Início, Tropas e seções disponíveis de Personagens e Histórias; indicação textual e visual da página atual. No celular, menu acessível por botão. |
| Hero | Título, descrição breve, ação principal, símbolo e imagem. A imagem pode ocupar o fundo com uma camada escura ou aparecer ao lado do texto. |
| Card de tropa | Emblema, nome, força associada, resumo curto e link “Explorar”. Use o destaque da respectiva área na borda ou no símbolo. |
| Card de entidade | Nome, força, cor e descrição curta; inclua ilustração e link de detalhes quando disponíveis. |
| Card de personagem | Imagem com proporção consistente, nome, relação com a tropa e link para detalhes quando houver página correspondente. |
| Card de conteúdo | Título, resumo e link para temas como origem, poderes e histórias. Não indique interação quando não houver link ou ação. |
| Botão primário | Preenchimento com a cor de destaque da área e texto claro ou escuro conforme o contraste. Altura mínima de `44px`. |
| Botão secundário | Fundo transparente, borda visível e texto de alto contraste; pode usar o destaque da área como detalhe. |
| Selo | Nome da força e símbolo, com fundo de superfície e borda temática; a cor não deve ser a única forma de identificação. |
| Navegação por áreas | Links com nome, símbolo e cor; marque a área atual também com texto ou atributo de estado acessível. |
| Campos | Rótulo sempre visível, borda e mensagem de erro textual quando necessário. Use apenas se a página tiver busca, formulário ou funcionalidade de RPG. |

**Estados:** padrão, hover, foco visível, ativo e desabilitado quando aplicável. No hover, aumente levemente o brilho ou altere a borda; no foco, use contorno de pelo menos `2px`, contrastante com o fundo, sem depender apenas de brilho. Estados desabilitados devem continuar legíveis e indicar indisponibilidade.

## Layout e adaptação

- **Celular:** uma coluna; menu recolhível; imagem do hero acima ou abaixo do texto; botões com área de toque de pelo menos `44 × 44px`.
- **Tablet:** duas colunas para cards quando houver espaço; preserve respiros e evite cortes de símbolos.
- **Desktop:** até três colunas de cards; hero com texto e imagem lado a lado; limite a largura dos textos.
- Use referências de transição em torno de `768px` e `1024px`, ajustando conforme o conteúdo realmente couber.
- Mantenha a ordem de leitura lógica quando o layout visual mudar. Evite rolagem horizontal.

## Acessibilidade e movimento

- Garanta contraste mínimo de **4,5:1** para texto normal e **3:1** para texto grande e componentes gráficos necessários. Os pares de cores e as sobreposições sobre imagens devem ser verificados na implementação; os valores deste guia não garantem contraste em todas as combinações.
- Identifique cada tropa por nome e símbolo além da cor. Ícones informativos precisam de nome acessível; ícones decorativos devem ser ignorados por tecnologias assistivas.
- Forneça texto alternativo descritivo para imagens que transmitam informação; use alternativa vazia para imagens puramente decorativas.
- Use links para navegação, botões para ações, hierarquia correta de títulos e navegação completa por teclado.
- Animações de brilho e partículas devem ser discretas, sem flashes, e reduzidas ou removidas quando `prefers-reduced-motion` estiver ativo.

## Exemplo de tokens CSS

```css
:root {
  --bg: #080b12;
  --surface: #141a26;
  --surface-raised: #202939;
  --border: #465266;
  --text: #f5f7fc;
  --text-muted: #c3cdda;
  --focus: #ffffff;
  --radius-card: 12px;
  --radius-control: 8px;
  --content-width: 1200px;
}

[data-area="verde"]   { --area-bg: #071a12; --area-surface: #102a1d; --accent: #36d978; --glow: #b8ffce; }
[data-area="azul"]    { --area-bg: #071629; --area-surface: #10273e; --accent: #50b8ff; --glow: #c6f0ff; }
[data-area="amarela"] { --area-bg: #1b1607; --area-surface: #30260d; --accent: #ffd43b; --glow: #fff1a8; }
[data-area="vermelha"]{ --area-bg: #21090c; --area-surface: #351218; --accent: #ff5964; --glow: #ffc0b8; }
[data-area="laranja"] { --area-bg: #211006; --area-surface: #38200f; --accent: #ff9f43; --glow: #ffd3a0; }
[data-area="indigo"]  { --area-bg: #120d27; --area-surface: #211a3c; --accent: #b29bff; --glow: #e4daff; }
[data-area="violeta"] { --area-bg: #210b25; --area-surface: #35143b; --accent: #f174df; --glow: #ffd4f6; }
[data-area="preta"]   { --area-bg: #090a0d; --area-surface: #1a1d24; --accent: #c6cfda; --glow: #f2f5f8; }
[data-area="branca"]  { --area-bg: #101c2b; --area-surface: #24364a; --accent: #f5faff; --glow: #d2efff; }
```

A área central usa os tokens neutros e os acentos individuais dos cards. Os tokens de área definem aparência, não regras de contraste automáticas: escolha a cor do texto de cada componente conforme seu fundo.

