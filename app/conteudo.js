const tropas = [
  {
    id: "verde", cor: "Verde", nome: "Lanternas Verdes", forca: "Força de vontade",
    resumo: "Guardiões do espaço que transformam força de vontade em luz sólida.",
    origem: "Os Guardiões do Universo criaram a Tropa dos Lanternas Verdes para patrulhar setores do espaço. Oa é o centro da organização.",
    escolha: "Demonstrar a capacidade de superar um grande medo.",
    poderes: "A vontade e a imaginação moldam construções de luz sólida. Os anéis também permitem voo, criam escudos e auxiliam na comunicação e na análise.",
    entidade: "Ion", sobreEntidade: "Ion personifica a vontade e lembra um grande peixe.",
    detalheEntidade: "A entidade está ligada a Sodam Yat. Kyle Rayner também usou o nome Ion em fases de sua trajetória.",
    juramento: "Promete vigiar e enfrentar o mal com a luz verde.",
    integrantes: ["Hal Jordan", "John Stewart", "Guy Gardner", "Kyle Rayner", "Jessica Cruz", "Simon Baz", "Kilowog"],
    personagem: "Hal Jordan", destaque: "Recebeu seu anel de Abin Sur. É conhecido pela coragem e pela impulsividade.",
    historia: "Green Lantern: Secret Origin", sobreHistoria: "Reconta a origem de Hal Jordan como Lanterna Verde."
  },
  {
    id: "azul", cor: "Azul", nome: "Lanternas Azuis", forca: "Esperança",
    resumo: "A luz da esperança cura e fortalece os anéis verdes.",
    origem: "Ganthet e Sayd fundaram a tropa para inspirar e ajudar. Saint Walker é um de seus principais representantes.",
    escolha: "Inspirar e sustentar a esperança.",
    poderes: "A luz azul pode curar, fortalecer anéis verdes e ajudar a retirar um anel vermelho com segurança. Em muitas histórias, seu potencial ofensivo completo depende da presença da luz verde.",
    entidade: "Adara", sobreEntidade: "Adara é a entidade alada que personifica a esperança.",
    detalheEntidade: "A luz de Adara representa a capacidade de acreditar em um futuro melhor mesmo diante da perda e do medo.",
    juramento: "Afirma que a esperança permanece em tempos difíceis e que a tropa ajudará a conduzir os outros à luz.",
    integrantes: ["Saint Walker", "Brother Warth", "Sister Sercy", "Barry Allen (portador temporário)"],
    personagem: "Saint Walker", destaque: "Um dos principais representantes dos Lanternas Azuis, cuja luz fortalece a dos Lanternas Verdes.",
    historia: "Green Lantern: New Guardians", sobreHistoria: "Acompanha portadores de várias cores e a atuação da esperança ao lado das outras luzes."
  },
  {
    id: "amarela", cor: "Amarela", nome: "Tropa Sinestro", forca: "Medo",
    resumo: "Reúne seres capazes de inspirar medo e impor a ordem de Sinestro.",
    origem: "Sinestro, ex-Lanterna Verde, reuniu portadores capazes de inspirar grande medo. Com a luz amarela, buscava impor sua visão de ordem.",
    escolha: "Ser capaz de inspirar grande medo.",
    poderes: "Os anéis amarelos criam construções de luz e escudos, permitem voo e canalizam o medo como arma.",
    entidade: "Parallax", sobreEntidade: "Parallax personifica o medo e já possuiu Hal Jordan.",
    detalheEntidade: "Seu aprisionamento na Bateria Central de Poder está ligado à antiga dificuldade dos anéis verdes contra o amarelo.",
    juramento: "Invoca a luz amarela para espalhar o medo e enfrentar adversários.",
    integrantes: ["Sinestro", "Arkillo", "Lyssa Drak", "Espantalho (portador temporário)"],
    personagem: "Sinestro", destaque: "Ex-Lanterna Verde, fundou a tropa amarela para impor sua própria visão de ordem.",
    historia: "The Sinestro Corps War", sobreHistoria: "A guerra entre a Tropa Sinestro e os Lanternas Verdes põe o medo e a vontade em confronto."
  },
  {
    id: "vermelha", cor: "Vermelha", nome: "Lanternas Vermelhos", forca: "Raiva",
    resumo: "A tropa de Atrocitus canaliza a fúria e transforma seus portadores.",
    origem: "Após a tragédia associada ao Setor 666, Atrocitus reuniu seres movidos pela fúria e pela vingança.",
    escolha: "Carregar uma fúria intensa.",
    poderes: "Os portadores podem expelir sangue corrosivo. O anel substitui a função do coração, altera o corpo e pode dominar a mente. Sua remoção costuma ser fatal, com exceções ligadas à luz azul.",
    entidade: "The Butcher", sobreEntidade: "O Açougueiro personifica a raiva e tem aparência semelhante à de um touro.",
    detalheEntidade: "Em Brightest Day, é procurado durante a disputa pelas entidades do espectro.",
    juramento: "Invoca sangue e fúria como instrumentos de vingança.",
    integrantes: ["Atrocitus", "Bleez", "Dex-Starr", "Guy Gardner (portador temporário)", "Kara Zor-El (portadora temporária)"],
    personagem: "Atrocitus",
    historia: "Rage of the Red Lanterns", sobreHistoria: "Apresenta a formação da tropa de Atrocitus e a origem de sua fúria."
  },
  {
    id: "laranja", cor: "Laranja", nome: "Agente Laranja", forca: "Avareza",
    resumo: "Larfleeze concentra o poder laranja e comanda um exército de construções.",
    origem: "Larfleeze, conhecido como Agente Laranja, monopoliza a luz da avareza e procura manter o poder para si.",
    escolha: "Uma necessidade extrema de possuir.",
    poderes: "A luz laranja alimenta a fome e a posse obsessivas. Larfleeze comanda construções de luz que reproduzem as identidades de seres que matou.",
    entidade: "Ophidian", sobreEntidade: "Ophidian, de forma serpentina, personifica a avareza.",
    detalheEntidade: "Ophidian representa o desejo de possuir em escala cósmica. Larfleeze usa essa mesma força com seu anel.",
    notaJuramento: "Larfleeze proclama posse exclusiva de tudo o que deseja. Há variantes pessoais ligadas a ele, sem um juramento tradicional de tropa.",
    integrantes: ["Larfleeze", "Lex Luthor (portador temporário em Blackest Night)"],
    personagem: "Larfleeze",
    historia: "Agent Orange", sobreHistoria: "Apresenta Larfleeze e a relação entre a luz laranja e sua necessidade de possuir."
  },
  {
    id: "indigo", cor: "Índigo", nome: "Tribo Índigo", forca: "Compaixão",
    resumo: "A compaixão transforma portadores que usam anéis e cajados.",
    origem: "A tribo tem uma língua própria e usa anéis e cajados. Sua origem está ligada a Abin Sur e Natromo.",
    escolha: "A luz pode despertar ou impor a compaixão em certos portadores.",
    poderes: "A tribo pode canalizar as luzes de portadores próximos. Conforme a história, seus poderes também incluem cura e teletransporte.",
    entidade: "Proselyte", sobreEntidade: "Proselyte personifica a compaixão e tem aparência tentacular.",
    detalheEntidade: "Sua força está associada à capacidade de reconhecer o sofrimento alheio e responder a ele.",
    notaJuramento: "É recitado na língua fictícia da tribo. A DC indica que não há tradução oficial conhecida para o inglês.",
    integrantes: ["Indigo-1 (Iroque)", "Munk", "Natromo (ligado à criação)", "Ray Palmer (portador temporário)", "Sinestro (portador temporário)"],
    personagem: "Indigo-1",
    historia: "Green Lantern: The Secret of the Indigo Tribe", sobreHistoria: "Revela as origens da tribo e o papel da compaixão na transformação de seus membros."
  },
  {
    id: "violeta", cor: "Violeta", nome: "Safiras-Estrelas", forca: "Amor",
    resumo: "A luz violeta canaliza o amor, com poder para proteger ou aprisionar.",
    origem: "Ligadas às Zamarons, as Safiras-Estrelas canalizam um amor que pode assumir a forma de cuidado, apego ou obsessão.",
    escolha: "Sentir amor intenso ou ter vínculos emocionais fortes.",
    poderes: "Os anéis permitem voo e construções de luz. Podem cristalizar alvos e localizar pessoas ligadas por fortes vínculos afetivos.",
    entidade: "The Predator", sobreEntidade: "O Predador personifica o amor e expressa também seu lado possessivo e obsessivo.",
    detalheEntidade: "É a personificação cósmica da luz que Carol Ferris e as outras Safiras-Estrelas canalizam com seus anéis.",
    juramento: "Ampara corações perdidos e afirma o poder do amor diante da escuridão.",
    integrantes: ["Carol Ferris", "Fatality (Yrra Cynril)", "Rainha Aga’po", "Mulher-Maravilha (portadora temporária em Blackest Night)"],
    personagem: "Carol Ferris",
    historia: "Blackest Night", sobreHistoria: "O evento mostra a participação da luz violeta no confronto com os Lanternas Negros."
  },
  {
    id: "preta", cor: "Preta", nome: "Lanternas Negros", forca: "Morte",
    resumo: "Anéis ligados a Nekron reanimam os mortos para atacar os vivos.",
    origem: "A tropa surge como ameaça central de Blackest Night, sob a influência de Nekron e com Mão Negra em papel central.",
    escolha: "Os anéis negros reanimam cadáveres. A morte é a força associada.",
    poderes: "Os anéis controlam os corpos reanimados, que podem usar a aparência e as lembranças dos mortos para provocar e atacar os vivos.",
    entidade: "Nekron", sobreEntidade: "Nekron é uma figura cósmica ligada à morte e a força por trás dos Lanternas Negros.",
    detalheEntidade: "Seu confronto com a Entidade da Vida é central para a conclusão de Blackest Night.",
    juramento: "Anuncia a ascensão dos mortos e a escuridão sobre os vivos.",
    integrantes: ["Mão Negra (Black Hand)", "Nekron (força dirigente)", "Aquaman (reanimado temporariamente)"],
    personagem: "Nekron", papel: "Figura ligada à morte",
    historia: "Blackest Night", sobreHistoria: "A Noite Mais Densa reúne as tropas no confronto com Nekron e os Lanternas Negros."
  },
  {
    id: "branca", cor: "Branca", nome: "Lanternas Brancos", forca: "Vida",
    resumo: "A luz da vida se liga à união das luzes do espectro.",
    origem: "A luz branca está ligada à Entidade da Vida e à união das luzes em Blackest Night. A formação e os portadores variam conforme a história.",
    escolha: "A luz branca está ligada à vida, e as condições para portá-la variam com a história.",
    poderes: "A luz branca pode curar e, em situações excepcionais, restaurar a vida. Em algumas histórias, ela canaliza forças de todo o espectro.",
    entidade: "Entidade da Vida", sobreEntidade: "Também chamada The Entity, é a figura cósmica associada à vida e à luz branca.",
    detalheEntidade: "Sua revelação em Blackest Night é decisiva no confronto com Nekron. Seus vínculos e capacidades variam conforme a história.",
    notaJuramento: "A luz branca não tem um juramento universal conhecido.",
    integrantes: ["Kyle Rayner", "Hal Jordan e outros heróis (portadores temporários em Blackest Night)"],
    personagem: "Kyle Rayner",
    historia: "Blackest Night", sobreHistoria: "A luz branca tem um papel decisivo na resistência contra Nekron."
  }
];

const historias = [
  { id: "verde", titulo: "Green Lantern: Secret Origin", resumo: "A origem de Hal Jordan e seu primeiro contato com o anel de Abin Sur." },
  { id: "amarela", titulo: "The Sinestro Corps War", resumo: "A guerra entre a vontade dos Lanternas Verdes e o medo da Tropa Sinestro." },
  { id: "preta", titulo: "Blackest Night", resumo: "Nekron e os Lanternas Negros levam as tropas a um confronto entre a vida e a morte." }
];
