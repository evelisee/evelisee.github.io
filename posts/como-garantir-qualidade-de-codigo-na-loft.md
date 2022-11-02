---
title: 'Como garantíamos a qualidade de código na Loft?'
metaTitle: 'Como garantíamos a qualidade de código na Loft?'
metaDesc: 'Explicando um pouco como é feito o controle de qualidade dentro da Loft'
socialImage: /images/blog/11-01-2022.jpg
photoAutor: Broke Cagle
photoLink: https://unsplash.com/photos/ZCSc8hoZrtw
photoSite: Unplash
date: '2022-01-11'
tags:
  - qualidade de código
  - ferramentas
---

Artigo escrito em co-autoria com [Romulo Tavares](https://medium.com/@romuloctavares)


A Loft é uma startup que já nasceu com uma preocupação muito forte de ter sistemas simples e fáceis de evoluir e manter. Desde o momento zero, foram adotadas ferramentas, processos e práticas que ajudam a identificar códigos de baixa qualidade e evitar que sejam adicionadas novas linhas que podem gerar bugs ou atrapalhar o desenvolvimento do produto.

Entretanto, a ideia desse texto não é fazer um julgamento do que é um código de boa ou má qualidade. Queremos compartilhar o que nos ajuda diariamente a manter nossos sistemas saudáveis. Pode ser que você já conheça muitas dessas ferramentas e práticas que vamos falar aqui, e se tiver alguma que você usa e não foi mencionada, compartilhe com a gente, vai ser um prazer estudar mais e implementar essa melhoria!

Vamos começar então pelas ferramentas que usamos para identificar e corrigir problemas de código:

## Ferramentas são nossas grandes aliadas
Dentro da rotina das pessoas programadoras, ferramentas auxiliares são um denominador comum para facilitar o dia a dia de controle de qualidade. Quando falamos em praticidade, alguns nomes já reconhecidos no mercado se destacam, como por exemplo Github, SonarCloud, Linters e por aí vai. Se você não chegou a ouvir alguns desses nomes, não se preocupe, vamos mostrar um pouquinho de cada ferramenta e como usamos ao nosso favor de maneira que o processo se torne menos burocrático e mais automatizado entre os times.

## Github
Criação de código muitas vezes pode ser difícil quando temos uma empresa grande e com diversas divisões de squads. Para que isso seja mais fácil de ser administrado, utilizamos o Github para controle de versionamento entre os repositórios da empresa. Independente de quantos projetos a empresa tenha, usar o git como maneira de centralizar as demandas de engenharia é bastante útil.
Aqui na Loft, cada projeto possui seu repositório e,pelo menos, um squad é responsável pela manutenção e controle. Para que a contribuição fique coesa entre os times, alguns destes repositórios possuem o que chamamos de code owners, que referem-se aos times ou pessoas responsáveis por revisarem os pull requests do repositório. Dessa forma, a contribuição é livre entre os squads, mas controlada, tornando o time responsável pelo projeto atual ciente das atualizações e modificações.

O Github permite que a gente trabalhe de forma bem parecida com projetos open sources, onde cada pessoa da empresa pode contribuir, seja com código, documentação ou issues. Também existe sempre um time responsável pelo repositório para ajudar e aprovar as mudanças, garantindo assim a qualidade de código e conhecimento do projeto.

Além disso, outro fator bastante útil dentro da organização de repositórios é o que chamamos de labels, nas quais alguns repositórios podem ser mantidos por um ou mais times, dependendo da estrutura e arquitetura definida pelo projeto, então, para que o controle de pull requests fiquem cada vez mais fácil de serem administrados, usamos algumas dessas labels para facilitar o dia a dia de revisão de código. Por exemplo, inserir o nome do squad responsável, qual o tipo de implementação (feature, bug, test), entre outros.

![](https://miro.medium.com/max/343/0*ydTl7COMc7hyRz0D)

Exemplo de tags de um pull request

Quer saber como colocar code owners no seu repositório? Dá uma olhada nesse tutorial que explica como habilitar a função de [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) no Github.

# Linters

Linters, ou como geralmente gosto de dizer, Gandalf da programação, são auxiliares que ajudam ainda mais na criação de código entre times e pessoas. São responsáveis por analisar o código em busca de erros, bugs, formatação de estilos, implementações suspeitas e tudo que  _shall not pass_.

O valor qualitativo dessa ferramenta pode ser mensurado quando, por exemplo, o projeto precisa utilizar constantes e valores obrigatoriamente tipados. Nesse caso, quando habilitamos uma regra de configuração, a ferramenta evita que os próximos programadores deixem o código diferente do que foi definido como imprescindível no controle de qualidade do projeto.

![](https://miro.medium.com/max/700/0*EXoCAfofXqjAsTi2)

Exemplo de código com aviso de erro do linter

Quando falamos de código, existem outras implementações de tamanha importância, como direitos autorais em desenvolvimento de software. Empresas que trabalham com ferramentas desenvolvidas através de código quase sempre estão de olho no compartilhamento e bem intelectual dos seus produtos. Percebendo isso, o time da Loft desenvolveu um linter que busca algumas licenças que possam ser consideradas ruins para o produto. Sua validação é feita a partir de um arquivo package.json e funciona buscando licenças de cada dependência instalada no projeto. Esse linter é rodado a cada pull request aberto, de forma que fique fácil gerenciar possíveis erros e, dessa forma, qualquer nova biblioteca instalada não corre o risco de passar despercebida por questões de direitos autorais. Sendo assim, o processo sai do problema “manual” e vira automatizado e escalável para todos os projetos.

# Audit

Imagina receber um alerta toda vez que uma das libs que você usa no projeto tiver uma vulnerabilidade crítica descoberta? É isso que o comando de [audit](https://www.npmjs.com/package/audit-ci) faz, ele nos alerta toda vez que rodamos os testes no projeto e com isso podemos tomar a decisão de atualizar as libs problemáticas, substituí-las por libs mais seguras ou quando não há uma solução disponível ainda, ignorar os avisos.

Ficar atento a notícias de libs vulneráveis enquanto mantém diversos projetos pode ser muito difícil, então ter algo automatizado que checa todas as dependências do seu projeto é incrivelmente útil no dia-a-dia.

# Testes

Quando decidimos lidar com uma equipe multidisciplinar e cada vez maior, testes entram no escopo para salvar de erros imprevisíveis e dar mais confiança para a pessoa desenvolvedora quando está alterando algum código já existente. Aqui na Loft o time lida com os três tipos de testes: e2e, integração e unitários. Esse tipo de decisão de escopo está mais ligada à autonomia do time do que da empresa em si.

Nesse contexto, no qual lidamos com projetos alterados por mais de um time, é imprescindível que features estejam acompanhadas de testes unitários. Imagine o seguinte cenário: alguns pedaços de código daquele arquivo são mantidos por outro time e não englobam o escopo da sua tarefa atual, entretanto você precisa implementar uma nova validação que pode criar um novo cenário para o usuário final.

Com base nisso, como podemos garantir que tanto o novo cenário implementado por você, quanto o anterior funcionem corretamente em produção? Não há uma resposta exata para essa pergunta, mas uma das possíveis soluções seria executar testes unitários que já existiam ali, onde garantiriam o cenário anterior funcionando por completo e implementar novos testes unitários para minimizar o risco de bugs no novo cenário criado por você.

Testes unitários são considerados tão importantes que são requisitos obrigatórios para cada nova implementação de código em novos pull requests. Dessa forma, garantimos que os códigos anteriores continuem funcionando e os novos estejam também confiáveis.

# SonarCloud

O SonarCloud é um serviço de análise estática de código que consegue detectar duplicação de código, code smells, erros de lint, vulnerabilidades, test coverage, etc. Esse serviço se integra ao CI (_Continous Integration_  ​é a prática de automatizar a integração de alterações de código de vários contribuidores em um único projeto de software​) e funciona como um revisor de código automático, facilitando o trabalho de toda a equipe que, em vez de se preocupar com os mínimos detalhes de código na hora da revisão, pode focar em detectar erros de lógica, design de solução ou implementação.

Através do SonarCloud também podemos determinar quais os níveis mínimos aceitáveis para que um pull request possa ser aceito. Por exemplo, podemos determinar que a cobertura mínima de testes seja de 80%, que cada pull request não pode adicionar novos bugs ou code smells. Dessa forma, diminui os riscos do projeto perder qualidade sem que as pessoas mantenedoras saibam.

Além de encontrar e apresentar possíveis problemas no código, ele conta com uma explicação de porquê aquilo é um problema e possíveis soluções. Vou dar um exemplo: se você cria um código e usa o Math.random() para gerar um ID, o SonarCloud vai alertar que essa função é um pseudo random e que pode ser insegura para o que você está tentando fazer, ele vai mostrar exemplos de problemas e sugerir outras implementações mais seguras para gerar IDs.

![](https://miro.medium.com/max/700/0*jxSkQ5Xd_NK1AOiq)

Fonte: Documentação do SonarCloud

# Percy

O [Percy](​​https://percy.io/) é um serviço de teste de regressão visual automático, ou seja, ele compara cada pull request com o snapshot que ele já tem salvo e dispara um alerta caso exista alguma diferença. Isso é muito útil para evitar mudanças indesejadas, por exemplo: imagina que você corrige um bug no menu de uma determinada página do seu site, você testa, garante que está tudo OK e sobe para produção. Em seguida, você descobre que sua correção quebrou o menu em outras páginas que você não tinha imaginado e nem testado. O Percy é responsável por fazer esses testes para você e, caso seu código mude o visual de alguma outra página ou componente, o teste quebra e você fica sabendo através de uma comparação de imagens entre o antes e depois.

![](https://miro.medium.com/max/700/0*ixV7Bd1B4YvcZ-yM)

Fonte: Documentação do Percy

# DataDog

O DataDog é um serviço de monitoramento de cloud e nós usamos ele aqui na Loft para monitorar nossos logs, recursos da nossa infraestrutura, APMs dos nossos serviços, entre outras coisas.Mesmo sendo muito cuidadoso(a), existe a possibilidade de em algum momento você vai subir um bug para produção, e ter um sistema de busca e filtro de logs facilita muito a vida na hora de descobrir o que aconteceu.

Através do DataDog é possível enxergar todo o percurso de um request, response gerada e tempo que levou. Também é possível analisar isoladamente as interações de um usuário até o bug acontecer. Isso pode ser muito útil quando aparece aquele caso de erro intermitente que sem logs pode levar dias para descobrir.

# Processos e práticas que utilizamos

Até agora falamos muito das ferramentas que usamos para ajudar a automatizar nossas tarefas de revisão, teste e melhoria de código. Agora vamos contar sobre as principais práticas que seguimos, que nos ajudam a manter o código com uma boa qualidade e disseminar conhecimento entre as pessoas desenvolvedoras.

# Pair Programming

Pair Programming é a prática de programar em dupla e funciona como um code review em tempo real. Na prática, uma pessoa desenvolve o código enquanto a outra pessoa, que não está com a mão na massa, guia as decisões de design de código, revisa o código e propõe casos de teste.

No ambiente virtual, com pessoas da equipe distribuídas, pode ser difícil fazer pair programming, mas essa forma de trabalhar é extremamente útil para produzir códigos com menos bugs e distribuir o conhecimento entre as pessoas da equipe. Aqui na Loft temos o costume de abrir uma reunião no Zoom, compartilhar a tela e trabalhar com uma pessoa desenvolvedora mexendo no código e a outra orientando, discutindo soluções e até pesquisando alternativas. Além dos benefícios citados, essa prática ajuda a manter o foco, pois é mais difícil se distrair com notificações do slack, email, redes sociais e etc.

# Pull Request

Pull request ou merge request é um recurso comum em diferentes serviços de git como Github e Bitbucket, que permite você submeter seu código para revisão, antes dele ser mesclado com a branch principal do seu projeto. A vantagem de trabalhar dessa forma é garantir que todo novo trecho de código seja revisado antes de entrar no projeto. Isso permite que outras pessoas desenvolvedoras sugiram melhorias, encontrem bugs em potencial e também tomem conhecimento do novo código.

Todos os projetos aqui na Loft seguem o modelo de pull requests. Na prática, isso significa que sempre criamos nossas features em uma branch separada e, quando temos um mínimo entregável, abrimos um pull request para que as pessoas do time revisem o código. Após revisado e aprovado, podemos fazer o merge e automaticamente enviar a nova feature para produção.

No meu time, por exemplo, nós exigimos que cada pull request tenha ao menos 2 aprovações antes do merge ser liberado. Isso é configurado diretamente no GitHub e, dessa forma, garantimos que ao menos 2 pessoas do time conseguiram revisar e não encontraram problemas no novo código. Pode parecer burocrático, mas esse processo de revisão acontece em poucas horas e o benefício gerado para o time é muito grande. Por exemplo, no nosso time já pegamos, em pull requests, alterações em arquivos que não estavam no escopo da feature, e pudemos corrigir isso antes de subir para produção. Também já discutimos implementações e melhorias de performance antes que o código viesse a ser um problema.

# Métricas de engenharia

Outro ponto importante é: como saber se todo esse esforço está dando certo? Como saber se o time está sendo mais ou menos produtivo? Se existem mais bugs ou menos bugs a cada semana? Todas essas perguntas podem ser respondidas coletando métricas dos times de desenvolvimento, como por exemplo a métrica que mede o tempo entre o primeiro commit e o deploy para produção. Ela dá indícios de quanto tempo um time leva para colocar algo novo em produção.

Nós temos um artigo detalhando o  [uso de métricas de engenharia na Loft](https://medium.com/loftbr/como-usamos-m%C3%A9tricas-para-potencializar-a-efici%C3%AAncia-do-time-de-engenharia-de-software-da-loft-a23698bce6fd). Em resumo, essas métricas nos ajudam a saber se estamos na direção certa e, quando elas mudam drasticamente, podemos parar e tomar uma decisão sobre como melhorar nossos processos e ambiente de trabalho.

# Talks

Considerando que cada pessoa do time tem um conhecimento para compartilhar, muitas vezes esse conhecimento é compartilhado no dia-a-dia, durante um pair programming ou em reuniões, mas às vezes têm assuntos maiores que poderiam ser mais explorados.

Pensando nisso, no meu time resolvemos criar o Owner Talks, que é um espaço de 15 a 30 minutos, onde qualquer pessoa do time pode compartilhar um conhecimento, seja ele técnico ou não. Esse espaço tanto funciona para disseminar conhecimento para o time quanto para treinar técnicas de apresentação, que é uma habilidade importante no nosso dia-a-dia. Nas nossas talks já falamos de assuntos como: testes automatizados, divisão de contextos em react, psicologia, tratamento de erros e etc.

# O que podemos concluir com tudo isso?

Você pode ter uma grande experiência de codificação e conhecer todas as melhores práticas para deixar o código legível, fácil de manter e evoluir, mas como você garante que as outras pessoas desenvolvedoras, que trabalham com você, consigam manter o mesmo padrão e que o sistema não se torne um projeto legado impossível de manter?

Estabelecer práticas e automatizar checagens de código ajuda muito a manter um padrão consistente e evitar que códigos, difíceis de manter, sejam inseridos no projeto sem ninguém perceber.

Além disso, sempre existe a possibilidade de bugs surgirem, partes do projeto serem difíceis de manter, mas esse conjunto de ferramentas e práticas tem funcionado bastante aqui na Loft e nos ajuda a manter o foco nas necessidades das pessoas que usam nossos sistemas, em vez ter um árduo trabalho de refactoring periodicamente.

Por fim, se você usa alguma outra ferramenta ou prática, não deixe de dividir com a gente, estamos sempre buscando melhorar nosso processo e aumentar ainda mais a qualidade da nossa base de código.
