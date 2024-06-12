<table>
<tr>
<Table>
  <tr>
    <td><a href= "https://gerandofalcoes.com//"><img src="/imagens/logo-gerandofalcoes.png" alt="Gerando Falcões" border="0"></td>
    <td>
      <a href= "https://www.inteli.edu.br/"><img src="/imagens/logo-inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
    </td>
  </tr>
</table>

<img src="../imagens/fly.png">

## Grupo Fly

## :student: Integrantes:

- <a href="https://www.linkedin.com/in/bruna-brasil-alexandre/">Bruna Brasil</a>
- <a href="https://www.linkedin.com/in/claramohammad/">Clara Mohammad</a>
- <a href="https://www.linkedin.com/in/heitorprudente/">Heitor Prudente</a>
- <a href="https://www.linkedin.com/in/henrique-ottoboni-magalhaes-tecnologia/">Henrique Ottoboni</a>
- <a href="https://www.linkedin.com/in/isabella-fernandes-saldanha-138a631b4/">Isabella Fernandes</a>

## Sumário

- [1. Visão Geral do Projeto](#1-visão-geral-do-projeto)
  - [1.1 Entendimento da Demanda](#11-entendimento-da-demanda)
    - [1.1.1 Partes Interessadas](#111-partes-interessadas)
    - [1.1.2 Análise da Indústria](#112-análise-da-indústria)
    - [1.1.3 Modelo de Porter](#123-modelo-de-porter)
  - [1.2 Problema](#12-problema)
    - [1.2.1 Análise do Problema](#121-análise-do-problema)
    - [1.2.2 Análise do Cenário (Matriz SWOT)](#122-análise-do-cenário-matriz-swot)

- [2. Proposta da Solução](#2-proposta-da-solução)
  - [2.1 Infográfico](#21-infográfico)
  - [2.2 Descritivo Geral da Solução](#22-descritivo-geral-da-solução)
  - [2.3 Proposta Tecnológica e Benefícios](#23-proposta-tecnológica-e-benefícios)
    - [2.3.1 Tipo de arquitetura de nuvem escolhida](#231-tipo-de-arquitetura-de-nuvem-escolhida)
    - [2.3.2 Modelo de negócio](#232-modelo-de-negócio)
    - [2.3.3 Como a arquitetura de nuvem escolhida será utilizada](#233-como-a-arquitetura-de-nuvem-escolhida-será-utilizada)
    - [2.3.4 Benefícios trazidos pela arquitetura de nuvem proposta](#234-benefícios-trazidos-pela-arquitetura-de-nuvem-proposta)
  - [2.4 Proposta de Valor (Value Proposition Canvas)](#24-proposta-de-valor-value-proposition-canvas)
  - [2.5 Matriz de Risco](#25-matriz-de-risco)
  - [2.6 Matriz de Oportunidades](#26-matriz-de-oportunidades)

- [3. Análise de experiência do usuário](#3-análise-de-experiência-do-usuário)
  - [3.1 Personas](#31-personas)
  - [3.2 Mapa de jornada do usuário](#32-mapa-de-jornada-do-usuário) 

- [4. Requisitos](#4-requisitos)
  - [4.1 Requisitos Funcionais](#41-requisitos-funcionais)
  - [4.2 Requisitos não Funcionais](#42-requisitos-não-funcionais)
  - [4.3 Casos de Uso e Histórias dos Usuários](#43-casos-de-uso-e-história-dos-usuários)

- [5. Projeto de Solução](#5-projeto-de-solução)
  - [5.1 Diagrama de Classes](#51-diagrama-de-classes)
    - [5.1.1 Diagrama de Classes de Domínio](#511-diagrama-de-classes-de-domínio)
    - [5.1.2 Diagrama de Classes de Implementação](#512-diagrama-de-classes-de-implementação)
  - [5.2 Diagrama de Implantação](#52-diagrama-de-implantação)
  - [5.3 Tecnologias e Ferramentas](#53-tecnologias-e-ferramentas)

- [6. Interface](#6-interface)
  - [6.1 Design System](#61-design-system)
  - [6.2 Projeto de Interface (Wireframes)](#62-projeto-de-interface-wireframe)
  - [6.3 Frontend](#63-frontend) 

- [7. Projeto de Banco de Dados](#7-projeto-de-banco-de-dados)
  - [7.1 Modelo Conceitual](#71-modelo-conceitual)
  - [7.2 Modelo Lógico](#72-modelo-lógico)

- [8. Testes de Software](#8-testes-de-software)
  - [8.1 Demonstração da integração](#81-demonstração-da-integração)
    - [8.1.1 Testes das rotas de Api](#811-testes-das-rotas-de-api)
    - [8.1.2 Processo de implantação do backend e frontend na instância EC2](#812-processo-de-implantação-do-backend-e-frontend-na-instância-ec2)
    - [8.1.3 Demonstração de integração com Banco de Dados](#813-demonstração-de-integração-com-banco-de-dados)
  - [8.2 Teste de Integração](#82-teste-de-integração)
  - [8.3 Testes automatizados](#83-testes-automatizados)
  - [8.4 Simulação de Carga](#84-simulação-de-carga) 
  - [8.5 Testes de Usabilidade](#85-testes-de-usabilidade)
    - [8.5.1 Roteiro dos Testes](#851-roteiro-dos-testes)
    - [8.5.2 Descrição e resultados](#852-descrição-e-resultados)
  - [8.6 Testes de Requisitos Não Funcionais](#86-testes-de-requisitos-não-funcionais)

- [9. Procedimento de Implantação da Solução](#9-procedimento-de-implantação-da-solução)
  - [9.1 Procedimento de Implantação do Sistema](#91-procedimento-de-implantação-do-sistema)
  - [9.2 Procedimento de Implantação do Banco de Dados](#92-procedimento-de-implantação-do-banco-de-dados)
  - [9.3 Documentação Automática do Sistema (Swagger)](#93-documentação-automática-do-sistema-swagger)

- [Referências](#referências)
- [Apêndice](#apêndice)

# 1. Visão Geral do Projeto

&emsp;&emsp; O projeto em questão visa atender a uma demanda crucial no cenário das organizações não governamentais (ONGs), fornecendo uma solução abrangente para a gestão de atendimentos. Com base na necessidade identificada de cadastro e gestão dos atendidos, registro de frequências e faltas por oficina/atividade, anotações sobre atendimentos pontuais, e visualização de histórico por atendido, aula ou oficina, o projeto propõe o desenvolvimento de uma plataforma digital. Essa solução não apenas simplificará processos complexos, mas também oferecerá insights valiosos e ferramentas poderosas para impulsionar o impacto social positivo

## 1.1 Entendimento da Demanda

&emsp;&emsp; A demanda para este projeto é estabelecida com base na necessidade de fornecer uma solução abrangente para as organizações não governamentais (ONGs) gerenciarem seus atendimentos. Isso inclui o cadastro e gestão dos atendidos, a possibilidade de registrar frequências e faltas por oficina/atividade, anotações sobre atendimentos pontuais, e a visualização de histórico por atendido, aula ou oficina. Além disso, para a Gerando Falcões, é essencial um protótipo destinado à visualização desses dados consolidados e abertos para as ONGs, com seus acessos definidos pelas necessidades de cada organização. Após a aprovação e feedbacks, espera-se o desenvolvimento da solução proposta para a realização de um piloto e coleta de feedbacks adicionais.

### 1.1.1 Partes Interessadas

&emsp;&emsp; As partes interessadas desempenham papéis fundamentais no desenvolvimento, implementação e utilização da solução proposta. São elas:

#### Gerando Falcões

&emsp;&emsp; A Gerando Falcões é uma organização reconhecida nacionalmente por sua atuação no desenvolvimento social, especialmente em comunidades carentes e favelas. Fundada por Edu Lyra, a Gerando Falcões tem como missão acelerar o poder de impacto de líderes comunitários, oferecendo suporte, recursos e oportunidades para transformar realidades. Como uma das principais partes interessadas neste projeto, a Gerando Falcões desempenha um papel central ao fornecer insights valiosos sobre as necessidades das ONGs e dos líderes comunitários, garantindo que a solução desenvolvida seja eficaz e alinhada com os objetivos de desenvolvimento social da organização.

#### Inteli

&emsp;&emsp; A Inteli é uma instituição de ensino superior dedicada à excelência acadêmica e à inovação educacional. Como parceira neste projeto, a Inteli está comprometida em fornecer recursos humanos e técnicos para o desenvolvimento da solução proposta. Através de sua equipe de professores, pesquisadores e alunos, a Inteli contribui com expertise em tecnologia da informação e gestão de projetos, garantindo que a solução seja desenvolvida com os mais altos padrões de qualidade e eficiência. Além disso, a Inteli também desempenha um papel importante na validação e implementação da solução, garantindo que ela atenda às necessidades e expectativas das partes interessadas envolvidas.

### 1.1.2 Análise da Indústria 

&emsp;&emsp; Nesta seção, serão abordados os elementos cruciais que definem o setor das ONGs e organizações sociais, desdobrando-se em contexto da indústria, modelo de negócio, tendências atuais, players de mercado e o Modelo de Porter. 

#### 1.1.2.1 Contexto da indústria 

&emsp;&emsp; A Rede Gerando Falcões, fundada por Eduardo Lyra, é um ecossistema de desenvolvimento social que nasceu em comunidades carentes. A fim de transformar a vida de crianças e jovens em situação de vulnerabilidade, a Gerando Falcões trabalha através da combinação de educação socioemocional, educação profissional, acesso ao trabalho e tecnologias e à cultura.

&emsp;&emsp; A respeito de números, a ONG atua em mais de 6000 comunidades espalhadas pelo Brasil e conta com mais de 1000 ONG's em seu ecossistema, alcançando, assim, mais de 700 mil pessoas. Nestas diversas comunidades, a Gerando Falcões atua na formação de líderes sociais por meio da Falcons University, no acompanhamento de organizações, como a Unidades Aceleradas e Rede Fellows, além de atuar em projetos como a Fome Não, Bolsa Digital e o Favela 3D.

&emsp;&emsp; Outro ponto importante a ser destacado em seu contexto de indústria são as parcerias com investidores sociais e apoiadores. Dentre eles, as empresas GOL, MRV, Instituto Bandeirantes, accenture, Microsoft, entre outros. Assim, atuando em um contexto e um meio de vulnerabilidade, a Gerando Falcões cresce em trabalhos, projetos sociais e parcerias em prol do desenvolvimento de crianças e jovens de comunidades carentes.  



#### 1.1.2.2 Tendências 

&emsp;&emsp; Se inserir no cenário atual das organizações não governamentais (ONGs) e entidades sociais requer uma compreensão profunda das forças que moldam nosso mundo. Em uma era caracterizada por rápidas transformações tecnológicas e mudanças socioeconômicas, estas organizações estão no centro de uma evolução crucial. Sabendo disso, a adaptabilidade, a inovação e a colaboração atuam como pilares fundamentais para enfrentar os desafios contemporâneos e aproveitar as oportunidades emergentes.

&emsp;&emsp;Nesse sentido, esta subseção tem como objetivo explorar tendências chave que estão redefinindo o setor, oferecendo uma visão ampla sobre como essas tendências podem ser integradas e utilizadas para fortalecer as missões sociais. É essencial que as ONGs, como a Gerando Falcões e suas parceiras, estejam preparadas para navegar neste cenário em constante mudança, garantindo que continuem a criar um impacto significativo na sociedade.

- **Digitalização e Tecnologia em ONGs:** A pandemia acelerou a digitalização do terceiro setor, evidenciando a necessidade de adaptar os processos organizacionais ao ambiente digital. O uso de tecnologias digitais se tornou essencial não apenas para a captação de recursos, com 55% dos doadores preferindo contribuições online, mas também para a gestão interna, oferecendo mais transparência e eficiência. A implementação de sistemas de gestão integrada é um exemplo de como a tecnologia pode melhorar a administração de ONGs, aumentando sua credibilidade e capacidade de atrair mais apoio[1].

- **Gestão de Dados e Transparência:** O Relatório Global de Tecnologia de ONGs mostra que as organizações não governamentais em todo o mundo estão cada vez mais utilizando tecnologia para melhorar a comunicação, captação de recursos online, mídia social, tecnologia móvel e software de produtividade. Isso enfatiza a importância da gestão de dados para promover a transparência, permitindo que as ONGs demonstrem claramente seu impacto e inspirem maior filantropia[2].

- **Colaboração e Parcerias Estratégicas:** A colaboração se tornou uma ferramenta vital para o crescimento e o sucesso das organizações, destacando-se como uma abordagem eficaz para impulsionar a inovação e a vantagem competitiva. Parcerias estratégicas entre empresas são alianças colaborativas com o objetivo de alcançar metas comuns, envolvendo o compartilhamento de recursos, conhecimentos e expertise, visando a criação de valor mútuo. Tais colaborações permitem o acesso a recursos complementares, a expansão para novos mercados, o compartilhamento de riscos e custos, aumentando a inovação e fortalecendo a vantagem competitiva no mercado[3].

- **Inovação Social e Sustentabilidade:** O setor de ONGs está investindo cada vez mais em software de gestão de relacionamento com o cliente (CRM) para rastrear doações e gerenciar informações de contato dos doadores, demonstrando a integração de tecnologias e aplicativos móveis para agilizar processos. A adoção de plataformas de crowdfunding também está crescendo, permitindo que ONGs angariem fundos de uma ampla rede de investidores através de mídias sociais e sites especializados. Essas tendências refletem um foco crescente em inovação social e sustentabilidade financeira, ajudando organizações a atingir mais efetivamente suas missões[4].

- **Adaptação e Resiliência:** A capacidade de adaptação e resiliência tem sido crucial para as ONGs, especialmente em tempos de crise. A tecnologia desempenha um papel vital nesse aspecto, permitindo que as organizações se ajustem rapidamente a novas realidades, mantendo a continuidade de seus serviços. A transformação digital nas ONGs envolve a mudança cultural e a redefinição de processos, garantindo que estejam preparadas para enfrentar desafios futuros[5].

&emsp;&emsp; Este panorama sugere um caminho promissor para as ONGs, onde a incorporação de tendências tecnológicas e estratégicas não apenas fortalece suas operações diárias mas também as prepara melhor para enfrentar desafios futuros, maximizando seu impacto social. Portanto, para as ONGs, incluindo a Gerando Falcões, alinhar-se com essas tendências não é apenas uma questão de crescimento, mas também de sobrevivência e relevância contínua em um mundo em rápida mudança.



#### 1.1.2.3 3 players

&emsp;&emsp; De início, é válido destacar que instituições sociais, como a Gerando Falcões, tendem a trabalhar em conjunto e harmonia com demais ONG's, visto que o grande objetivo é promover impacto positivo na sociedade. Porém, é possível haver outros "players" que atuam muitas vezes nas mesmas regiões. Assim, podemos citar como 3 players o Instituto da Criança, a Fundação Roberto Marinho e até mesmo o Instituto Ayrton Senna.

&emsp;&emsp; Descrevendo um pouco mais, temos:

- Instituto da Criança: criado em 1998, o instituto dá início em apoio a crianças em situação de vulnerabilidade, além de ter apoiado uma instituição com crianças com paralisia cerebral. Em seguida, um programa interno é criado a fim educar a criança a respeito de fatos ao seu entorno, ou seja, educação familiar, tópicos como cidadania, planejamento familiar, alcoolismo, entre outros. Programas como este que sustentam grande parte do projeto social. Outro ponto importante a ser citado é que o Instituto da Criança foca nos empreendedores sociais, assim como a Gerando Falcões, ou seja, pessoas que estão à frente dos projetos sociais e que viabilizam a existência e continuidade deles.

- Fundação Roberto Marinho: fundada em 1977, a fundação tem como objetivo promover a inclusão social e o desenvolvimento humano através da educação e da cultura. Segundo o próprio site da fundação, a principal missão é ser um ambiente colaborativo onde todos que acreditam no impacto positivo da educação se encontram, e encontram ferramentas para a produção e implementação de metodologias e ações socioeducacionais transformadoras e suporte para mobilização. Sendo assim, mais um player.

- Instituto Ayrton Senna: por fim, o Instituto Ayrton Senna, que é uma organização sem fins lucrativos comprometida com a educação integral. O instituto tem como missão a melhoria da qualidade da educação pública brasileira, visando oferecer oportunidades de desenvolvimento humano e social para crianças e jovens em todo o país. Com diversos programas de desenvolvimento voltado à criança e ao adolescente, o Instituto Ayrton Senna já realizou mais de 30 milhões de atendimentos, segundo o site do instituto. Além disso, está presente em todos os estados brasileiros e atuando em mais de 3 mil municípios. Desse modo, caracterizando mais um dos 3 players que atuam com projetos sociais como a Gerando Falcões.

### 1.1.3 Modelo de Porter

&emsp;&emsp; As Cinco Forças de Porter, elaboradas pelo economista Michael Porter em 1979, constituem uma ferramenta crucial para a análise do cenário competitivo de um produto. Amplamente adotadas em estratégias empresariais e planejamento de investimentos, essas forças permitem avaliar tanto o potencial de lucro de uma indústria quanto a posição estratégica de uma empresa dentro desse contexto. Nessa perspectiva, esses princípios foram empregados na elaboração da seguinte análise sobre o Gerando Falcões:

<h6 align="center"> Figura 1: Cinco Forças de Porter </h6>

<img src="../imagens/5 Forças de Porter.png" alt="5 Forças de Porter" width="700">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

#### Ameaça de produtos substitutos:

&emsp;&emsp; Produtos substitutos são aqueles que podem satisfazer as mesmas necessidades ou demandas dos compradores da Gerando Falcões, oferecendo alternativas ao seu produto social. No contexto em que se encontra a Gerando Falcões, essa ameaça pode ser considerada como média. Isso se deve ao fato da oferta de projetos realizados por outras organizações sociais atuantes em favelas, como a CUFA (Central Única das Favelas), que atende mais de 5 milhões de pessoas em 27 estados brasileiros, e de projetos governamentais, como o Periferia Viva, que busca criar novas políticas públicas voltadas à saúde, educação, moradia, segurança alimentar e lazer nas periferias brasileiras. No entanto, é importante destacar que a Gerando Falcões possui vantagens frente a esses projetos, pois já está estabelecido e possui resultados sólidos em projetos como a Falcons University, que já formou mais de 2 mil jovens em cursos de tecnologia, empreendedorismo e liderança.  

#### Ameaça de novos entrantes:

&emsp;&emsp; Novos entrantes são as organizações sociais que podem surgir ou se expandir para o mesmo segmento ou para segmentos similares ao da Gerando Falcões, oferecendo concorrência ao seu serviço ou produto social. Essa ameaça pode ser considerada como baixa para a Gerando Falcões, pois existem barreiras de entrada que dificultam a chegada e o estabelecimento de novos concorrentes. Essas barreiras incluem a necessidade de recursos, tempo e apoio para a criação de uma organização no porte da Gerando Falcões, bem como as regulamentações legais e sociais que devem ser cumpridas.  

#### Poder de negociação dos clientes:

&emsp;&emsp; O poder de negociação dos clientes é a capacidade que eles têm de influenciar as condições, os preços, a qualidade ou a reputação da organização social. Por se tratar de uma organização social sem fins lucrativos, o poder de negociação dos clientes da Gerando Falcões se torna baixo. A ameaça nesse quesito não vem da compra do seu produto pelo cliente, mas sim pelo grau de satisfação e fidelidade das pessoas atendidas pela organização. Diante disso, a Gerando Falcões consegue manter seus atendidos satisfeitos, tendo impactado mais de 5.500 favelas em todo o Brasil.  

#### Poder de negociação dos fornecedores:

&emsp;&emsp;O poder de negociação dos fornecedores é a capacidade que eles têm de influenciar as condições, a qualidade ou a disponibilidade dos seus recursos. O poder de negociação dos fornecedores da Gerando Falcões pode ser avaliado como alto, pois eles são essenciais para a sustentabilidade e a expansão da organização social. Além disso, eles podem encerrar as parcerias caso não observem os retornos esperados no projeto, como o impacto social, a transparência, a eficiência ou a inovação.  

#### Rivalidade entre concorrentes

&emsp;&emsp;Rivalidade entre concorrentes é uma das cinco forças de Porter que mede o grau de competição entre as organizações sociais que atuam na mesma área ou em áreas relacionadas. A rivalidade entre os concorrentes da Gerando Falcões pode ser avaliada como alta, pois a organização enfrenta grandes concorrentes, como a CUFA, a Fundação Gol de Letra e a Secretaria Nacional de Periferias do Governo Federal. A CUFA é uma organização social que atende mais de 5 milhões de pessoas, além de ter reconhecimento nacional e internacional e diversos prêmios, como o iBest. A Fundação Gol de Letra é uma organização social que atua há mais de 20 anos na área de educação e desenvolvimento comunitário, mas tem uma abrangência limitada ao Rio de Janeiro e São Paulo. A Secretaria Nacional de Periferias é uma iniciativa pública que visa criar novas políticas públicas voltadas às periferias brasileiras, mas ainda está em fase de implementação. Como ponto forte, a Gerando Falcões possui parcerias sólidas e de renome com empresas como Google e NBA, que podem aumentar sua visibilidade, credibilidade e capacidade de atuação.  

## 1.2 Problema

&emsp;&emsp;Nesta seção, nos aprofundaremos na análise do problema que a Rede Gerando Falcões enfrenta em suas operações e missão social. Essa análise é fundamental para entender os desafios e obstáculos que a organização precisa superar para alcançar seus objetivos e promover um impacto positivo nas comunidades de favelas em todo o Brasil. Vamos examinar de perto os principais problemas identificados e suas implicações, fornecendo insights valiosos que orientarão o desenvolvimento de estratégias eficazes para enfrentar esses desafios de frente.

### 1.2.1 Análise do Problema
  
&emsp;&emsp; A Gerando Falcões enfrenta desafios significativos em sua missão de transformar comunidades de favelas em todo o Brasil. Um desses desafios é a necessidade de melhorar a eficácia do controle de dados das ONGs parceiras, garantindo ao mesmo tempo a gestão eficiente de recursos e a monitoração do progresso de jovens e famílias atendidas em suas oficinas educacionais e programas de desenvolvimento. O principal problema reside na capacidade de alcançar e manter a eficiência operacional, enquanto se maximiza o impacto social dos programas oferecidos.

&emsp;&emsp; Para lidar com esse problema, é essencial implementar uma solução que permita a coleta, análise e visualização eficaz de dados relacionados às atividades das oficinas e ao progresso dos participantes. A falta de ferramentas acessíveis para gerenciar informações e avaliar o impacto das iniciativas dificulta a tomada de decisões baseada em evidências e a adaptação estratégica das atividades para atender melhor às necessidades das comunidades.

&emsp;&emsp; Portanto, a solução requer o desenvolvimento de uma plataforma digital que ofereça recursos de gerenciamento de dados, dashboards interativos para visualização de informações em tempo real e funcionalidades intuitivas e simplificadas para facilitar o acesso e uso por parte de todos os envolvidos, desde os líderes das ONGs até os professores e a equipe da Gerando Falcões. Essa abordagem não só resolverá os problemas operacionais enfrentados pela rede, mas também aumentará a capacidade de gerar um impacto social mais profundo e duradouro nas comunidades atendidas.

### 1.2.2 Análise do Cenário (Matriz SWOT)

&emsp;&emsp; A análise SWOT (Strengths, Weaknesses, Opportunities, Threats) é uma ferramenta estratégica amplamente utilizada para avaliar os pontos fortes e fracos internos de uma organização, bem como as oportunidades e ameaças externas que ela enfrenta. Ao identificar esses fatores, a análise SWOT proporciona insights valiosos que podem orientar o planejamento estratégico e ajudar na tomada de decisões.

<h6 align="center"> Figura 2: Análise Swot </h6>

<img src="../imagens/swot.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Neste contexto, a imagem acima é a aplicação da análise SWOT à Rede Gerando Falcões, uma organização dedicada ao desenvolvimento social em comunidades de favelas em todo o Brasil, revela uma série de aspectos cruciais que impactam sua eficácia e sustentabilidade. Logo, nos tópicos seguintes têm-se exploração dessa análise e detalhamento dos principais pontos.

### Forças

Ao avaliar as forças da Gerando Falcões, destacamos quatro pontos cruciais:

1. **Experiência e Conhecimento Acumulado:** A Gerando Falcões possui uma equipe experiente e altamente qualificada, com profundo conhecimento das necessidades e dinâmicas das comunidades de favelas.

2. **Ampla Rede e Alcance Nacional:** Com uma presença em mais de 6000 favelas em todo o Brasil, a Gerando Falcões tem uma rede estabelecida de líderes comunitários e organizações parceiras, permitindo um alcance significativo em suas iniciativas.

3. **Diversidade de Programas e Projetos:** A organização oferece uma variedade de programas e projetos, desde serviços educacionais e econômicos até iniciativas de transformação sistêmica de favelas, demonstrando sua capacidade de abordar múltiplas necessidades das comunidades.

4. **Missão Social Clara:** A Gerando Falcões possui uma missão social clara e bem definida, focada em transformar a vida de crianças, jovens e líderes comunitários por meio da educação, do desenvolvimento econômico e do acesso a oportunidades.

### Fraquezas 

Entretanto, a análise também revela algumas fraquezas que a Gerando Falcões enfrenta, entre elas:

1. **Dependência de Doações:** A organização depende fortemente de doações e financiamento externo para sustentar suas operações, o que pode criar vulnerabilidades financeiras e limitar sua autonomia.

2. **Complexidade Tecnológica:** A adoção e integração de tecnologias podem apresentar desafios devido à complexidade e à necessidade de capacitação da equipe, impactando a eficiência e eficácia dos programas.

3. **Adoção pela Comunidade:** A aceitação e adesão das comunidades às iniciativas da Gerando Falcões podem variar, o que pode afetar a eficácia e a sustentabilidade das intervenções.

4. **Implementação em Escala:** A implementação e expansão de programas em larga escala podem enfrentar desafios logísticos, operacionais e de engajamento comunitário, limitando o alcance e o impacto das iniciativas.

5. **Recursos Externos:** A dependência excessiva de recursos externos, como parcerias e apoio financeiro, pode expor a organização a riscos relacionados à disponibilidade e estabilidade desses recursos.

### Oportunidades

No que diz respeito às oportunidades, a Gerando Falcões apresenta o seguinte cenário:

1. **Expansão do Impacto Social:** A organização tem a oportunidade de ampliar seu impacto social, desenvolvendo e implementando novos programas e projetos que atendam às necessidades emergentes das comunidades.

2. **Desenvolvimento Tecnológico:** O uso estratégico de tecnologias pode melhorar a eficiência operacional, aumentar o alcance e a acessibilidade dos serviços, e proporcionar novas formas de engajamento e participação da comunidade.

3. **Capacitação de Lideranças Locais:** Investir na capacitação contínua de líderes comunitários pode fortalecer a capacidade das comunidades de favelas de autogerenciarem e impulsionarem seu próprio desenvolvimento, garantindo a sustentabilidade das iniciativas a longo prazo.

4. **Parcerias Estratégicas:** A Gerando Falcões pode explorar parcerias estratégicas com outras organizações, instituições governamentais e setor privado para alavancar recursos, conhecimentos e redes, ampliando assim seu impacto e alcance.

### Ameaças

No entanto, há também ameaças a serem consideradas, tais como:

1. **Concorrência:** A concorrência de outras organizações sociais que atuam nas mesmas áreas ou oferecem serviços similares pode limitar o acesso a recursos e colaboradores, bem como impactar a relevância e eficácia das iniciativas da Gerando Falcões.

2. **Mudanças Regulatórias:** Alterações nas políticas públicas ou regulamentações podem afetar negativamente o ambiente operacional e financeiro da organização, exigindo adaptações e ajustes em suas estratégias e programas.

3. **Resistência à Mudança:** A resistência à mudança por parte das comunidades ou de outros stakeholders pode dificultar a implementação e adoção de novas abordagens e tecnologias, retardando o progresso e o impacto das iniciativas.

4. **Desafios Sociais Emergentes:** A emergência de novos desafios sociais, como crises econômicas, pandemias ou desastres naturais, pode sobrecarregar os recursos e capacidades da organização, comprometendo sua capacidade de resposta e continuidade das operações.

&emsp;&emsp; Em suma, ao compreender esses aspectos através da análise SWOT, a Gerando Falcões está melhor equipada para desenvolver estratégias que capitalizem suas forças, mitiguem suas fraquezas, aproveitem as oportunidades disponíveis e enfrentem as ameaças potenciais, garantindo assim sua capacidade de continuar promovendo um impacto positivo nas comunidades de favelas em todo o Brasil.

# 2. Proposta da Solução 

&emsp;&emsp; Essa seção é destinada a detalhar a solução concebida pela equipe fly, focada em descrever as funcionalidades e características do produto mínimo viável (MVP) proposto, bem como a lógica por trás das decisões de design e desenvolvimento. O objetivo é fornecer um entendimento claro das etapas que serão tomadas para atender às necessidades identificadas da Gerando Falcões, garantindo que a solução seja não apenas tecnicamente viável, mas também alinhada com o impacto social que se deseja alcançar.

## 2.1 Infográfico

&emsp;&emsp;Infográfico é uma representação visual de informações que combina elementos como texto, imagens, gráficos, ícones e cores para transmitir conceitos complexos de forma clara e concisa. O objetivo principal do infografico abaixo é comunicar a solução Fly de maneira eficaz e envolvente, permitindo que o público absorva e compreenda o conteúdo apresentado de forma dinâmica.

<h6 align="center"> Figura 3: infográfico </h6>

<img src="../imagens/infográfico-edit.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Além de fornecer uma forma mais fácil de assimilar informações, os infográficos também têm o potencial de aumentar o engajamento do público e melhorar a retenção de informações. Seu uso inteligente pode ajudar a simplificar conceitos complexos, contar histórias de maneira visualmente impactante e destacar pontos-chave de uma maneira memorável.

## 2.2 Descritivo Geral da Solução

&emsp;&emsp; A solução proposta pelo grupo Fly envolve o desenvolvimento de uma plataforma web projetada para otimizar a gestão de atendimentos das ONGs parceiras da Gerando Falcões. Essencialmente, o projeto visa fornecer um sistema que simplifique o cadastro de novos participantes em oficinas, registre de forma eficiente as atividades realizadas e monitore a presença de cada participante. Esta solução simples, eficiente e intuitiva, tem como objetivo centralizar informações importantes sobre os serviços prestados e a participação dos atendidos, permitindo uma análise mais aprofundada e uma gestão mais eficaz.

&emsp;&emsp; A tecnologia por trás da solução é projetada para ser simples, pensando em todo tipo de público, inclusive os que não possuem grande familiaridade com o mundo digital. Para o frontend, será utilizado o framework do React.js, conhecido por sua flexibilidade e facilidade de uso, e para o backend, será utilizado o Node.js, assegurando que tudo funcione de maneira fluída e confiável. Os dados serão organizados através do SQLite, uma escolha estratégica pela sua simplicidade e eficiência em armazenamento de dados. Tudo isso será armazenado na nuvem, utilizando serviços da AWS,  o que significa que é possível aumentar a capacidade conforme necessário, mantendo os dados seguros e acessíveis de qualquer lugar.

&emsp;&emsp; O objetivo desse MVP é mais do que apenas fornecer uma solução tecnológica; é capacitar as ONGs a melhorar a organização das informações coletadas, promovendo uma alocação de recursos mais eficiente, além de permitir à Gerando Falcões um acompanhamento mais detalhado, contribuindo para uma compreensão mais profunda das necessidades das comunidades assistidas. Com a visibilidade proporcionada pela plataforma, é esperado amplificar o  impacto social das atividades das ONGs, alinhando-se à missão da Gerando Falcões de acelerar o poder de impacto de líderes de favelas de todo país.

## 2.3 Proposta Tecnológica e Benefícios

&emsp;&emsp;Neste tópico, será apresentada a arquitetura cloud utilizada para o projeto, que é a forma como os componentes de tecnologia se combinam para criar uma nuvem na qual os recursos são agrupados e compartilhados dentro de uma rede. Existem diferentes tipos de arquitetura cloud, dependendo do nível de controle, flexibilidade e escalabilidade que se deseja, e para o projeto foi escolhido um tipo que atende aos requisitos e objetivos do negócio. A implementação e configuração da arquitetura cloud seguiu as especificações do projeto, utilizando os componentes adequados e garantindo a comunicação entre eles. A arquitetura cloud trouxe vantagens para o projeto, em termos de custo, desempenho, segurança e disponibilidade, que serão discutidos em detalhes a seguir.

### 2.3.1 Tipo de arquitetura de nuvem escolhida 

&emsp;&emsp; Uma arquitetura de nuvem refere-se à estrutura geral e ao design de um sistema de computação em nuvem, que envolve a distribuição de recursos de computação, armazenamento, rede e serviços pela internet. Essa abordagem permite que organizações acessem e utilizem recursos de TI de forma flexível e sob demanda, sem a necessidade de investimentos em infraestrutura física local.

&emsp;&emsp; Existem diversas arquiteturas de nuvem possíveis, cada uma com suas características e benefícios específicos, incluindo:

1. Nuvem Pública: Na nuvem pública, os recursos de computação são hospedados e gerenciados por provedores de serviços em nuvem, como Amazon Web Services (AWS), Microsoft Azure e Google Cloud Platform (GCP). Essa arquitetura oferece escalabilidade, flexibilidade e custos reduzidos, mas pode levantar preocupações sobre segurança e privacidade de dados.

2. Nuvem Privada: Na nuvem privada, a infraestrutura de computação é dedicada a uma única organização e pode ser hospedada internamente ou por um provedor de serviços de nuvem privada. Isso oferece controle total sobre os recursos e maior segurança, mas pode ser mais caro devido aos custos de manutenção da infraestrutura.

3. Nuvem Híbrida: A nuvem híbrida combina elementos de nuvens públicas e privadas, permitindo que as organizações aproveitem os benefícios de ambas as arquiteturas. Ela oferece flexibilidade e escalabilidade, além de permitir integração entre sistemas locais e serviços em nuvem.

4. Nuvem Multicloud: Na nuvem multicloud, uma organização utiliza serviços de vários provedores de nuvem para distribuir seus aplicativos e dados. Isso pode oferecer redundância, diversidade de recursos e evitar lock-in de fornecedor, mas pode aumentar a complexidade de gerenciamento.

&emsp;&emsp; No contexto deste projeto, a arquitetura de nuvem escolhida é a Amazon Elastic Compute Cloud (EC2), que é uma parte fundamental da infraestrutura de nuvem da Amazon Web Services (AWS). A Amazon EC2 permite provisionar e gerenciar instâncias virtuais de servidores em nuvem, oferecendo elasticidade, flexibilidade e confiabilidade para hospedar e executar aplicativos e serviços de forma escalável. Essa escolha foi feita com base na necessidade de escalabilidade, confiabilidade e facilidade de gerenciamento do sistema, bem como na familiaridade e na forte reputação da AWS no mercado de computação em nuvem.

### 2.3.2 Modelo de negócio

**Introdução ao Modelo de Negócio:**

&emsp;&emsp;Neste modelo de negócio da plataforma digital Fly será oferecida uma visão abrangente de como a solução proposta se traduz em um empreendimento viável, abordando desde a proposta de valor até as estratégias de mitigação de riscos. A priori, modelo de negócio foi concebido para atender a uma necessidade no cenário das organizações não governamentais (ONGs) e entidades dedicadas ao serviço comunitário, isto é, a Gerando Falcões solicitou um protótipo reconhecendo os desafios enfrentados por essas instituições na gestão eficiente de recursos, monitoramento de atividades e engajamento do público, a plataforma digital foi desenvolvida sob medida para atender a essas demandas. Logo, essa solução busca simplificar processos complexos e oferecer insights valiosos e ferramentas poderosas para impulsionar o impacto social positivo. Com uma abordagem centrada no usuário, prioriza-se a simplicidade, a intuitividade e a personalização, garantindo que os clientes possam extrair o máximo valor da solução.

<h6 align="center"> Figura 4: Modelo De Negócios </h6>

<img src="../imagens/modelo_negocio.png" >

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>


#### 1. Proposta de Valor:

&emsp;&emsp;A proposta de valor da plataforma reside na sua capacidade de resolver problemas específicos enfrentados pelas ONGs e pela Gerando Falcões. Ao oferecer uma solução que ajuda na organização das atividades, no monitoramento de indicadores-chave de engajamento e na eficiente gestão de recursos, a plataforma se destaca pela sua simplicidade, intuitividade e personalização, diferenciando-se das alternativas existentes no mercado. Para a Gerando Falcões, a plataforma representa uma ferramenta valiosa para reunir dados e estatísticas, enquanto para as ONGs beneficiadas, oferece suporte na organização e acesso a recursos essenciais.

#### 2. Segmento de Clientes:

&emsp;&emsp;Os clientes-alvo da plataforma são principalmente a Gerando Falcões e as ONGs que oferecem serviços para a sociedade. Esses segmentos podem se beneficiar de maneiras distintas, o que demanda estratégias de comunicação e relacionamento diferenciadas.

#### 3. Canais de Distribuição:

&emsp;&emsp;A entrega da solução ocorre exclusivamente através de um site acessível via web, sendo que canais eficazes de distribuição incluem o marketing digital, parcerias estratégicas e programas de divulgação. Dessa forma, a principal intencionalidade destes canais é alcançar as ONGs que precisam deste auxilio e intensificar o impacto social de suas atividades, com o intuito de que recebam suporte eficiente para suas operações.

#### 4. Relacionamento com Clientes:

&emsp;&emsp;O relacionamento com os clientes é caracterizado por uma abordagem centrada no feedback constante e no suporte personalizado. A plataforma busca manter os clientes satisfeitos e engajados através da implementação rápida de sugestões e atualizações baseadas em suas necessidades e experiências.

#### 5. Fontes de Receita:

&emsp;&emsp;Embora a solução não tenha fins lucrativos, a implementação de anúncios pode ser considerada para garantir a sustentabilidade da solução.

#### 6. Recursos-Chave:

&emsp;&emsp;Os recursos-chave necessários para a operação do negócio incluem desenvolvedores, servidores, equipe de suporte, dados e análises. A plataforma web, a base de dados e os algoritmos de análise representam ativos importantes para a proposta de valor da solução.

#### 7. Atividades-Chave:

&emsp;&emsp;Atividades essenciais incluem o desenvolvimento e manutenção da plataforma, a coleta e análise de dados, bem como o suporte ao cliente.

#### 8. Parcerias-Chave:

&emsp;&emsp;Parcerias-chave incluem a Gerando Falcões, outras ONGs e empresas de tecnologia, sendo essenciais para o sucesso do negócio. O cultivo dessas parcerias envolve o estabelecimento de relacionamentos próximos e colaborações estratégicas.

#### 9. Estrutura de Custos:

&emsp;&emsp;Os principais custos incluem o desenvolvimento e manutenção da plataforma, custos de hospedagem e suporte ao cliente, que são controlados por meio do uso eficiente de recursos e negociação com fornecedores.

&emsp;&emsp;Em conclusão, o modelo de negócio da plataforma digital Fly representa uma abordagem abrangente para atender às necessidades das organizações não governamentais e entidades dedicadas ao serviço comunitário, oferecendo uma solução sustentável que simplifica processos complexos e fornece insights valiosos, visando auxiliar a Gerando Falcões na sua missão social.

### 2.3.3 Como a arquitetura de nuvem escolhida será utilizada 

&emsp;&emsp;Neste projeto, o objetivo é otimizar a capacidade e a escalabilidade da aplicação usando uma nuvem privada virtual (VPC). Essa escolha se deve ao fato de que a VPC permite utilizar os serviços necessários para o desenvolvimento do projeto presentes na AWS, como o Amazon EC2. Além disso, a VPC abrange sub-redes dentro da sua zona de disponibilidade, onde cada sub-rede padrão é uma sub-rede pública que armazena a Amazon EC2. [6]

&emsp;&emsp;Com a VPC configurada, criaremos uma instância na Amazon EC2, que fornecerá máquinas virtuais para hospedar nossa aplicação. Também configuraremos as ferramentas do front-end e do back-end, sendo elas a Amazon S3 e a Amazon RDS, que auxiliarão no desenvolvimento da aplicação. [7]

&emsp;&emsp;Neste projeto, utilizamos o Amazon S3 e o Amazon RDS como ferramentas de armazenamento e gerenciamento de dados na nuvem. O Amazon S3 é um serviço de armazenamento de objetos que permite armazenar e recuperar qualquer quantidade de dados de qualquer local, com diferentes classes de armazenamento, recursos de gerenciamento e alta durabilidade. 

&emsp;&emsp;O Amazon RDS é um serviço de banco de dados relacional que facilita a configuração, a operação e a escalabilidade de um banco de dados na nuvem, com oito mecanismos populares, alta disponibilidade, alta performance e alta segurança. Esses serviços foram escolhidos por oferecerem flexibilidade, escalabilidade e custo-benefício para o desenvolvimento da aplicação.

### 2.3.4 Benefícios trazidos pela arquitetura de nuvem proposta

&emsp;&emsp;Durante o desenvolvimento deste projeto, fizemos a escolha estratégica de adotar a Amazon Web Services (AWS) como provedora da nossa Arquitetura de Nuvem. Essa decisão é fundamental para garantir uma série de benefícios [8] que impactam diretamente na segurança, acessibilidade, flexibilidade e economia. Abaixo, detalhamos cada um desses aspectos:

#### 1. Segurança Robusta:
&emsp;&emsp;A AWS é reconhecida por sua robusta infraestrutura de segurança, fornecendo uma ampla gama de ferramentas e recursos para proteger os dados e as aplicações hospedadas na nuvem. Com serviços como AWS Identity and Access Management (IAM), AWS Web Application Firewall (WAF) e AWS Key Management Service (KMS), podemos garantir a confidencialidade, integridade e disponibilidade dos nossos sistemas. Além disso, o fato de grandes empresas como Goldman Sachs, Coca-Cola, Johnson & Johnson, Siemens, Shell e Comcast [9] confiarem na AWS atesta a sua credibilidade nesse aspecto.

#### 2. Acesso On-Demand:
&emsp;&emsp;A capacidade sob demanda da AWS permite-nos provisionar recursos de computação, armazenamento e rede conforme necessário. Isso nos possibilita escalabilidade instantânea para lidar com picos de demanda ou ajustar os recursos conforme o fluxo de trabalho do nosso projeto. Essa agilidade operacional garante que tenhamos os recursos adequados no momento certo, evitando desperdícios e mantendo controle total sobre nossas demandas.

#### 3. Flexibilidade:
&emsp;&emsp;Com a AWS, temos a liberdade de escolher entre uma ampla variedade de serviços e soluções para atender às necessidades específicas do nosso projeto. Seja adotando contêineres com Amazon Elastic Kubernetes Service (EKS) ou Amazon Elastic Container Service (ECS), ou optando por computação serverless com AWS Lambda, a flexibilidade da AWS nos permite selecionar a combinação ideal de serviços para atender aos nossos objetivos de negócios e técnicos. No caso deste projeto, a escolha do EC2 [7] foi feita para permitir que os usuários aluguem computadores virtuais onde executam suas próprias aplicações, proporcionando escalabilidade e controle.

#### 4. Modelo de Pagamento por Uso:
&emsp;&emsp;Uma das vantagens mais significativas da AWS é o modelo de pagamento por uso, onde pagamos apenas pelos recursos que consumimos e pelo tempo de utilização. Isso elimina a necessidade de investimentos iniciais em infraestrutura e nos permite otimizar os custos, ajustando os recursos de acordo com a demanda do nosso projeto. Com o Amazon EC2, por exemplo, podemos dimensionar verticalmente ou horizontalmente as instâncias de acordo com as necessidades de processamento, pagando apenas pelo que utilizamos.

&emsp;&emsp;Em resumo, ao escolher a AWS como nossa arquitetura de nuvem, garantimos uma infraestrutura sólida e segura, acesso instantâneo a recursos, flexibilidade para adotar as tecnologias certas e um modelo de pagamento que se alinha com nossas necessidades e orçamento. Isso nos capacita a concentrar nossos esforços no desenvolvimento de soluções inovadoras, enquanto a AWS cuida da infraestrutura subjacente.


## 2.4 Proposta de Valor (Value Proposition Canvas) 
&emsp;&emsp; O Canvas de Proposta de Valor é uma ferramenta fundamental para empresas focadas em inovação e desenvolvimento estratégico, oferecendo um caminho claro para a compreensão e atendimento das necessidades dos clientes [10]. Este modelo ajuda na identificação das dores e expectativas dos clientes, ligando-as diretamente aos produtos e serviços ofertados, o que é crucial para garantir que a proposta de valor esteja alinhada com o que o mercado busca. Distinguindo-se por seu enfoque no cliente, o Canvas de Proposta de Valor facilita a criação de soluções que efetivamente solucionam problemas e satisfazem necessidades.

<h6 align="center"> Figura 5: Canvas Proposta de Valor</h6>
  <img src="../imagens/canvas.png" alt="Canvas">
</h6>
<h6 align="center"> Fonte: [11] Canvas da Proposta de Valor, adaptado de Analista Modelos de Negócios (2024). </h6>

&emsp;&emsp; Para o projeto Fly, desenvolvido em colaboração com a Gerando Falcões, o Canvas de Proposta de Valor assume uma importância fundamental ao destacar a necessidade de alinhar a solução tecnológica às necessidades específicas das ONGs atendidas. Este framework permite detalhar de forma clara e objetiva como a solução pode resolver problemas concretos enfrentados pelas organizações, tais como a gestão ineficiente dos atendimentos e a falta de visibilidade sobre o impacto das suas ações. Ao mapear as dores e ganhos dos clientes (ONGs) em relação às funcionalidades e benefícios oferecidos pela solução Fly, é possível garantir que o produto final não apenas atenda às expectativas das organizações, mas também contribua significativamente para a melhoria da gestão e análise de dados, potencializando o impacto social de suas atividades.

#### Proposta de Valor:

**Produtos e Serviços:** Solução tecnológica para gestão de atendimentos, que inclui cadastro de atendidos, registro de frequências, anotações sobre atendimentos, e módulo de visualização de dados.

**Aliviadores de Dor:** Simplificação da gestão de atendimentos, centralização de dados em uma única plataforma, e facilitação da análise do impacto das ações.

**Criadores de Ganho:** Aumento da eficiência operacional das ONGs, melhor visibilidade do impacto social de suas ações, e a promoção de uma gestão baseada em dados.

#### Perfil do Cliente:

**Tarefas do Cliente:** Gestão eficiente dos atendimentos, acompanhamento dos resultados das atividades, e análise do impacto social.

**Dores:** Falta de uma ferramenta de gestão que centralize os dados dos atendimentos, dificuldade na visibilidade e análise do impacto das ações, e a necessidade de cumprimento da LGPD.

**Ganhos Esperados:** Melhoria na eficiência operacional, capacidade de análise de dados para tomada de decisões, e conformidade com normas de proteção de dados.

&emsp;&emsp; A implementação do Canvas de Proposta de Valor para o projeto Fly em parceria com a Gerando Falcões representa um passo crucial na direção de uma solução tecnológica verdadeiramente alinhada com as necessidades das ONGs. 


## 2.5 Matriz de Risco

&emsp;&emsp; De início, é válido destacar o conceito de matriz de risco. Isto é: uma ferramenta visual que auxilia na identificação e priorização dos riscos de um projeto. Para representar essa prioridade dos riscos, utilizamos cores para marcar a probabilidade e o impacto de tal risco acontecer, sendo classificados em baixo, médio ou alto. Por outro lado, a matriz também pode destacar as oportunidades para o projeto, também divindo em probabilidade e impacto, assim como em alto, baixo ou médio. 

&emsp;&emsp; Seguindo este conceito, cita-se abaixo a matriz de risco do grupo Fly:

<h6 align="center"> Figura 6: Matriz de Risco</h6>
<h6 align="center">
  <img src="../imagens/matriz-de-risco.png" alt="Matriz de Risco" width="500">
</h6>
<h6 align="center"> Elaboração Fly </h6>

&emsp;&emsp; Para cada risco, um plano de ação para superá-lo caso ocorra durante o desenvolvimento do projeto:

- O grupo ter dificuldade na utilização e ambientação com as tecnologias utilizadas neste projeto: classificado como um risco de probabilidade alta e impacto baixo, a equipe Fly buscará ajuda de colegas e professores, bem como cursos online e fóruns a fim de compreender tal tecnologia para então desenvolver um bom projeto.

- Dados inconsistentes gerados para a análise geral da Gerando Falcões: classificado como um risco de probabilidade alta e impacto médio, o grupo trabalhará com assertividade para que os dados e informações das oficinas, líderes e professores, por exemplo, sejam coerentes e reais quando mostrados para a Gerando Falcões. Ou seja, uma boa conectividade entre as telas, interações e preenchimentos.

- Não acesso à plataforma em ambientes com falta de aparelhos tecnológicos: classificado como um risco de probabilidade alta e impacto alto, a equipe Fly buscará desenvolver uma plataforma bastante simples visando funcionar adequadamento em aparelhos com baixa eficácia e velocidade.

- Professores e líderes não adaptados à plataforma: classificado como um risco de probabilidade média e impacto baixo, o grupo construirá um sistema que seja bastante simples e intuitivo para os usuários, visto que muitos têm baixo letramento digital. A princípio, plataforma em que o usuário acesse os campos necessários com poucos cliques.

- Software utilizado apresentando falhas técnicas: classificado como um risco de probabilidade média e impacto médio, a equipe desenvolverá um sistema em que terá bastante assertividade e conexão em todas as partes a fim de entregar uma solução final correta.

- Divisão inadequada da equipe em funções do projeto: classificado como um risco de probabilidade média e impacto alto, o grupo, juntamente com a orientação dos professores, dividirá de maneira adequada todas as tarefas a fim de não sobrecarregar um indivíduo e, além disso, contribuir com o aprendizado igualitário, fazendo com que todos passem por todas as áreas.

- Alteração no software e no design escolhido para o projeto: classificado como um risco de probabilidade baixa e impacto baixo, a equipe já está bem definida em relação às tecnologias que serão utilizadas, bem como todo o design systema, visto que foi validado com o parceiro. No entanto, caso esse risco ocorra, o grupo trabalhará de maneira clara e objetiva para que essas mudanças não afetem na usabilidade do sistema.

- Ausência de um integrante do grupo: classificado como um risco de probabilidade baixa e impacto médio, o grupo está bem unido, com todas as tarefas bem divididas e sempre adiantadas, para caso alguém fique impossibilitado de realizar sua função, outra pessoa pode desenvolver.

- O sistema de preenchimento das presenças não funcionar adequadamente: classificado como um risco de probabilidade baixa e impacto alto, a equipe Fly definiu como prioridade esta função, visto que é uma das principais dificuldades apresentadas pelo parceiro. No entanto, caso esse risco ocorra, o grupo imediatamente trabalhará na manutenção para que fique funcional o mais rápido possível.


### 2.6 Matriz de Oportunidades

&emsp;&emsp; Assim como a matriz de risco desenvolvida, a equipe Fly trabalhou no desenvolvimento da matriz de oportunidades.

<h6 align="center"> Figura 7: Matriz de Oportunidades</h6>
<h6 align="center">
  <img src="../imagens/matriz-de-oportunidades.png" alt="Matriz de Risco" width="500">
</h6>
<h6 align="center"> Elaboração Fly </h6>

&emsp;&emsp; Desse modo, cita-se em forma de lista as oportunidades que o grupo poderá ter no decorrer deste módulo:

- Integrantes do grupo em harmonia no desenvolvimento do projeto: boa relação entre a equipe e com todos desempenhando suas respectivas tarefas de maneira assertiva.

- Gerando Falcões divulgar novas informações e feedbacks que auxiliarão na construção e melhoria do sistema.

- Equipe aprimorar os conhecimentos em frontend, backend, banco de dados, nuvem e gestão de equipe;

- Professores e líderes se adaptarem com facilidade na plataforma;

- Maior propagação da Gerando Falcões a partir do avanço e entrega do projeto;

- Experiência agradável e funcional para o usuário final;

- Ajuda externa de colegas com a utilização das tecnologias utilizadas no projeto;

- Continuar o projeto com a Gerando Falcões após a entrega final;

- Expansão da plataforma para demais ONG's externas.


&emsp;&emsp; Assim, fechando a matriz de oportunidades.


# 3. Análise de experiência do usuário

&emsp;&emsp; A análise de experiência do usuário é uma etapa essencial no desenvolvimento de qualquer produto ou serviço digital, e não é diferente para a plataforma proposta para a Gerando Falcões. Nesta seção, vamos explorar em detalhes a importância de compreender e melhorar a experiência do usuário, utilizando ferramentas como personas e jornadas.

## 3.1 Personas

&emsp;&emsp; Personas são construções semi-fictícias que espelham as características dos usuários finais e são vitais no processo de desenvolvimento de produtos e serviços. A utilização de personas é fundamental para o desenvolvimento de soluções eficientes, pois oferece uma perspectiva detalhada e abrangente dos clientes potenciais. Incluindo dados demográficos, preferências, objetivos e obstáculos dos utentes, as personas auxiliam na concepção de um design mais eficaz, visando aprimorar a experiência do usuário. Abaixo, estão descritas as três personas desenvolvidas pelo grupo Fly.

### Persona 1: Marcos Leite

<h6 align="center"> Figura 8: Persona Marcos Leite </h6>

<img src="../imagens/persona_marcos.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Marcos Leite é o líder da oficina de dança "Ritmos da Transformação". Embora sua carreira principal seja como psicólogo, Marcos desempenha um papel fundamental na ONG, aplicando seu conhecimento para nutrir um ambiente seguro e propício ao crescimento pessoal dos jovens. Ele utiliza sua competência para garantir que a oficina vá além do ensino de dança, atuando como um catalisador para o desenvolvimento de talentos e a expressão criativa, com o intuito de construir uma forte comunidade de apoio. No entanto, Marcos enfrenta desafios logísticos significativos, particularmente na gestão e organização das oficinas, que requerem uma solução digital que se alinhe com o Requisito Não Funcional 4 [(RNF4)](#42-requisitos-não-funcionais).

&emsp;&emsp; O RNF4 indica a necessidade crítica de um Sistema de gerenciamento de aulas na plataforma. Para atender a essa demanda, a plataforma precisa ser projetada com uma interface intuitiva e flexível que não só simplifique a organização dos horários das aulas e a alocação de professores, mas que também permita a Marcos monitorar o progresso dos jovens de maneira eficiente. A usabilidade é uma prioridade, assegurando que o sistema possa ser facilmente navegado por Marcos, que já tem um horário ocupado e não pode perder tempo com complexidades desnecessárias do software.


### Persona 2: Beatriz Menezes

<h6 align="center"> Figura 9: Persona Beatriz Menezes </h6>

<img src="../imagens/persona_beatriz.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Beatriz Menezes é Engenheira Civil, e investe seu tempo livre para nutrir talentos e inspirar jovens através da arte, combinando seu rigor técnico com uma paixão que é dançar. Ela atua como professora voluntária na oficina de dança “Ritmos da Transformação”. Apesar de sua habilidade em transmitir conhecimento e inspiração, ela enfrenta desafios administrativos que consomem um tempo precioso, que poderia ser melhor gasto no engajamento com os alunos.

&emsp;&emsp; O Requisito Não Funcional 3 [(RNF3)](#42-requisitos-não-funcionais) é crucial para Beatriz, pois demanda uma interface de usuário simplificada e intuitiva na plataforma digital que ela utiliza. A simplicidade e a intuição são essenciais para facilitar seu trabalho, permitindo que ela realize o cadastro de novos alunos e confira a presença de cada um. A interface deve ser projetada para ser acessível e compreensível, mesmo para usuários como Beatriz, que podem ter um letramento digital menos avançado.


### Persona 3: Carla Souza

<h6 align="center"> Figura 10: Persona Carla Souza </h6>

<img src="../imagens/persona_carla.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Carla Souza é uma das principais cabeças por trás da supervisão e apoio às ONGs parceiras na Gerando Falcões. Com 34 anos e formada em administração, Carla traz consigo não apenas uma mente aguçada para negócios, mas também um coração pulsante por mudanças sociais significativas. Ela se dedica a garantir que oficinas como "Ritmos da Transformação" não só alcancem, mas ultrapassem seus objetivos de impacto social e desenvolvimento comunitário. Ela enfrenta o desafio contínuo de coletar e analisar dados de várias oficinas distribuídas pelo país. A necessidade de ter uma visão holística e atualizada das atividades e do impacto dessas oficinas é crucial para o sucesso da missão da Gerando Falcões.

&emsp;&emsp; O Requisito Não Funcional 2 [(RNF2)](#42-requisitos-não-funcionais) vem ao encontro das necessidades de Carla. Com dashboards interativos integrados à plataforma, Carla poderá ter acesso instantâneo a dados atualizados, permitindo-lhe monitorar o desempenho das ONGs eficientemente. Essa funcionalidade é fundamental para a Eficiência de Desempenho do sistema, permitindo a Carla não apenas visualizar as informações de forma clara e concisa, mas também manipular e extrair insights acionáveis sem demora. Isso significa poder identificar tendências, celebrar sucessos e reconhecer áreas que precisam de atenção extra quase instantaneamente.

&emsp;&emsp; Em suma, o desenvolvimento de uma boa plataforma depende do entendimento profundo das necessidades e desafios específicos dos usuários finais. As personas de Marcos, Beatriz e Carla são fundamentais para o grupo de desenvolvedores não só atender, mas também exceder as expectativas dos utentes, integrando simplicidade e acessibilidade. Portanto, a atenção aos detalhes na definição de personas é fundamental para garantir que um produto seja verdadeiramente centrado no usuário e bem-sucedido no mercado.

## 3.2 Mapa de jornada do usuário

&emsp;&emsp;A jornada do usuário é uma representação visual e narrativa do caminho que um usuário percorre ao interagir com um sistema, serviço ou produto, desde a descoberta inicial até o alcance de seus objetivos específicos. Ela descreve as etapas que o usuário realiza, suas ações, pensamentos e emoções ao longo desse processo. Nesta análise, exploraremos três jornadas distintas, cada uma centrada em um usuário específico e suas experiências únicas enquanto interagem com a plataforma. Neste contexto, existem três tipos de usuários diferentes na plataforma, cada um com suas próprias necessidades e objetivos, essa divisão foi pensada com base nas principais funções do perfil de cada uma das nossas personas descritas na seção [3.1](#31-personas) dessa documentação.

### Primeira jornada

<h6 align="center"> Figura 11: Primeira Jornada do Usuário </h6>

<img src="../imagens/jornada01.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Conforme as etapas ilustradas na imagem acima, os textos abaixo tem como objetivo detalhar cada etapa da jornada da persona Carla enquanto usuária da plataforma:

#### Acesso à Plataforma:

&emsp;&emsp; Carla acessa a plataforma digital da Gerando Falcões usando suas credenciais de login.

#### Visão Geral das ONGs Parceiras:

&emsp;&emsp; Ao acessar a plataforma, Carla é apresentada a uma visão geral das ONGs parceiras listadas. Ela pode ver informações básicas sobre cada uma, como nome, localização e área de atuação. dessa forma, ela pode selecionar uma ONG, como a "Ritmos da Transformação", para obter mais detalhes sobre suas oficinas, ver informações específicas sobre horários de aulas, professores envolvidos e o progresso dos alunos inscritos.

#### Explorando Dados e Métricas:

&emsp;&emsp; Carla navega pelas ferramentas de análise de dados da plataforma, buscando métricas relevantes para avaliar o impacto das oficinas. Ela visualiza gráficos e relatórios que mostram o progresso dos alunos, taxas de participação e outras métricas-chave. no caso de uma ONG específica como a "Ritmos da Transformação", Carla acessa dados detalhados sobre o desempenho das oficinas de dança.
Ela examina relatórios de participação, feedback dos alunos e qualquer outra informação relevante disponível na plataforma.

#### Identificação de Áreas para Melhoria:

&emsp;&emsp; Com base nos dados analisados, Carla identifica áreas específicas onde a ONG pode melhorar, como aumentar a participação dos alunos ou ajustar o currículo das aulas.
Ela pode deixar comentários ou recomendações diretamente na plataforma para a equipe da ONG. Além disso, ela pode compartilhar essa mesma análise e os insights obtidos com sua equipe na Gerando Falcões, discutindo possíveis estratégias para apoiar melhor as ONGs parceiras. Ela utiliza as ferramentas de colaboração da plataforma para compartilhar relatórios e informações relevantes.

#### Acompanhamento do Progresso:

&emsp;&emsp; Carla continua a monitorar o progresso das oficinas ao longo do tempo, revisitando regularmente os dados e métricas disponíveis na plataforma.
Ela ajusta suas estratégias de suporte com base nas mudanças observadas e nos resultados obtidos pelas ONGs parceiras.

### Segunda jornada

<h6 align="center"> Figura 12: Segunda Jornada do Usuário </h6>

<img src="../imagens/jornada02.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Conforme as etapas ilustradas na imagem acima, os textos abaixo tem como objetivo detalhar cada etapa da jornada da persona Marcos enquanto usuário da plataforma:

#### Registro e Primeiro Acesso:

&emsp;&emsp;Marcos irá se inscrever na plataforma, preenchendo um formulário de registro e o enviando para a Gerando Falcões criar o seu acesso.
Ele recebe uma confirmação por e-mail e faz login pela primeira vez. Logo, a persona deve cadastrar seu perfil com suas informações, após esse processo ele é solicitado a configurar a sua ONG "Ritmos da Transformação" que está diretamente atrelada ao seu nome, incluindo informações sobre sua localização, horários de funcionamento e detalhes sobre as oficinas existentes. 

#### Explorando Recursos:

&emsp;&emsp;Ele navega pelos diferentes recursos da plataforma, como o calendário de horários de aulas e a seção de cadastro de professores.
Marcos experimenta a facilidade de uso da interface para adicionar e editar informações, ele tem todas as permissões que um professor/voluntário tem, podendo configurar horários de aulas e cadastrar/visualizar alunos, mas essas tarefas são preferencialmente realizadas pelos professores e voluntários.


#### Cadastro de Professores e Voluntários:

&emsp;&emsp;Ele adiciona os detalhes dos instrutores voluntários, incluindo seus nomes, especialidades de dança e disponibilidade de horários.
Marcos pode atribuir instrutores a aulas específicas, garantindo uma distribuição equilibrada de talentos e recursos. Dessa forma, ao cadastrar um professor novo, Marcos pode conceder um login para este professor com permissões especificas da função.

#### Cadastro de Oficinas:

&emsp;&emsp;Marcos inicia o processo de cadastro de oficinas, que são como turmas na ONG "Ritmos da Transformação". Ele define os diferentes temas das oficinas, como dança, pintura, inglês, artes, entre outros, e atribui um professor ou professores responsáveis por cada uma delas. Além disso, ele organiza os horários disponíveis para cada oficina, levando em consideração a disponibilidade dos professores e a demanda dos alunos.

&emsp;&emsp;Durante o cadastro, Marcos também inclui informações detalhadas sobre cada oficina, como a descrição do conteúdo programático, os materiais necessários, a faixa etária dos alunos atendidos e qualquer outra informação relevante. Ele verifica se todas as oficinas estão corretamente configuradas para garantir uma experiência consistente e de qualidade para os participantes.

#### Recebendo Insights da Gerando Falcões:

&emsp;&emsp;Após o cadastro das oficinas e o início das atividades, Marcos começa a receber relatórios e insights gerados pela plataforma da Gerando Falcões. Esses relatórios fornecem análises detalhadas sobre o engajamento dos alunos em cada oficina, os padrões de participação ao longo do tempo e outras métricas relevantes.

&emsp;&emsp;Utilizando essas informações, Marcos é capaz de avaliar o desempenho de cada oficina individualmente, identificar áreas de melhoria e tomar decisões informadas para otimizar o funcionamento da ONG "Ritmos da Transformação". Ele pode ajustar os horários das oficinas, revisar o conteúdo programático com base no feedback dos alunos e dos professores, e até mesmo expandir o alcance da ONG com base nas demandas identificadas através dos insights fornecidos pela plataforma. Essa abordagem orientada por dados ajuda Marcos a garantir que a ONG esteja cumprindo sua missão de promover a transformação social através da educação e das artes.

### Terceira Jornada

<h6 align="center"> Figura 13: Terceira Jornada do Usuário </h6>

<img src="../imagens/jornada03.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Conforme as etapas ilustradas na imagem acima, os textos abaixo tem como objetivo detalhar cada etapa da jornada da persona beatriz enquanto usuária da plataforma:

#### Registro na Plataforma:

&emsp;&emsp; Beatriz acessa a plataforma digital da Gerando Falcões ou da própria ONG "Ritmos da Transformação" para se cadastrar como professora voluntária.
Ela preenche um formulário de registro simples, fornecendo suas informações básicas e detalhes sobre sua experiência em dança. Esse registro é apresentado para o líder da ONG que pode aprovar a Beatriz como professora ou não. Além desse caso, o líder pode optar por criar o login da sua professora. Após o registro, Beatriz recebe acesso ao painel do professor na plataforma, onde pode gerenciar sua turma de alunos e registrar a presença nas aulas.

#### Cadastro de Novos Alunos:

&emsp;&emsp; Beatriz utiliza a funcionalidade de cadastro de alunos para adicionar novos membros à sua turma.
Ela insere informações básicas, como nome, idade e contato, para criar perfis individuais para cada aluno, esse cadastro não irá conceder acesso ao aluno para a plataforma, mas será importante para gerar dados como engajamento. Além disso, a partir desse cadastro inicial Beatriz pode acompanhar o engajamento de seus alunos ao longo do tempo, registrando regularmente sua participação nas aulas.
Ela pode identificar tendências de participação e detectar alunos que possam precisar de apoio adicional ou incentivo.

#### Registro de Presença:

&emsp;&emsp; Durante as aulas, Beatriz utiliza a funcionalidade de registro de presença na plataforma para marcar a participação de cada aluno.
Ela pode usando um sistema de check-in automatizado integrado à plataforma.


#### Configurando Horários de Aulas:

&emsp;&emsp;Beatriz começa a inserir os horários das aulas da oficina que é professora em um calendário, especificando a data, hora e local de cada sessão.
Ele pode visualizar facilmente os horários das aulas em um formato intuitivo de calendário semanal ou mensal. 

#### Continuidade do Uso:

&emsp;&emsp;Beatriz continua a utilizar a plataforma regularmente como parte de seu trabalho como professora voluntária na oficina "Ritmos da Transformação", encontrando valor na facilidade de gerenciamento de sua turma e no acompanhamento da participação dos alunos, ela gosta da funcionalidade de registrar seu horário de aula na plataforma e se sente feliz ao visualizar os resultados positivos de engajamento.

#### Conclusões

&emsp;&emsp; Dado essas supostas experiências dos usuários no protótipo apresentado, fica evidente o papel fundamental que a plataforma digital desempenha no apoio às atividades das ONGs e na promoção da transformação social. Ao acompanhar Carla, Marcos e Beatriz em suas jornadas, testemunhamos não apenas os desafios enfrentados, mas também os sucessos alcançados através do uso eficaz da tecnologia.

&emsp;&emsp; As análises de dados fornecidas pela plataforma capacitam os usuários a tomar decisões informadas, identificar áreas para melhoria e, em última análise, criar um impacto positivo nas comunidades atendidas. À medida que avançamos, é importante continuar a aprimorar e aperfeiçoar a plataforma, garantindo que ela continue a atender às necessidades em constante evolução das ONGs e de seus colaboradores voluntários.


# 4. Requisitos

&emsp;&emsp; A fim de solucionar um problema apresentado pela Gerando Falcões, o grupo Fly entregará uma solução completa e que atenda às necessidades do parceiro. No entanto, para que o resultado seja bem sucedido, é indispensável a definição dos requisitos da solução. Desse modo, é dividido em sete etapas, sendo a de concepção, elicitação, elaboração, negociação, especificação, validação e gerenciamento. Segundo o site "Mestres da Web" em "Requisitos Funcionais e não funcionais: o que são?", a concepção define a visão geral do sistema pelos principais envolvidos no projeto e a elicitação é a divisão dos requisitos funcionais e não funcionais.

&emsp;&emsp; Nesta etapa, a elaboração, tudo o que foi definido anteriormente é transformado em diagramas. Já a negociação são os acordos com o consumidor a respeito do que será mantido ou descartado no projeto. A especificação são todos os requisitos aprovados e que são transformados em especificações técnicas. A etapa da validação é para validar com os envolvidos no projeto tudo o que foi elaborado. Por fim, o gerenciamento, que garante que os requisitos aprovados e aplicados continuem em conformidade com o que foi definido. Desse modo, definindo os requisitos da solução.

&emsp;&emsp; Abaixo, detalhamento dos requisitos identificados para o sistema, divididos em requisitos funcionais e não funcionais. Cada funcionalidade e restrição do sistema é explorada para garantir uma compreensão clara do que é necessário para o desenvolvimento da solução.


## 4.1 Requisitos Funcionais 

&emsp;&emsp; Requisitos funcionais descrevem as ações específicas que o sistema deve ser capaz de realizar em termos de operações, serviços ou atividades específicas a fim de atender às necessidades do usuário. Os requisitos funcionais atuam nas ações que o sistema deve executar, sem se preocupar com os detalhes de como essas ações serão implementadas. Além disso, descrevem as entradas necessárias para que o sistema realize a ação, os dados manipulados, bem com as saídas esperadas.

&emsp;&emsp; São importantes pois definem o escopo do projeto, guiam o desenvolvimento do sistema e facilitam a comunicação entre as partes interessadas.

&emsp;&emsp; A seguir, exemplos de requisitos funcionais a respeito do projeto a ser desenvolvido em parceria com a Gerando Falcões, e considerando as necessidades de cada uma das Personas (Marcos, Beatriz e Carla).

<h6 align="center"> Tabela 1: Requisitos Funcionais </h6>


| ID   | Requisito Funcional                         | Descrição de Teste                                                                                                                                                                                        | Critérios de Aceitação                                             |
|------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| RF01 | Login autenticado                            | Pré-condição: Usuário acessando o sistema. <br>Procedimento de Teste: Inserir nome de usuário e senha. <br>Resultado Esperado: Usuário autenticado e redirecionado para a tela principal. <br>Pós-condição: Usuário logado no sistema. | Usuário autenticado com sucesso e acesso concedido ao sistema.    |
| RF02 | Acesso às oficinas                           | Pré-condição: Usuário logado com perfil de líder. <br>Procedimento de Teste: Acessar a seção de oficinas. <br>Resultado Esperado: Lista de oficinas disponíveis exibida. <br>Pós-condição: Usuário visualiza oficinas.                  | Lista de oficinas acessível e visualizável pelo usuário.          |
| RF03 | Adicionar nova oficina                       | Pré-condição: Usuário logado com perfil de líder. <br>Procedimento de Teste: Inserir informações da oficina, incluindo número mínimo de alunos, e submeter. <br>Resultado Esperado: Oficina cadastrada com sucesso. <br>Pós-condição: Oficina com detalhes e mínimo de alunos exigido listada no sistema. | Oficina cadastrada sem erros e listada no sistema.               |
| RF04 | Acesso às turmas das oficinas                | Pré-condição: Usuário logado e oficinas cadastradas. <br>Procedimento de Teste: Acessar detalhes de uma oficina específica. <br>Resultado Esperado: Lista de turmas da oficina exibida. <br>Pós-condição: Usuário visualiza turmas da oficina.  | Acesso às turmas das oficinas confirmado.                        |
| RF05 | Adição de uma nova turma                     | Pré-condição: Usuário logado com perfil de líder e oficina selecionada. <br>Procedimento de Teste: Inserir informações da nova turma e submeter. <br>Resultado Esperado: Nova turma adicionada com sucesso. <br>Pós-condição: Turma listada sob a oficina correspondente. | Nova turma adicionada com sucesso e listada no sistema.          |
| RF06 | Acesso às aulas das turmas                   | Pré-condição: Usuário logado e turmas cadastradas. <br>Procedimento de Teste: Selecionar uma turma para ver suas aulas. <br>Resultado Esperado: Lista de aulas da turma exibida. <br>Pós-condição: Usuário visualiza aulas da turma.    | Acesso às aulas das turmas disponível e funcional.                |
| RF07 | Adição de uma nova aula                      | Pré-condição: Usuário logado com perfil de professor e turma selecionada. <br>Procedimento de Teste: Inserir informações da nova aula e submeter. <br>Resultado Esperado: Nova aula adicionada com sucesso. <br>Pós-condição: Aula listada na turma correspondente. | Nova aula adicionada e listada corretamente.                     |
| RF08 | Acesso aos alunos e professores da turma     | Pré-condição: Usuário logado e turmas cadastradas. <br>Procedimento de Teste: Acessar detalhes de uma turma específica. <br>Resultado Esperado: Detalhes de alunos e professores da turma exibidos. <br>Pós-condição: Usuário visualiza membros da turma. | Informações dos alunos e professores acessíveis e corretas.      |
| RF09 | Adição de alunos e professores na turma      | Pré-condição: Usuário logado com perfil de líder. <br>Procedimento de Teste: Adicionar alunos e professores a uma turma. <br>Resultado Esperado: Alunos e professores adicionados com sucesso. <br>Pós-condição: Membros adicionados listados na turma. | Alunos e professores adicionados com sucesso à turma.            |
| RF10 | Cadastro e remoção de alunos e professores   | Pré-condição: Usuário logado com perfil administrativo. <br>Procedimento de Teste: Cadastrar ou remover alunos/professores no sistema. <br>Resultado Esperado: Operação de cadastro/remoção concluída com sucesso. <br>Pós-condição: Lista de alunos/professores atualizada. | Cadastro e remoção realizados com sucesso, lista atualizada.     |
| RF11 | Registro de presença dos alunos na aula      | Pré-condição: Usuário logado com perfil de professor e aula selecionada. <br>Procedimento de Teste: Registrar presença dos alunos na aula. <br>Resultado Esperado: Presença registrada com sucesso. <br>Pós-condição: Frequência dos alunos atualizada no sistema. | Presença dos alunos registrada e frequência atualizada.          |
| RF12 | Acesso aos dashboards sobre a ONG            | Pré-condição: Usuário logado com perfil de líder ou administrativo. <br>Procedimento de Teste: Acessar os dashboards de análise da ONG. <br>Resultado Esperado: Dashboards exibidos com sucesso. <br>Pós-condição: Usuário visualiza análises e estatísticas. | Dashboards acessíveis, proporcionando análises e estatísticas.   |

<h6 align="center"> Fonte: Elaborado por grupo Fly </h6>


&emsp;&emsp; Sendo assim, esses requisitos são fundamentais para garantir que o sistema atenda às necessidades específicas das ONGs e proporcione uma gestão eficaz, visibilidade e controle sobre as atividades realizadas. Com a implementação bem-sucedida desses requisitos, espera-se melhorar significativamente a operação, a análise de dados e o engajamento entre professores, alunos e líderes, alinhando-se aos objetivos estratégicos da organização.

## 4.2 Requisitos não Funcionais

&emsp;&emsp; Requisitos não funcionais referem-se às características de qualidade de um sistema, descrevendo como o sistema deve operar, em vez de quais funções o sistema deve executar. Eles são cruciais para garantir a eficiência, usabilidade, confiabilidade e outros aspectos de qualidade de um software ou sistema de informação. Esses requisitos definem os critérios que podem ser usados para julgar a operação de um sistema, em contraste com as funcionalidades específicas que o sistema realiza.

&emsp;&emsp; A ISO/IEC 25010, também conhecida como SQuaRE (System and Software Quality Requirements and Evaluation), é uma norma internacional que define e categoriza a qualidade de produtos de software e sistemas. Ela foi criada pela Organização Internacional para Padronização (ISO) e pela Comissão Eletrotécnica Internacional (IEC). A norma é amplamente utilizada por desenvolvedores de software para avaliar e assegurar a qualidade dos produtos de software ao longo do ciclo de vida do desenvolvimento. Na tabela abaixo é possível analisar os requisitos pensados pelo grupo Fly referente à plataforma desenvolvida.

<h6 align="center"> Tabela 2: Requisitos não Funcionais </h6>

|  ID  |  Requisito Não Funcional  |  Descrição  |  Iso relacionada  |
|------|---------------------------|-------------|-------------------|
| RNF01 | Controle de Acesso Baseado em Papéis (RBAC) | A plataforma deve implementar um mecanismo de Controle de Acesso Baseado em Papéis (RBAC) para garantir que usuários autenticados tenham acesso apenas às informações e funcionalidades relevantes para seu papel específico dentro do sistema. Este mecanismo deve ser flexível o suficiente para acomodar três categorias principais de usuários: ONGs e líderes, professores e a equipe da Gerando Falcões, cada uma com diferentes níveis de acesso e permissões. | Segurança (Security), pois protege os dados de serem alterados ou danificados por pessoas não autorizadas. O RBAC contribui para isso ao restringir as permissões de edição e atualização de dados conforme o papel do usuário. |
| RNF02 | Dashboards Interativos | A plataforma deve prover dashboards interativos que facilitam a visualização e manipulação de dados em tempo real, permitindo o acompanhamento e desempenho das ONGs, identificando tendências e extraindo insights acionáveis de forma intuitiva e dinâmica. |  Eficiência de Desempenho (Performance Efficiency), pois este requisito está relacionado à eficiência na visualização de dados, um aspecto crucial para o desempenho eficiente do sistema. |
| RNF03 |  Interface de Usuário Simplificada e Intuitiva |  A plataforma deve oferecer uma interface de usuário (UI) simplificada e intuitiva, que minimize a complexidade e facilite a navegação e a utilização do sistema por usuários com baixo letramento digital. O design deve ser claro e direto, removendo barreiras desnecessárias para o acesso e o uso eficaz das funcionalidades da plataforma. |Usabilidade (Usability), pois este requisito busca garantir uma interface que seja facilmente utilizada por usuários de diferentes níveis de letramento digital, alinhando-se ao princípio de usabilidade. |
| RNF04 | Sistema de Gerenciamento de Aulas | A plataforma deve oferecer um sistema de gerenciamento de aulas intuitivo e flexível que permita organizar facilmente os horários das aulas, alocar professores e monitorar o progresso dos jovens. | Usabilidade (Usability), pois este requisito destina-se a assegurar que a plataforma ofereça uma experiência de usuário prática e flexível. |
| RNF05 |  Estabilidade e Precisão no Gerenciamento de Dados | A plataforma deve prover um ambiente estável e confiável para o gerenciamento e armazenamento de dados, assegurando que as informações relativas às aulas, aos professores e ao progresso dos alunos sejam mantidas com precisão e sem perdas. |  Confiabilidade (Reliability), pois este requisito foca em assegurar que a plataforma opere de forma consistente e precisa, mantendo a integridade e a disponibilidade dos dados críticos para o gerenciamento das oficinas e o acompanhamento do progresso dos alunos. |

<h6 align="center"> Fonte: Elaborado por Grupo Fly </h6>

&emsp;&emsp; Na seção [8.5](#85-testes-de-requisitos-não-funcionais) desde documento, é possível analisar os testes referentes à estes requisitos, que são fundamentais durante o ciclo de desenvolvimento do software, influenciando desde a escolha das tecnologias até as práticas de design e implementação. Eles ajudam a assegurar que o sistema final não só atenda às necessidades funcionais dos usuários, mas também ofereça uma experiência de qualidade, seja sustentável a longo prazo, e alinhe-se com os objetivos de negócios e tecnologia.


## 4.3 Casos de Uso e Histórias dos Usuários

&emsp;&emsp;Os casos de uso visam a gerenciar a complexidade do domínio do problema, fragmentando as funcionalidades do sistema em casos individuais. Isso possibilita a realização de discussões e descrições textuais em contextos mais específicos e menores.

### Atores

&emsp;&emsp;Um ator trata-se de qualquer coisa que precise interagir com o sistema, tais como usuários e outros sistemas que se comunicam com o sistema em questão. Nesse sentido, foram definidos os seguintes atores para o projeto desse documento:

GF: Representante do Gerando Falcões  
Líder: Líder da ONG  
Professor: Professor da ONG

### Cadastro de Oficinas

<h6 align="center"> Figura 14: Primeiro Caso de Uso </h6>

<img src="../imagens/caso1.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

A imagem acima representa o primeiro caso de uso, que consiste no cadastro de oficinas:

    História de Usuário: "Eu, enquanto líder de uma ONG, desejo poder cadastrar novas oficinas em nossa plataforma, para oferecer uma variedade de atividades para os participantes."
    
    Descrição: Este caso de uso aborda o cadastro das oficinas conduzidas pelas ONGs parceiras do Gerando Falcões, um procedimento facilitado pelo líder da unidade. Para tal, o usuário inicia selecionando a opção "Adicionar Oficina" na tela inicial. Em seguida, são inseridas informações como nome da oficina, nome, CNPJ, endereço, telefone, e-mail, e os dias da semana em que as oficinas serão realizadas. Além disso, é possível cadastrar os professores responsáveis.

<h6 align="center"> Figura 15: Segundo Caso de Uso </h6>

<div style="text-align: center;">
  <img src="../imagens/caso2.png">
</div>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

A imagem acima possui três casos de uso do professor voluntário da ONG, entre eles:

### Selecionar Oficina

1. Diagrama de Caso de Uso: "Selecionar Oficina"

    História de Usuário: "Eu, como professor voluntário, desejo poder visualizar todas as oficinas que faço parte, para escolher aquela na qual desejo realizar ações"
    
    Descrição: O professor voluntário acessa a plataforma e visualiza todas as oficinas disponíveis. Ele navega pelas opções e seleciona a oficina na qual deseja visualizar.

### Definir datas para oficinas

2. Diagrama de Caso de Uso: "Escolher Data para Oficina
    
    História de Usuário: "Eu, como professor voluntário, desejo poder escolher a data e hora para a oficina na qual serei voluntário, para me programar adequadamente."
    
    Descrição: Após selecionar a oficina desejada, o professor voluntário é direcionado para escolher a data e hora específicas para participar da oficina.

### Registrar presença de Alunos

3. Diagrama de Caso de Uso: "Registrar Presença de Alunos"

    História de Usuário: "Eu, como professor voluntário, desejo poder marcar a presença dos alunos participantes na oficina, para garantir um registro preciso de sua participação e engajamento."
    
    Descrição: Durante a realização da oficina, o professor voluntário tem a capacidade de marcar a presença dos alunos participantes, garantindo um registro preciso de quem esteve presente na atividade.

### Visualização de Estatísticas

<h6 align="center"> Figura 16: Terceiro Caso de Uso </h6>

<div style="text-align: center;">
  <img src="../imagens/caso3.png">
</div>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Na imagem acima, temos o caso de uso "Visualizar Relatórios de Engajamento":

    História de Usuário: "Eu, como funcionário da Gerando Falcões, desejo poder visualizar os relatórios da plataforma sobre o engajamento dos participantes nas oficinas, para avaliar o impacto de nossos programas e tomar decisões informadas."
    
    Descrição: Este caso de uso permite que o funcionário da Gerando Falcões visualize os relatórios da plataforma sobre o engajamento dos participantes nas oficinas, fornecendo informações valiosas para avaliar o impacto dos programas.

### Gerar Relatórios

<h6 align="center"> Figura 17: Quarto Caso de Uso </h6>

<div style="text-align: center;">
  <img src="../imagens/caso5.png">
</div>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>


Nesta imagem, temos o caso de Uso "Gerar Relatórios":

    História de Usuário: "Eu, como líder de uma ONG, desejo poder gerar relatórios sobre o desempenho das atividades realizadas em nossas oficinas, para avaliar o impacto de nossos programas e identificar áreas de melhoria."
    
    Descrição: Esse caso de uso permite que o líder da ONG gere relatórios sobre o desempenho das oficinas e o engajamento dos participantes, fornecendo insights valiosos para avaliar a eficácia dos programas.

<h6 align="center"> Figura 18: Quinto Caso de Uso </h6>

<div style="text-align: center;">
  <img src="../imagens/caso6.png">
</div>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Na imagem acima, temos o caso de uso "Visualizar ONGs": 
    
    História de Usuário: "Eu, como funcionário da Gerando Falcões, desejo poder visualizar todas as ONGs cadastradas na plataforma, para acompanhar nossas parcerias e identificar oportunidades de colaboração."
    
    Descrição: Este caso de uso permite que o funcionário da Gerando Falcões visualize todas as ONGs cadastradas na plataforma, fornecendo uma visão geral das parcerias estabelecidas.

<h6 align="center"> Figura 19: Sexto Caso de Uso </h6>

<div style="text-align: center;">
  <img src="../imagens/caso7.png">
</div>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Na imagem acima, temos o Diagrama de Caso de Uso: "Visualizar Oficinas e ONGs":

    História de Usuário: "Eu, como funcionário da Gerando Falcões, desejo poder visualizar as oficinas disponíveis na plataforma e quais ONGs oferecem cada tipo de oficina, para coordenar melhor nossas atividades e recursos."
    
    Descrição: Esse caso de uso permite que o funcionário da Gerando Falcões visualize as oficinas disponíveis na plataforma e quais ONGs oferecem cada tipo de oficina, facilitando a coordenação de recursos.

&emsp;&emsp; Portanto, os casos de uso abordados nesta seção englobam uma diversidade de atividades fundamentais, desde o processo de cadastro de oficinas até a elaboração de relatórios detalhados sobre as atividades realizadas. Cada caso de uso é cuidadosamente acompanhado por uma história de usuário que descreve precisamente a necessidade específica que ele visa atender. Essa abordagem garante que as funcionalidades do sistema sejam desenvolvidas de forma alinhada com as expectativas e necessidades dos usuários, resultando em uma plataforma que atende efetivamente às demandas do ambiente operacional.

# 5. Projeto de Solução

&emsp;&emsp; Nesta seção, exploraremos os detalhes fundamentais relacionados aos diagramas de implementação e à infraestrutura tecnológica por trás do nosso sistema. Começaremos discutindo os diagramas de classes de implementação, que oferecem uma visão detalhada das classes e suas relações em níveis de implementação. Em seguida, abordaremos o diagrama de componentes da arquitetura, fornecendo insights sobre como os diferentes componentes do sistema se integram para formar uma arquitetura coesa. Além disso, examinaremos o diagrama de implantação, que descreve a distribuição física dos componentes do sistema em hardware ou ambientes de execução. Por fim, exploraremos as tecnologias e ferramentas utilizadas no desenvolvimento e na implementação do sistema, destacando suas características e benefícios para o projeto em questão. Essa seção fornecerá uma compreensão abrangente dos aspectos práticos e técnicos envolvidos na construção e na execução do nosso sistema.

## 5.1 Diagrama de Classes

&emsp;&emsp; Nesta seção, abordaremos a importante ferramenta de modelagem conhecida como diagrama de classes de domínio e implementação. Esses diagramas oferecem uma visão estruturada das entidades e relacionamentos em um sistema de software, fornecendo uma base sólida para o desenvolvimento, a implementação e a compreensão do sistema. Vamos explorar como esses diagramas são construídos e como eles ajudam na concepção e na representação visual das classes e suas interações.

### 5.1.1 Diagrama de Classes de Domínio

&emsp;&emsp; Um diagrama de classes de domínio é uma ferramenta de modelagem visual que representa as classes de um sistema de software e os relacionamentos entre essas classes, essa ferramenta fornece uma visão geral da estrutura estática do sistema, identificando as entidades principais e suas interações. Dessa forma, o diagrama de classes de domínio abaixo descreve a estrutura de um sistema relacionado a atividades do líder de uma ONG na nossa plataforma:

<h6 align="center"> Figura 20: Diagrama de Classes de Domínio </h6>

<img src="../imagens/classes_dominio.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Na imagem acima, o diagrama de classes de domínio apresentado fornece uma visão clara da estrutura do sistema relacionado às atividades do líder de uma ONG. Com classes cuidadosamente definidas, atributos e métodos, este diagrama representa as entidades principais e seus relacionamentos, proporcionando uma compreensão abrangente da organização e interação dos componentes do sistema.

**Métodos e Atributos:**

- **Métodos:** Em orientação a objetos, um método é uma função associada a uma classe que define o comportamento dos objetos dessa classe. Os métodos representam as ações que os objetos podem realizar ou os processos que podem ser executados por esses objetos. Eles geralmente manipulam os atributos da classe para realizar tarefas específicas. Por exemplo, na classe "Líder", os métodos `Acessar oficina()` e `Acessar aula()` representam ações que um líder pode realizar, como participar de uma oficina ou de uma aula.

- **Atributos:** Os atributos são as características ou propriedades dos objetos de uma classe. Eles representam o estado dos objetos e descrevem o que esses objetos são. Por exemplo, na classe "Líder", os atributos incluem o ID do líder, o nome, a ONG a que pertence e o contato. Os atributos definem as características individuais de cada objeto da classe.

**Razões para a Definição de Cada Classe:**

1. **Líder:**
   - A classe "Líder" foi definida com atributos como ID, nome, ONG e contato para representar informações básicas sobre um líder.
   - Os métodos `Acessar oficina()` e `Acessar aula()` foram definidos para permitir que um líder participe de oficinas e aulas, refletindo seu papel ativo nessas atividades.

2. **Oficinas:**
   - A classe "Oficinas" foi definida com atributos relacionados à gestão das oficinas, como ID da oficina, número de atendimentos esperados, atendidos, número de professores, frequência e evasão.
   - O método `Visualizar Aulas()` permite visualizar as aulas relacionadas a uma oficina, facilitando o gerenciamento das atividades.

3. **Aulas:**
   - A classe "Aulas" foi definida com atributos como ID da aula, nome, ID do participante e data, representando informações sobre as aulas realizadas.
   - Os métodos `Adicionar aula()` e `Visualizar Lista de presença()` permitem a gestão das aulas e a visualização das listas de presença, respectivamente.

4. **Presença:**
   - A classe "Presença" foi definida para rastrear a presença dos líderes nas aulas e oficinas.
   - Seus atributos incluem IDs de oficina, líder, aula e data, representando os dados necessários para registrar a presença.
   - O método `Salvar presença()` é responsável por salvar as informações de presença.

5. **Nova aula:**
   - A classe "Nova aula" foi definida para representar a criação de novas aulas.
   - Seus atributos incluem um identificador único, o nome da aula, o número de participantes e a data.
   - O método `Salvar aula()` é usado para salvar informações sobre uma nova aula.

&emsp;&emsp; ada classe foi definida dessa maneira para organizar e representar os dados e comportamentos relevantes para o sistema de atividades de liderança e educação em questão. Elas encapsulam dados e funcionalidades relacionados, promovendo uma estrutura modular e coesa do sistema.

&emsp;&emsp; Dessa forma, através da construção e análise do diagrama de classes de domínio, foi possível identificar as entidades essenciais do sistema e suas interações, fornecendo assim uma base sólida para o desenvolvimento do software. Logo, o conjunto ds métodos e atributos definidos junto com os relacionamentos, propõe uma visão geral do fluxo de atuação na plataforma e suas funcionalidades.

### 5.1.2 Diagrama de Classes de Implementação

&emsp;&emsp;Já um Diagrama Classes de Implementação, como o apresentado na Figura 20, vai além de ilustrar a estrutura de domínio e foca na forma como o software é efetivamente construído e organizado em termos de código. Este diagrama descreve a arquitetura do sistema em um nível mais concreto, mostrando como as classes são implementadas, como os diferentes componentes do sistema interagem entre si, e qual é o fluxo de controle e dados através do aplicativo.

<h6 align="center"> Figura 21: Diagrama de Classes de Implementação </h6>

<img src="../imagens/diagrama_implementacao.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

**Métodos e Atributos:**

- **Métodos:** Em um Diagrama de Classes de Implementação, os métodos são representados de forma mais detalhada em comparação com um diagrama de domínio. Eles não apenas definem o que a classe pode fazer, mas também como ela se integra com outras partes do sistema. Por exemplo, o método `handleLogin()` na classe `Login` não somente permite a autenticação de um usuário, mas também interage com serviços externos via chamadas de API e atualiza o estado da aplicação.

- **Atributos:** Os atributos, neste contexto, não apenas definem as características dos objetos, mas também como o estado é gerenciado dentro da aplicação. Eles são cruciais para o gerenciamento de dados dentro dos componentes do frontend e influenciam o render da interface de usuário.

**Razões para a Definição de Cada Classe e Componente:**

1. **Classes de Modelo:**
   - As classes como `Class`, `Teacher`, `Student`, `Dashboard`, e `User` possuem atributos que correspondem diretamente às propriedades dos dados manipulados e exibidos pela aplicação.
   
2. **Controladores:**
   - Os controladores, tais como `addClassesController`, `dashboardController`, `homeController`, e `userController`, contêm métodos que lidam com a lógica de negócio e as ações que podem ser realizadas em resposta às interações do usuário.

3. **Componentes de Visualização (Views):**
   - Componentes como `AddClasses`, `Home`, `Dashboard`, e `SelectClasses` gerenciam como os dados são exibidos ao usuário e como o usuário interage com esses dados.

4. **Componentes:**
   - Componentes reutilizáveis como `AddClassPopup`, `Card`, `CardHome`, `Sidebar`, e `Footer` fornecem funcionalidades específicas e são usados em várias partes da aplicação para garantir uma experiência de usuário coesa.

## 5.2 Diagrama de Implantação

&emsp;&emsp;Neste tópico é apresentado o diagrama de implantação do projeto, que ilustra a distribuição e a comunicação do sistema entre diversos nós de hardware e software, uma ferramenta útil para visualizar e documentar a arquitetura do sistema, as dependências e as configurações dos componentes, os recursos de infraestrutura e de rede, e os modos de comunicação entre os nós. Um nó é uma entidade física ou lógica que executa um ou mais componentes do sistema, como um servidor, um dispositivo, um processo, um banco de dados, etc. 

&emsp;&emsp;Com base nesse conceito, foram definidas duas instâncias na Amazon EC2, uma para cada camada da aplicação, o que garante escalabilidade, e o código da camada de frontend será desenvolvido com react.js e o da camada de backend com node.js, sendo que a comunicação entre elas será feita por meio do protocolo HTTP. O Amazon RDS será utilizado para o banco de dados relacional, alinhado com a aplicação que utiliza SQLite, e o protocolo de comunicação entre o banco de dados e a camada de negócio será o TCP/IP. Por fim, o armazenamento dos arquivos será realizado por meio do Amazon S3, que se comunicará com a camada de backend por meio do protocolo HTTP.

<h6 align="center"> Figura 22: Diagrama de implantação</h6>

<h6 align="center">
  <img src="../imagens/diagrama_implantação.png" alt="Diagrama de Implantação">
</h6>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Em resumo, o diagrama de implantação delineia a arquitetura do sistema, destacando a interação entre os diversos nós de hardware e software. A utilização de instâncias na Amazon EC2, protocolos como HTTP e TCP/IP, e serviços como Amazon RDS e Amazon S3, garantem uma estrutura sólida e escalável para o projeto. Essas escolhas arquiteturais promovem a integração entre as diferentes partes do sistema e asseguram uma experiência de usuário satisfatória.

&emsp;&emsp;Este diagrama de implementação foi elaborado com o objetivo de oferecer uma visão clara e detalhada de como o sistema é implementado. Ele revela as dependências entre classes e componentes, os estados gerenciados e como os dados fluem através da aplicação. Com isso, desenvolvedores e designers de software podem entender melhor as especificidades técnicas do sistema, facilitando tanto o desenvolvimento quanto a manutenção do código.

&emsp;&emsp;Neste tópico é apresentado o diagrama de implantação do projeto, que ilustra a distribuição e a comunicação do sistema entre diversos nós de hardware e software, uma ferramenta útil para visualizar e documentar a arquitetura do sistema, as dependências e as configurações dos componentes, os recursos de infraestrutura e de rede, e os modos de comunicação entre os nós. Um nó é uma entidade física ou lógica que executa um ou mais componentes do sistema, como um servidor, um dispositivo, um processo, um banco de dados, etc. 

&emsp;&emsp;Com base nesse conceito, foram definidas duas instâncias na Amazon EC2, uma para cada camada da aplicação, o que garante escalabilidade, e o código da camada de frontend será desenvolvido com react.js e o da camada de backend com node.js, sendo que a comunicação entre elas será feita por meio do protocolo HTTP. O Amazon RDS será utilizado para o banco de dados relacional, alinhado com a aplicação que utiliza SQLite, e o protocolo de comunicação entre o banco de dados e a camada de negócio será o TCP/IP. Por fim, o armazenamento dos arquivos será realizado por meio do Amazon S3, que se comunicará com a camada de backend por meio do protocolo HTTP.

<h6 align="center"> Figura 23: Diagrama de implantação</h6>

<h6 align="center">
  <img src="../imagens/diagrama_implantação.png" alt="Diagrama de Implantação">
</h6>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Em resumo, o diagrama de implantação delineia a arquitetura do sistema, destacando a interação entre os diversos nós de hardware e software. A utilização de instâncias na Amazon EC2, protocolos como HTTP e TCP/IP, e serviços como Amazon RDS e Amazon S3, garantem uma estrutura sólida e escalável para o projeto. Essas escolhas arquiteturais promovem a integração entre as diferentes partes do sistema e asseguram uma experiência de usuário satisfatória.


## 5.4 Tecnologias e Ferramentas

&emsp;&emsp;Este tópico aborda as principais tecnologias e ferramentas utilizadas no projeto para ajudar a Gerando Falcões a administrar suas ONGs de forma eficiente na nuvem. No desenvolvimento da aplicação web para a gestão das ONGs da empresa "Gerando Falcões", foram utilizadas diversas tecnologias e ferramentas modernas. Essas escolhas foram feitas com o objetivo de garantir uma base sólida, segura e eficiente para o funcionamento e a manutenção do sistema. A seguir, apresentamos uma breve descrição de cada uma das tecnologias e ferramentas empregadas.

<h6 align="center"> Tabela 3: Tecnologias e Ferramentas </h6>

| Tecnologia/Ferramenta                                    | Descrição                                                                                                              | Logotipo                                     |
|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Node.js**                                               | Um ambiente de tempo de execução JavaScript no servidor, amplamente utilizado no desenvolvimento de aplicativos web e APIs. | ![Node.js](../imagens/nodejs.png)                             |
| **React**                                                 | Uma biblioteca JavaScript para criação de interfaces de usuário (UI), conhecida pela eficiência e capacidade de reutilização de componentes. | ![React](../imagens/react.png)                               |
| **MySQL Workbench**                                       | Ferramenta visual para projetar e gerenciar bancos de dados MySQL, facilitando o desenvolvimento e a administração do banco de dados da aplicação. | ![MySQL Workbench](../imagens/workbench.png)                 |
| **Postman**                                               | Plataforma para teste de APIs, permitindo enviar solicitações HTTP, testar rotas e automatizar testes para garantir a integridade das rotas da aplicação. | ![Postman](../imagens/postman.png)                           |
| **AWS RDS (Amazon Relational Database Service)**           | Serviço de banco de dados relacional na nuvem, configurado como MariaDB neste projeto para armazenar dados da aplicação de forma escalável e segura. | ![AWS RDS](../imagens/aws_rds.png)                           |
| **AWS EC2 (Amazon Elastic Compute Cloud)**                 | Serviço de computação na nuvem utilizado para hospedar a aplicação web, proporcionando escalabilidade e disponibilidade. | ![AWS EC2](../imagens/aws_ec2.png)                           |
| **Jest**                                                  | Estrutura de teste de JavaScript para testes de unidade, integração e snapshots, garantindo a qualidade do código em aplicações React e Node.js. | ![Jest](../imagens/jest.png)                                 |
| **Artillery**                                             | Ferramenta de teste de carga utilizada para avaliar o desempenho da aplicação e identificar possíveis gargalos, garantindo um alto nível de desempenho e disponibilidade. | ![Artillery](../imagens/artillery.png)                       |

<h6 align="center"> Fonte: Elaborado por grupo Fly </h6>

&emsp;&emsp;A combinação dessas tecnologias e ferramentas proporciona uma base sólida e moderna para a aplicação web desenvolvida para a Gerando Falcões. Com elas, buscamos garantir não apenas a funcionalidade da aplicação, mas também sua performance, segurança e escalabilidade, essenciais para o sucesso na administração das ONGs e no alcance dos objetivos da empresa.

# 6. Interface (sprint 1 - definição de estruturas padrão)

&emsp;&emsp;Ao desenvolver uma aplicação, é essencial pensar na experiência do usuário, tornando o projeto acessível, intuitivo e de fácil entendimento. Para isso, o design system, o wireframe e principalmente o frontend como conjunto devem ser pontos de extrema atenção. Nessa seção, abordaremos como os elementos serão organizados na interface, considerando a definição dos elementos visuais e da acessibilidade, buscando atender a todos os públicos, inclusive com baixo letramento digital.

## 6.1 Design System 

&emsp;&emsp; O Design System desenvolvido para esta plataforma é fruto de uma seleção criteriosa dos elementos já utilizados pela Gerando Falcões, com ajustes para atender às especificidades do nosso projeto. A construção dessa identidade visual começou com a análise dos wireframes, onde cada componente foi escolhido para se encaixar de forma ideal na estrutura proposta.

&emsp;&emsp; Com a consciência de que parte dos líderes possui diferentes níveis de letramento digital, o sistema foi projetado para ser o mais amigável e intuitivo possível. A simplicidade na navegação e a clareza visual foram priorizadas para que o uso da plataforma seja acessível a todos, independentemente de sua familiaridade prévia com tecnologias digitais. Isso reflete nosso compromisso com a acessibilidade e a inclusão, facilitando o engajamento de todos os usuários na realização das ações sociais.

&emsp;&emsp; Sendo assim, abaixo está o Design System desenvolvido pela equipe Fly:

### Grid

<h6 align="center"> Figura 24: Grid - Design System</h6>

<img src="../imagens/grid-design.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>


&emsp;&emsp; O grid utilizado na plataforma Fly foi selecionado a partir do Design System fornecido pela Gerando Falcões. A decisão de adotar este grid específico foi tomada para garantir a consistência visual e funcional com a identidade já estabelecida pela Gerando Falcões, proporcionando aos usuários uma experiência familiar e intuitiva. O uso do grid de 12 colunas para desktop e 2 colunas para mobile segue um padrão responsivo e flexível, que se adapta a diversos tamanhos de tela, mantendo a hierarquia e a legibilidade das informações.

&emsp;&emsp; Além disso, ao se relacionar com o wireframe, o grid estabelece uma estrutura para a distribuição de elementos de interface, como cabeçalhos, textos e botões, assegurando que o design final seja uma representação visual coesa do esqueleto do wireframe. Essa consistência é crucial para manter o alinhamento estratégico com o design system da Gerando Falcões, enquanto atendemos às necessidades específicas do nosso projeto Fly, garantindo que cada componente sirva a um propósito funcional e estético.

&emsp;&emsp; A estrutura de grid adaptativa destaca-se por sua capacidade de oferecer acessibilidade em uma variedade de dispositivos, o que é essencial, pois muitos usuários podem depender exclusivamente de dispositivos móveis. O design responsivo assegura que todos os usuários, independentemente do dispositivo que utilizam, tenham uma experiência de usuário coesa e sem barreiras, garantindo que as funcionalidades e informações sejam facilmente acessíveis e navegáveis em telas menores, comuns em smartphones.

### Paleta de cores

<h6 align="center"> Figura 25: Paleta de cores - Design System </h6>

<img src="../imagens/cores-design.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 26: Paleta de cores - Design System </h6>

<img src="../imagens/sistema_cores-design.png">

<h6 align="center"> Fonte: Elaborado por Gerando Falcões </h6>

&emsp;&emsp; A partir do desenvolvimento do Wireframe, a paleta de cores foi definida a fim de padronizar a construção do sistema web que atenderá às necessidades do consumidor final. Para isso, com base na própria paleta de cores da Gerando Falcões, as cores foram divididas em três partes: cores principais, alertas e cores de suporte. Ou seja, as cores laranja, azul claro, rosa e azul escuro servirão para colorir e estilizar as partes principais e de destaque em todas as telas do sistema. Exemplo: na primeira tela acessada pelo Líder/Professor de uma ONG, temos uma visão geral da quantidade de oficinas cadastradas. Estas, então, poderão ser estilizadas com a cor azul claro e o botão de acessar estas oficinas com a cor laranja. Outro exemplo é a utilização da cor rosa, que pode ser usada para editar o campo de alunos.

&emsp;&emsp; Já as cores de alerta (verde e vermelho) poderão ser utilizadas para sinalizar quando o cadastro de novos professores, líderes e alunos foram bem ou mal sucedidos, por exemplo. A cor verde simbolizando o sucesso; a cor vermelho o oposto. Por fim, as cores de suporte, como o branco, cinza claro, cinza escuro e preto. Estas cores servirão para estilizar as fontes, escritas e determinadas informações, sendo essenciais para a construção desse sistema em harmonia. Outro ponto importante a ser destacado é a busca pela acessibilidade, visto que as cores, além da estilização, servirão para tornar a plataforma intuitiva e de fácil utilização para o usuário. Assim, valorizando a escolha de uma boa paleta de cores.

### Tipografia

<h6 align="center"> Figura 27: Tipografia - Design System </h6>

<img src="../imagens/tipografia-design.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 28: Tipografia - Design System </h6>

<img src="../imagens/sistema_tipografia-design.png">

<h6 align="center"> Fonte: Elaborado por Gerando Falcões </h6>

&emsp;&emsp; Optamos pela fonte Avenir Next para o nosso design system devido à sua versatilidade e legibilidade. Sua ampla gama de pesos, desde Regular a Bold, permite uma hierarquização clara do conteúdo, facilitando a leitura e a compreensão do usuário. Avenir Next é conhecida por sua aparência moderna e profissional, características que estão alinhadas com os valores da nossa marca. Além disso, a sua utilização no design system da Gerando Falcões reforça a coesão visual e a conexão entre as plataformas, promovendo uma experiência de usuário consistente. A fonte foi projetada para ser altamente legível em diferentes tamanhos e em diversos dispositivos, garantindo que nosso conteúdo seja acessível a todos os usuários, independentemente do meio pelo qual acessam a nossa plataforma.


### Iconografia

<h6 align="center"> Figura 29: Iconografia - Design System </h6>

<img src="../imagens/iconografia-design.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; A respeito da iconografia, o grupo optou, a partir de uma análise do Design System divulgado pela Gerando Falcões, em selecionar 34 ícones com grande probabilidade de serem utilizados em nosso sistema. Dentre essas opções, há ícones que poderão servir na representação de algumas funções que o usuário terá. Exemplo: um ícone que mostrará ao professor sobre a adição de comentários em uma determinada atividade; um ícone para adicionar e remover professores, alunos e atividades; ícones para favoritar e curtir atividades; um para marcar presença e outro para marcar falta dos alunos; um ícone para editar as atividades, professores e alunos; um para calendário, entre outros.

&emsp;&emsp; Ao integrar os ícones do design system da Gerando Falcões, nossa plataforma não apenas se alinha esteticamente a um projeto reconhecido, mas também abraça práticas de design comprovadas para acessibilidade. Os ícones funcionam como elementos visuais intuitivos que facilitam a navegação para todos os usuários, independente de idioma ou capacidade de leitura, e são particularmente úteis para aqueles com dificuldades visuais ou cognitivas. Além disso, cada ícone é escolhido por sua clareza semântica, ajudando na orientação e eficiência do usuário.

### Ilustrações

<h6 align="center"> Figura 30: Ilustrações - Design System </h6>

<img src="../imagens/ilustracoes-design.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Essas ilustrações destacam-se por sua abordagem inclusiva e diversificada, representando uma ampla gama de personagens e personalidades que podem se conectar com um público variado, refletindo a rica diversidade da comunidade a qual servimos. Além disso, ao alinharmos nossa escolha com as ilustrações já presentes no design system da Gerando Falcões, estamos promovendo uma consistência visual e uma linguagem gráfica unificada. Isso não apenas reforça nossa mensagem e valores compartilhados, mas também cria uma experiência de usuário mais coesa e integrada. Ao fazer essa escolha consciente, reiteramos nosso compromisso em criar uma plataforma que seja acolhedora, inclusiva e representativa da comunidade que desejamos atingir.


### Outros componentes

<h6 align="center"> Figura 31: Outros componentes - Design System </h6>

<img src="../imagens/outros_componentes-design.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; A acessibilidade em nosso design system é reforçada pela escolha cuidadosa de outros componentes, como botões, links, avatares e barras de pesquisa. Cada elemento foi desenhado com o objetivo de criar uma experiência de usuário fluida e intuitiva, facilitando a interação de todos os usuários, independentemente de suas habilidades.

&emsp;&emsp; Os botões possuem um design claro e um feedback visual, como a mudança de cor no mouse hover, que orienta o usuário sobre a possibilidade de ação, contribuindo para a compreensão imediata de sua funcionalidade. Isso é particularmente útil para pessoas com dificuldades cognitivas, pois oferece uma pista visual imediata de interatividade.

&emsp;&emsp; Os links são apresentados de forma a se destacarem do texto circundante, com variações visuais ao serem selecionados. Isso não apenas chama a atenção para a possibilidade de navegação adicional, mas também auxilia usuários com deficiências visuais ou de leitura a identificar opções de interação.

&emsp;&emsp; O componente de avatar é simplificado, mas reconhecível, permitindo que os usuários identifiquem rapidamente suas contas ou as de outros, enquanto a barra de pesquisa é projetada para ser facilmente localizada e utilizada, com ícones sugestivos e um espaço de input claro, favorecendo a usabilidade por pessoas com diferentes níveis de habilidade técnica.

&emsp;&emsp; Todos esses elementos juntos criam um ambiente digital inclusivo, reduzindo as barreiras à navegação e promovendo uma experiência de usuário coesa e acessível.


### Logotipos

<h6 align="center"> Figura 32: Logotipos - Design System </h6>

<img src="../imagens/logotipos-design.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 32: Logotipos - Design System </h6>

<img src="../imagens/logo-design.png">

<h6 align="center"> Fonte: Elaborado por Gerando Falcões </h6>

&emsp;&emsp; A logo da Fly foi meticulosamente criada para evocar a imagem de ascensão e liberdade, que é intrínseca ao nome e à missão do grupo. A letra 'Y', estilizada para assemelhar-se a um pássaro com as asas abertas, não apenas reflete a ideia de voo mas também simboliza a ampla gama de possibilidades e oportunidades que a plataforma se propõe a oferecer. O traço que acompanha a logo simboliza a conexão e a continuidade entre as diversas etapas e ações sociais monitoradas pela plataforma, ressaltando a visão integrada e holística que a Fly adota.

&emsp;&emsp; Ademais, o uso da cor presente no design system da Gerando Falcões não é apenas uma questão de estética, mas uma decisão estratégica que reforça o alinhamento e a coesão com os valores e a identidade da parceira. Essa escolha contribui para uma experiência de marca unificada e reconhecível, que facilita a identificação e a associação pelos usuários e pelas ONGs parceiras.

## 6.2 Projeto de Interface (Wireframes) 

&emsp;&emsp;Podemos definir um wireframe como um esqueleto, um protótipo ou uma versão bastante primitiva da interface visual de um projeto. Ele consiste na representação visual em escala de cinza da estrutura e funcionalidade de uma página web ou tela de aplicativo móvel. Os wireframes são usados no início do processo de desenvolvimento para estabelecer a estrutura básica de uma página antes de adicionar o design visual e o conteúdo. Com base nesse conceito, foi elaborado o seguinte wireframe para este projeto:

### Tela de login

<h6 align="center"> Figura 34: Tela de Login </h6>

<img src="../imagens/wireframe_1.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;A primeira tela é o login, que será realizado através do email e da senha, fornecidos pelo líder ou responsável do Gerando Falcões, dependendo do usuário.

### Tela inicial

<h6 align="center"> Figura 35: Tela inicial para Funcionário da GF </h6>

<img src="../imagens/wireframe_2.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 36: Tela inicial para Líder/Professor de ONG </h6>

<img src="../imagens/wireframe_3.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Após o login, o usuário será direcionado à tela inicial, que pode ter duas variações, dependendo do tipo de usuário: Representante do Gerando Falcões ou Líder/Professor. Nessa tela, o usuário terá uma visão geral de todas as ONGs ou oficinas sob sua responsabilidade, com acesso fácil a elas.

### Tela de indicadores por oficinas
<h6 align="center"> Figura 37: Tela de indicadores por Oficinas </h6>

<img src="../imagens/wireframe_4.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Ao acessar uma oficina, o Líder/Professor terá acesso a uma nova tela, onde poderá visualizar dados da oficina, como o número de atendimentos esperados e a quantidade de professores cadastrados.

### Tela de indicadores por ONGs
<h6 align="center"> Figura 38: Tela de indicadores por ONGs </h6>

<img src="../imagens/wireframe_5.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Diferentemente das oficinas, ao acessar uma determinada ONG, o representante do Gerando Falcões terá acesso a uma tela com mais dados, fornecendo um panorama geral da ONG. Além disso, o usuário poderá visualizar os dados por oficina.

### Tela para cadastro de aulas e presença de alunos
<h6 align="center"> Figura 39: Tela de cadastro de aulas </h6>

<img src="../imagens/wireframe_6.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 40: Tela de presença </h6>

<img src="../imagens/wireframe_7.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Ao selecionar a aba das aulas da oficina selecionada, o usuário poderá cadastrar novas aulas, editar aulas existentes e marcar a presença dos alunos.
Tela para cadastro de professores (Gerando Falcões/Líderes)

### Tela para cadastro de professores (Gerando Falcões/Líderes)
<h6 align="center"> Figura 41: Tela de cadastro de professores</h6>

<img src="../imagens/wireframe_8.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Na aba dos professores, o usuário poderá encontrar todos os professores cadastrados na oficina selecionada, além de poder cadastrar novos professores.
Tela para cadastro de alunos

### Tela para cadastro de alunos
<h6 align="center"> Figura 42: Tela para visualizar alunos </h6>

<img src="../imagens/wireframe_9.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 43: Tela para cadastrar alunos </h6>

<img src="../imagens/wireframe_10.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 44: Tela de cadastro de aluno menor de idade </h6>

<img src="../imagens/wireframe_11.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Acessando a aba dos alunos, o usuário conseguirá encontrar todos os alunos cadastrados, além de poder adicionar novos alunos, com a condição de adicionar um responsável legal caso o aluno seja menor de idade.

### Tela para cadastro de líderes (Apenas para a Gerando Falcões)
<h6 align="center"> Figura 45: Tela para visualizar líderes </h6>

<img src="../imagens/wireframe_12.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 46: Tela para cadastrar líder </h6>

<img src="../imagens/wireframe_13.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Na aba de Líderes, os representantes do Gerando Falcões poderão encontrar todos os líderes cadastrados na ONG selecionada e cadastrar novos líderes.

## 6.3 Frontend

&emsp;&emsp;Com o objetivo de aprimorar a experiência do usuário e manter um desenvolvimento atualizado, foram selecionadas as ferramentas a serem utilizadas. Para este projeto, definiu-se a utilização do React.js e do Styled Components como as principais tecnologias para criar e estilizar os componentes da aplicação.

&emsp;&emsp;O React.js, uma biblioteca JavaScript, possibilita a criação de interfaces de usuário interativas e dinâmicas, baseadas em componentes reutilizáveis e isolados. Esses componentes podem conter seu próprio estado, lógica e estilo, e são compostos para formar componentes mais complexos. Essa abordagem proporciona vantagens como modularidade, reutilização, testabilidade e performance. Além disso, o React.js oferece hooks, que são funções para gerenciar o estado e o ciclo de vida dos componentes sem a necessidade de classes.

&emsp;&emsp;O Styled Components é uma biblioteca que permite escrever CSS em JavaScript, utilizando template literals. Essa abordagem dinâmica possibilita definir os estilos dos componentes com base nas props ou no tema da aplicação. Além disso, o Styled Components gera nomes de classes únicos para cada componente, evitando conflitos e sobrescritas de estilos. Essa metodologia simplifica o desenvolvimento, tornando-o mais legível e personalizável.

&emsp;&emsp;Ao combinar o React.js e o Styled Components, uma interface de usuário consistente, intuitiva e atraente é criada, atendendo às necessidades e expectativas dos usuários. Essas ferramentas também facilitam o trabalho em equipe, otimizando o uso de tempo e recursos. A partir disso, foram criadas as seguintes telas:

### Tela de login

<h6 align="center"> Figura 47: Tela de login </h6>

<img src="../imagens/frontend1.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;A página de login solicita o email e a senha do usuário, que são verificados pelo sistema para confirmar se ele está registrado no banco de dados e qual é o seu papel (Gerando Falcões, Líder ou Professor). Dependendo do seu papel, o usuário é redirecionado para a tela inicial adequada. Essa página cumpre o requisito não funcional 1 (Controle de Acesso Baseado em Papéis (RBAC)) e o requisito não funcional 3 (Interface de Usuário Simplificada e Intuitiva).

### Página inicial

<h6 align="center"> Figura 48: Página inicial </h6>

<img src="../imagens/frontend2.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Ao acessar a tela inicial, o usuário consegue encontrar todas as oficinas cadastradas em sua ONG, bem como uma barra lateral com "home", "estatísticas" e "sobre nós", que permite que o usuário navegue para outras páginas. Além disso, também é possível adicionar uma nova oficina à ONG selecionando o ícone "+". Essa página contempla o requisito funcional 7 (O sistema deve prover visualizações simples e unificadas) e o requisito não funcional 3 (Interface de Usuário Simplificada e Intuitiva).

### Dados das oficinas

<h6 align="center"> Figura 49: Dados das oficinas </h6>

<img src="../imagens/frontend3.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Ao selecionar uma oficina na tela inicial, o usuário é direcionado para a seção de informações específicas da mesma. A primeira aba do menu, chamada "Dados", exibe os indicadores pertinentes àquela oficina, tais como: número de atendimentos esperados, atendidos, professores, frequência por vaga, frequência por matrícula e taxa de evasão. Essa página satisfaz o requisito funcional 7 (O sistema deve prover visualizações simples e unificadas) e o requisito não funcional 3 (Interface de Usuário Simplificada e Intuitiva).

### Aulas cadastradas

<h6 align="center"> Figura 50: Aulas cadastradas </h6>

<img src="../imagens/frontend6.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 51: Adicionar aulas </h6>

<img src="../imagens/frontend4.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Ao selecionar a aba "Aulas", o usuário pode acessar todas as aulas cadastradas naquela oficina. Ele também tem a opção de filtrá-las, organizando-as das mais recentes para as mais antigas e vice-versa. Além disso, é possível adicionar uma nova aula ao clicar no botão "Adicionar aula", que abrirá um pop-up para o usuário cadastrar uma nova aula, incluindo nome, data, professores e turma designada. Essa tela atende aos requisitos funcionais 7 (O sistema deve prover visualizações simples e unificadas) e não funcional 3 (Interface de Usuário Simplificada e Intuitiva), além do requisito não funcional 4 (Sistema de Gerenciamento de Aulas).

### Informações das aulas

<h6 align="center"> Figura 52: Informações das aulas </h6>

<img src="../imagens/frontend5.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;Ao selecionar uma aula na aba anterior, o usuário pode acessar as informações específicas daquela aula, como o nome, a data, os professores designados e a turma referente. Além disso, ele pode encontrar todos os alunos cadastrados na turma e responder à lista de presença do dia daquela aula por meio de uma interface muito acessível, utilizando checkboxes, proporcionando uma experiência de usuário mais intuitiva. Ao clicar em salvar, o usuário consegue registrar a aula como realizada e quais alunos estavam presentes. Esta tela atende aos requisitos funcionais 2 (O sistema deve registrar presença e frequência dos alunos), 7 (O sistema deve prover visualizações simples e unificadas) e ao requisito não funcional 3 (Interface de Usuário Simplificada e Intuitiva).

&emsp;&emsp;Buscou-se desenvolver um frontend que aprimorasse a experiência do usuário e garantisse um ambiente atualizado, utilizando ferramentas como o React.js e o Styled Components para criar interfaces dinâmicas e visualmente atrativas, com uma base de código organizada e eficiente. As telas apresentadas na documentação foram projetadas para atender aos requisitos funcionais e não funcionais do sistema, gerenciando o acesso dos usuários com base em seus papéis e exibindo dados das oficinas e aulas de forma simples, unificada e fácil de usar. Com a aplicação dessas tecnologias e metodologias, foi possível não apenas satisfazer as necessidades funcionais do sistema, mas também oferecer uma interface amigável e intuitiva para os usuários, demonstrando o compromisso contínuo em proporcionar uma experiência superior para todos os envolvidos no projeto.

# 7. Projeto de Banco de Dados

&emsp;&emsp;Na seção a seguir, será abordado o projeto de banco de dados, uma etapa essencial no desenvolvimento da plataforma, envolvendo a criação de um modelo conceitual e lógico para estruturar e organizar os dados de maneira eficiente. O modelo conceitual é o primeiro passo, fornecendo uma visão abstrata das entidades, seus atributos e relações, sem preocupações técnicas de armazenamento. Em seguida, o modelo lógico detalha essa visão, preparando o caminho para a implementação física. Esses modelos são vitais para garantir que o banco de dados seja capaz de suportar as operações e os processos de negócios com integridade, desempenho e flexibilidade.

## 7.1 Modelo Conceitual

&emsp;&emsp;O modelo conceitual é uma representação abstrata e simplificada de como os elementos de um domínio específico se relacionam entre si. Na criação de sistemas, especialmente em bancos de dados e aplicações, este modelo serve como um guia crucial para a estruturação e organização de dados, garantindo que o sistema seja eficaz e eficiente. Nesse modelo, exploramos três aspectos principais: a identificação das entidades, definição dos atributos e estabelecimento das relações.

**Identificação das entidades:** O ponto de partida é a identificação de todas as entidades relevantes dentro do projeto. Uma entidade pode ser qualquer objeto ou conceito que exista independentemente e seja significativo para o sistema. Identificar essas entidades corretamente é crucial para garantir que todas as informações necessárias sejam capturadas pelo sistema.

**Definição dos atributos:** Após a identificação das entidades, o próximo passo é definir os atributos para cada uma delas. Atributos são características ou propriedades que descrevem e especificam uma entidade. Esses atributos fornecem detalhes essenciais sobre as entidades, permitindo uma gestão de dados mais rica e detalhada.

**Estabelecimento das relações:** Finalmente, é necessário determinar como as entidades se relacionam umas com as outras. As relações podem ser classificadas como 'um-para-um', 'um-para-muitos', 'muitos-para-um', ou 'muitos-para-muitos'. Compreender e modelar essas relações adequadamente é essencial para a integridade e funcionalidade do sistema, permitindo uma interação eficaz entre as diferentes partes do modelo.

<h6 align="center"> Figura 53: Modelo Conceitual </h6>

<img src="../imagens/Modelo Conceitual (1).png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### Entidades e Atributos:

## 7.2 Modelo Lógico

&emsp;&emsp;O modelo lógico constitui uma metodologia que engloba a articulação das ideias, hipóteses e expectativas que são a base do projeto e como se prevê que o programa opere.

&emsp;&emsp;Ele representa diagramaticamente restrições de dados, nomes de entidades e relacionamentos para implementação de forma independente da plataforma. Esse processo é essencial para a elaboração do modelo físico de dados, que refina ainda mais o modelo lógico de dados para implementação em uma tecnologia de banco de dados específica. Baseado nisso foi elaborado o seguinte modelo lógico:

<h6 align="center"> Figura 54: Modelo Conceitual </h6>

<img src="../imagens/modelo_logico.png">

- **Aluno**: Beneficiário das aulas e oficinas, com atributos pessoais como Nome, Email, Data de Nascimento, Telefone, CPF, Gênero, Etnia, Endereço e Estado Civil.

&emsp;&emsp;**Tabela usuário:** serve como ponto de partida do modelo lógico, abarcando todos os usuários do aplicativo, diferenciados pelas suas permissões. Ela contém atributos como nome, email, senha, permissões (que podem ser de líder, professor ou Gerando Falcões) e a chave primária do usuário. Aqueles com permissão da Gerando Falcões têm a capacidade de adicionar uma ONG, o que nos leva à próxima tabela.

&emsp;&emsp;**Tabela ong:** encontram-se atributos como nome da ONG, email, responsável (usuário com as mesmas funcionalidades do perfil líder), telefone, CNPJ, líderes, endereço, uma chave estrangeira para a associação das oficinas com a ONG e a chave primária da ONG. 

&emsp;&emsp;**Tabela oficinas e oficina_ong:** a tabela "oficina" possui atributos como nome, chave primária da oficina e categoria. Esta tabela está relacionada através da tabela intermediária "oficina_ong", que contém a chave primária id_oficinas_da_ong, uma chave estrangeira com o id da ONG e com o id da oficina.

&emsp;&emsp;**Tabela líder:** nela temos atributos como nome, email, data de nascimento, telefone, CPF, gênero, etnia, endereço e uma chave estrangeira que se refere à ONG associada a esse líder. O líder tem a prerrogativa de adicionar professores e turmas.

&emsp;&emsp;**Tabela professores e professores_por_aula:** a tabela "professores" lista os professores cadastrados pelo líder e inclui atributos como nome, email, data de nascimento, telefone, CPF, gênero, etnia, endereço e uma chave estrangeira com o id do professor. A tabela "professores_por_aula" faz a conexão dos professores com as aulas correspondentes, contendo a chave primária id_professor_por_aula, uma chave estrangeira com o id do professor e com o id da aula.

&emsp;&emsp;**Tabela aulas e lista_de_presença:** a tabela "aulas" detalha informações das aulas ministradas, incluindo nome da aula, data, dia da semana e a chave primária com o id da aula. A tabela "lista_de_presença" armazena as listas de presença das aulas, com a chave primária id da presença e chaves estrangeiras com o id do aluno e da aula.

&emsp;&emsp;**Tabela alunos e matrícula:** a tabela "alunos" contém informações de cadastro dos alunos, como nome, email, data de nascimento, telefone, CPF, gênero, etnia, endereço, estado civil, a chave primária com o id do aluno e o status atual. A tabela "matrícula" faz a ligação dos alunos com as turmas, contendo a chave primária com a matrícula e chaves estrangeiras para o aluno e a turma.

&emsp;&emsp;**Tabela turmas:** é composta por apenas três atributos: nome, a chave primária para a turma e uma chave estrangeira para a ligação com os alunos daquela turma através da tabela "matrícula".

&emsp;&emsp;Em conclusão, o modelo lógico descrito organiza de maneira eficiente a estrutura de dados de um sistema de gerenciamento de ONGs. Cada tabela foi cuidadosamente projetada para capturar e relacionar informações essenciais, desde os detalhes dos usuários até as especificidades das turmas e aulas oferecidas. Através deste modelo, é possível gerenciar as operações diárias e facilitar a comunicação entre diferentes níveis de usuários, promovendo uma gestão eficaz e a expansão do impacto social da Gerando Falcões. Este sistema não só atende às necessidades administrativas atuais, mas também é escalável para acomodar o crescimento futuro e a inclusão de novas funcionalidades.


# 8. Testes de Software

&emsp;&emsp; Nesta seção, exploraremos os diferentes tipos de testes de software, suas metodologias, técnicas e melhores práticas. Desde testes unitários que visam verificar a funcionalidade de unidades individuais de código até testes de integração, aceitação e desempenho que avaliam o sistema como um todo, examinaremos como esses processos se encaixam no ciclo de vida do desenvolvimento de software.

## 8.1 Demonstração da integração

### 8.1.1 Testes das rotas de Api

&emsp;&emsp; Nesta seção, será abordado as imagens dos testes de rotas do backend do sistema web que está em desenvolvimento. Para isso, os testes de rotas no backend, realizados na ferramenta "Postman", são fundamentais para garantir que o sistema esteja funcionando conforme o esperado antes de ser implantado em um ambiente de produção. Esses testes ajudam a identificar e corrigir erros ou falhas no código do backend, bem como garantir a integração adequada entre os diferentes componentes do sistema. Desse modo, temos os seguintes testes: 

### Servidor

<h6 align="center"> Figura 55: Teste do servidor </h6> 

<img src="../imagens/postman-teste.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Na imagem acima, temos um teste no método "GET" na url "http://localhost:3333/" que, caso o servidor esteja definido e funcional, a mensagem "Server is running" aparecerá. Isso porque o método GET é usado para solicitar dados de um recurso específico do servidor. Quando solicitado uma página da web, por exemplo, o navegador envia uma solicitação GET para o servidor para obter o conteúdo da página (neste caso é a mensagem dita acima). E isso servirá como base para as próximas rotas desenvolvidas ao longo do projeto.

<h6 align="center"> Figura 56: Teste do servidor </h6> 

<img src="../imagens/postman-teste2.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Já neste caso acima, temos o método "POST", sendo utilizado para enviar dados de um cliente para o servidor. Neste exemplo, definimos a rota "/testar-post" para que, caso esteja funcionando, a mensagem "POST received successfully" aparece. No método POST, os dados enviados não são visíveis na URL, pois são enviados no corpo da solicitação.


### Login

<h6 align="center"> Figura 57: Teste do Login </h6> 

<img src="../imagens/postman-login-get.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; No caso do Login, temos a seguinte situação:
a equipe Fly foi informada que na aplicação não deveríamos colocar tela de cadastro, ou seja, apenas usuários já autênticados pela Gerando Falcões teriam acesso. Desse modo, definimos dois exemplos fixos, como o Henrique e o Lucas. Cada um apresenta um ID, name, email, password e job. Vale destacar que esse campo "job" representa a função que tal usuário tem dentro da ONG. Como nessa sprint 2 trabalhamos apenas com a jornada do líder, definimos que os dois usuários (líderes) consigam acessar a plataforma.

<h6 align="center"> Figura 58: Teste do Login </h6> 

<img src="../imagens/postman-login-erro.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Acima, o exemplo para mostrar que, como trabalhamos com a jornada do líder, quando um usuário que não está definido como líder tenta acessar a plataforma, o sistema retorna "Usuário não encontrado". Isso demonstra a funcionalidade da lógica implementada apenas para liberar acesso para líderes nesse momento. Vale destacar que essa mensagem aparecerá quando qualquer campo for digitado incorretamente, seja o email ou a senha, por exemplo.


### Workshops

<h6 align="center"> Figura 59: Teste do Workshop </h6> 

<img src="../imagens/postman-workshops.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 60: Teste do Workshop </h6> 

<img src="../imagens/postman-workshops2.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Nas duas imagens acima, temos os testes dos workshops, que aparecem logo após quando o líder efetua com sucesso o login. Neste teste, vemos que todas as oficinas estão devidamente cadastradas com a TurmaID, o título e o ícone para representar cada oficina. Vale destacar que cada oficina está relacionada com uma determinada turma, como mostra o turmaID.


### Dashboard

<h6 align="center"> Figura 61: Teste do Dashboard </h6> 

<img src="../imagens/postman-dashboard.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; No teste de dashboard, encontramos os campos turmaId, esperados, atendidos, professores, freqVaga (frequência por vaga), freqMatrícula (frequência por matrícula) e evasão. Esse dashboard é acessado após o líder selecionar uma determinada oficina no sistema web. É importante destacar que as informações mostradas no dashboard variam de acordo com cada oficina, como mostra o campo turmaID.

### Classes

<h6 align="center"> Figura 62: Teste de Classes </h6> 

<img src="../imagens/postman-classes.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Quando o líder acessar a tela de dashboard de uma determinada oficina, ele também conseguirá acessar o campo "Aulas", na qual ele poderá visualizar as aulas e criá-las. No entanto, para essa sprint 2 foi desenvolvida apenas a funcionalidade de visualização de aulas existentes. Para isso, definimos Aula teste e Aula teste 2. Além disso, aula apresenta seu ID, seu className, a data e a turmaID, para referenciar qual turma tem aquela aula específica.

### Alunos

<h6 align="center"> Figura 63: Teste de Alunos </h6> 

<img src="../imagens/postman-students.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 64: Teste de Alunos </h6> 

<img src="../imagens/postman-students2.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 65: Teste de Alunos </h6> 

<img src="../imagens/postman-students3.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Quando o líder selecionar uma determinada aula, ele poderá ter acesso a algumas informações, dentre elas, a de alunos para registrar a lista de presença. Como mostra nas imagens acima, foi definido o ID do aluno, o nome e suas respectivas turmas para que a atribuiçãi da presença futuramente seja assertiva.

### Professores

<h6 align="center"> Figura 66: Teste de Professores </h6> 

<img src="../imagens/postman-teachers.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Por fim, o teste de professores, estando bastante relacionado às aulas e oficinas. Como mostrado nas imagens, definimos o ID de cada professor, seu nome e a turma, para que possamos cadastrar tal professor extamente na turma de determinada oficina que queremos. Assim, finalizando todos os testes de rotas criadas na sprint 2.

### 8.1.2 Processo de implantação do backend e frontend na instância EC2

&emsp;&emsp;Para começar, foram criadas duas instâncias EC2 com o intuito de abrigar o frontend em uma delas e o backend em outra, a partir disso foi realizado o seguinte processo:

### 1. Criar Instância EC2 na AWS

Ao acessar o console da AWS, selecionamos a opção "Criar Máquina Virtual com EC2". Isso nos levou à tela inicial do processo de criação da instância.

<h6 align="center"> Figura 67: Criar Instância EC2 </h6>

<img src="../imagens/launch_instance.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly</h6>

### 2. Nomear a Instância

Após selecionar a opção "Criar Máquina Virtual com EC2", foi solicitado que nomeássemos a instância. Optamos por nomeá-la como "Minha ponderada semana 03".

<h6 align="center"> Figura 68: Nomear a Instância </h6>

<img src="../imagens/nome_instancia.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 3. Selecionar o Sistema Operacional

Escolhemos o sistema operacional Ubuntu devido à sua versatilidade e facilidade de uso.

<h6 align="center"> Figura 69: Selecionar o Sistema Operacional </h6>

<img src="../imagens/sistema_nuvem.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 4. Criar Chave SSH

Foi necessário criar uma chave privada SSH para garantir a segurança do acesso ao projeto.

<h6 align="center"> Figura 70: Criar Chave SSH </h6>

<img src="../imagens/criar_chave.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 5. Criar Grupo de Segurança

Selecionamos as permissões para SSH, HTTPS e HTTP para permitir o acesso por esses meios.

<h6 align="center"> Figura 71: Criar Grupo de Segurança </h6>

<img src="../imagens/criar_segurança.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 6. Tela de Carregamento da Instância

Após clicar em "Executar Instância", foi exibida uma tela de carregamento enquanto a instância era inicializada.


<h6 align="center"> Figura 72: Tela de Carregamento da Instância </h6>

<img src="../imagens/carregando_instancia.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 7. Instância Criada com Sucesso 

A instância foi criada com sucesso e estava pronta para ser utilizada.

<h6 align="center"> Figura 73: Instância Criada com Sucesso </h6>

<img src="../imagens/carregada_instancia.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 8. Detalhes da Instância 

Visualizamos os detalhes da instância, incluindo seu ID, endereço IP público e privado.

<h6 align="center"> Figura 74: Detalhes da Instância </h6>

<img src="../imagens/instancias_executando.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 9. Acesso ao Servidor via Terminal

Utilizamos o cliente SSH para acessar localmente nossa instância, logo, devemos ir até a instância EC2 e copiar o comando para colar no terminal, nesta etapa vamos utilizar a chave privada criada na intância.

<h6 align="center"> Figura 75: Comando SSH na aws </h6>

<img src="../imagens/cliente_ssh.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 76: Acesso ao Servidor via Terminal Utilizando Chave Privada </h6>

<img src="../imagens/terminal_ssh.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 10. Confirmação de Entrada no Servidor

Confirmamos a entrada no servidor via terminal, onde pudemos iniciar o uso do sistema operacional da máquina virtual para outras finalidades, como conectar-se ao repositório do GitHub e construir nossa API.

<h6 align="center"> Figura 77: Confirmação de Entrada no Servidor </h6>

<img src="../imagens/confirmacao_entrada_servidor.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Dessa maneira, concluímos o processo de criação e configuração da instância EC2 na AWS para o desenvolvimento da nossa aplicação. Logo, a máquina virtual já está sendo acessada localmente.


### 11. Configurar Segurança da Chave SSH

Após a criação da instância EC2, foi necessário configurar a segurança da chave SSH para garantir acesso seguro à instância. Isso incluiu desabilitar a herança e aplicar as permissões adequadas à chave SSH.

<h6 align="center"> Figura 78: Configurar Segurança da Chave SSHl </h6>

<img src="../imagens/desabilitar_heranca.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 12. Atualizar Instância EC2

Após configurar a segurança da chave SSH, procedemos com a atualização da instância EC2 para garantir que todos os pacotes e softwares estivessem atualizados.

<h6 align="center"> Figura 79: Atualizar Instância EC2 </h6>

<img src="../imagens/update_instancia.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 13. Instalar npm (Node Package Manager)

Um passo crucial foi a instalação do npm para gerenciar as dependências do projeto e facilitar o desenvolvimento da aplicação/API.

<h6 align="center"> Figura 80: Instalar npm </h6>

<img src="../imagens/instalacao_npm.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 14. Instalar Node.js

Além do npm, também instalamos o Node.js, que é uma plataforma de execução de código JavaScript que permite executar aplicações do lado do servidor.

<h6 align="center"> Figura 81: Instalar Node.js </h6>

<img src="../imagens/instalacao_node.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Esses passos foram essenciais para preparar o ambiente de desenvolvimento e configurar a instância EC2 para execução da aplicação/API. Com essas etapas concluídas, estávamos prontos para prosseguir com o desenvolvimento e implantação da nossa aplicação. Após concluir a configuração da instância EC2 e preparar o ambiente de desenvolvimento, procedemos com o clonagem do repositório do GitHub contendo o código-fonte da nossa aplicação/API. Em seguida, instalamos as dependências do projeto e utilizamos a biblioteca PM2 para realizar o deploy da API. Abaixo, detalhamos cada etapa do processo de implementação:

<h6 align="center"> Figura 82: Clonagem do Repositório no GitHub </h6>

<img src="../imagens/git_clone.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Após configurar a instância e preparar o ambiente, procedemos com a clonagem do repositório contendo o código-fonte da aplicação/API do GitHub. Isso nos permitiu ter acesso ao código atualizado e pronto para implantação.

<h6 align="center"> Figura 83: Instalação das Dependências do Projeto </h6>

<img src="../imagens/npm_install.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Em seguida, acessamos a pasta do projeto e instalamos todas as dependências necessárias para o correto funcionamento da aplicação/API. Isso incluiu bibliotecas, frameworks e outros pacotes necessários para o desenvolvimento e execução do projeto.

<img src="../imagens/instalacao_pm2.png">

<h6 align="center"> Figura 84: Utilização do PM2 para Deploy da API </h6>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Utilizamos a biblioteca PM2 para realizar o deploy da API, garantindo um processo de implantação simplificado e eficiente. Configuramos o PM2 para iniciar o arquivo principal da aplicação/API e monitoramos o seu funcionamento.

<img src="../imagens/start_pm2.png">

<h6 align="center"> Figura 85: Inicialização da Aplicação/API com PM2 </h6>

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Por último o frontend sendo inicializado no terminal.


<h6 align="center"> Figura 86: Inicialização do Frontend na instância</h6>

<img src="../imagens/frontend_intancia.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>



Por fim, iniciamos a aplicação/API utilizando o PM2 e verificamos que ela estava ativa e funcionando corretamente. Isso foi confirmado pela mensagem de sucesso exibida pelo PM2 após a inicialização da aplicação/API.

Essas etapas foram cruciais para a implementação bem-sucedida da nossa aplicação/API na instância EC2 da AWS. Com isso, nossa aplicação estava pronta para ser acessada e utilizada conforme necessário.

### 8.1.3 Demonstração de integração com Banco de Dados

&emsp;&emsp; Nesta seção, assim como na 9.1.1, será abordado as imagens dos testes de rotas do backend do sistema web que está em desenvolvimento. Para isso, os testes de rotas no backend, realizados na ferramenta "Postman", são fundamentais para garantir que o sistema esteja funcionando conforme o esperado antes de ser implantado em um ambiente de produção. Esses testes ajudam a identificar e corrigir erros ou falhas no código do backend, bem como garantir a integração adequada entre os diferentes componentes do sistema. A seguir, os testes já integrados com banco de dados criado pelo grupo Fly: 

### Aulas

<h6 align="center"> Figura 87: Teste de Aulas </h6> 

<img src="../imagens/lesson1-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 88: Teste de Aulas </h6> 

<img src="../imagens/lesson2-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Nas imagens acima, podemos ver na URL "http://localhost:3333/lesson", no método GET, as aulas já cadastradas no banco de dados criado. Neste caso, a tabela "Aulas" que está sendo representada abriga os atributos "id_aula", "nome", "data", "dias_semana", "fk_id_presenca" e "fk_id_turma". Vale destacar que estes últimos atributos representam as chaves estrangeiras. 

### Lista de Presença

<h6 align="center"> Figura 89: Teste de Lista de Presença </h6> 

<img src="../imagens/attendanceList-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Esta tabela tem como finalidade exibir o identificador único da presença, do aluno e da aula, sendo relacionados com as tabelas de aulas e alunos.

### Turmas

<h6 align="center"> Figura 90: Teste de Lista de Turmas </h6> 

<img src="../imagens/classes-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Na imagem acima, temos a rota /classes no método GET, que exibe as informações a respeito das turmas. Nesta tabela, temos os atributos "id_turma", "fk_id_matricula", "nome" e "fk_id_oficina". Neste caso, temos as diferentes turmas já cadastradas.

### Líder

<h6 align="center"> Figura 91: Teste de Líder </h6> 

<img src="../imagens/leaders1-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 92: Teste de Líder </h6> 

<img src="../imagens/leaders2-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 93: Teste de Líder </h6> 

<img src="../imagens/leaders3-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Nas imagens acima, temos o teste da rota de líder. Nesta tabela, há os atributos "id_lider", "fk_id_ong", "nome", "email", "data_nascimento", "telefone", "cpf", "genero", "etnia" e "endereco". Aqui, são adicionados os principais dados dos líderes. Estes, que foram alinhados previamente entre o grupo Fly e a Gerando Falcões.

### Professor-Aula

<h6 align="center"> Figura 94: Teste de Professor-Aula </h6> 

<img src="../imagens/lessonTeacher-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Na imagem acima, temos a rota /lessonTeacher no método GET, que exibe o identificador único do professor por aula, a "fk_id_aula" e "fk_id_professor". Esta tabela, então, está relacionada com os professores e aulas.

### ONGs

<h6 align="center"> Figura 95: Teste de ONGs </h6> 

<img src="../imagens/ongs1-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 96: Teste de ONGs </h6> 

<img src="../imagens/ongs2-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 97: Teste de ONGs </h6> 

<img src="../imagens/ongs3-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Nas imagens acima, temos a rota /ongs no método GET, que exibe os atributos "id_ong", "fk_id_oficina_da_ong", "nome", "email", "responsavel", "telefone", "cnpj" e "endereco". Aqui, são adicionados os principais dados das ONGs. Estes, que foram alinhados previamente entre o grupo Fly e a Gerando Falcões.

### Registro-Turmas

<h6 align="center"> Figura 98: Teste de Registro de turmas </h6> 

<img src="../imagens/registerClasses-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Esta tabela tem como finalidade exibir o identificador único da matrícula, do aluno e da turma, sendo relacionados com as tabelas de aulas e alunos.

### Alunos

<h6 align="center"> Figura 99: Teste de Alunos </h6> 

<img src="../imagens/students1-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 100: Teste de Alunos </h6> 

<img src="../imagens/students2-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 101: Teste de Alunos </h6> 

<img src="../imagens/students3-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Nas imagens acima, temos a rota /students no método GET, que exibe os atributos "id_aluno" "fk_id_matricula", "nome", "email", "telefone", "data_nascimento", "cpf", "genero", "etnia", "endereco", "estado_civil" e "status". Aqui, são adicionados os principais dados dos alunos. Estes, que foram alinhados previamente entre o grupo Fly e a Gerando Falcões.

### Professores

<h6 align="center"> Figura 102: Teste de Professores </h6> 

<img src="../imagens/teacher1-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 103: Teste de Professores </h6> 

<img src="../imagens/teacher2-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 104: Teste de Professores </h6> 

<img src="../imagens/teacher3-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Nas imagens acima, temos a rota /students no método GET, que exibe os atributos "id_professor" "fk_id_professor_por_aula", "nome", "email", "data_nascimento", "telefone", "cpf", "genero", "etnia" e "endereco". Aqui, são adicionados os principais dados dos professores. Estes, que foram alinhados previamente entre o grupo Fly e a Gerando Falcões.

### Oficinas

<h6 align="center"> Figura 105: Teste de Oficinas </h6> 

<img src="../imagens/workshops1-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 106: Teste de Oficinas </h6> 

<img src="../imagens/workshops2-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Nas imagens acima, temos a rota /workshops no método GET, que exibe os atributos "id_oficina", "fk_id_oficina_da_ong", "nome_oficina" e "categoria". Aqui, são adicionados os principais dados necessários para a criação de uma oficina.

### Oficinas-ONG

<h6 align="center"> Figura 107: Teste de Oficinas-ONG </h6> 

<img src="../imagens/workshopsOng-postman.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Por fim, esta tabela tem como finalidade exibir o identificador único da oficina da ong, da ong e da oficina, sendo relacionados com as tabelas de oficinas e ong.

## 8.2 Teste de Integração

&emsp;&emsp;  Testes de integração são fundamentais no desenvolvimento de software, pois garantem que os diversos módulos e componentes funcionem coletivamente de maneira eficiente e eficaz. Essa fase do teste se concentra na verificação das interações entre os diferentes módulos para identificar inconsistências, erros de comunicação e incompatibilidades. A realização de testes de integração assegura a qualidade do software, permitindo que eventuais problemas sejam identificados e corrigidos antes que o produto final seja entregue, o que contribui significativamente para a robustez e confiabilidade do sistema. A automação dos testes de integração pode trazer benefícios como economia de tempo e recursos, além de aumentar a cobertura de teste e melhorar a qualidade geral do software[12].

&emsp;&emsp;  No desenvolvimento do projeto Fly, a prática de testes foi uma etapa fundamental para garantir a qualidade e a robustez da nossa aplicação. Nesta seção, detalharemos os diferentes tipos de testes que foram realizados para assegurar que todas as funcionalidades estão operando conforme o esperado. Com testes que vão desde a verificação da estrutura do banco de dados até testes de integração que confirmam a fluidez da interação entre o backend e o frontend.

### login.test

```javascript
import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';
import usuarioService from '../services/userService';
import { useNavigate } from 'react-router-dom';

// Mock do hook useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mock do serviço usuarioService
jest.mock('../services/userService', () => ({
  criarUsuario: jest.fn(),
}));

describe('LoginPage Component', () => {
  let wrapper;
  const mockNavigate = jest.fn();
  const mockCriarUsuario = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    usuarioService.criarUsuario.mockImplementation(mockCriarUsuario);
    wrapper = shallow(<LoginPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('handles login form submission and redirects to /home on successful login', async () => {
    mockCriarUsuario.mockResolvedValueOnce({ name: 'John Doe' });
    const email = 'test@example.com';
    const password = 'password123';
    wrapper.find('#email').simulate('change', { target: { value: email } });
    wrapper.find('#password').simulate('change', { target: { value: password } });
    await wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(mockCriarUsuario).toHaveBeenCalledWith({ email, password, job: 'lider' });
    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });

  it('displays error message when login fails', async () => {
    mockCriarUsuario.mockRejectedValueOnce({ response: { status: 401 } });
    const email = 'test@example.com';
    const password = 'password123';
    wrapper.find('#email').simulate('change', { target: { value: email } });
    wrapper.find('#password').simulate('change', { target: { value: password } });
    await wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(mockCriarUsuario).toHaveBeenCalledWith({ email, password, job: 'lider' });
    expect(wrapper.find('ErrorMessage').text()).toBe('Usuário não encontrado');
  });
});
```
#### 1. Teste de Renderização do Componente `LoginPage`

- **Pré-condição:**
  O componente `LoginPage` deve estar pronto para ser renderizado, sem a necessidade de condições especiais.

- **Procedimento de Teste:**
  1. Renderize o componente `LoginPage`.
  2. Verifique se o componente é renderizado corretamente.

- **Pós-condição:**
  O componente `LoginPage` é visível na interface do usuário.

- **Resultados Esperados:**
  O componente `LoginPage` é renderizado com sucesso na tela.

- **Resultados Obtidos:**
  O componente `LoginPage` foi renderizado com sucesso.

#### 2. Teste de Submissão do Formulário de Login e Redirecionamento

- **Pré-condição:**
  O `LoginPage` deve conter um formulário de login que, quando submetido corretamente, resulta no redirecionamento para a página inicial.

- **Procedimento de Teste:**
  1. Preencha o formulário de login com dados válidos.
  2. Simule a submissão do formulário.
  3. Verifique se a função `criarUsuario` é chamada com os dados corretos.
  4. Aguarde a promessa de login ser resolvida.
  5. Verifique se a navegação para a página `/home` é realizada.

- **Pós-condição:**
  O usuário é redirecionado para a página `/home` após o login bem-sucedido.

- **Resultados Esperados:**
  Após o login bem-sucedido, ocorre o redirecionamento para a página `/home`.

- **Resultados Obtidos:**
  Não foi possível acessar o servidor e o formulário de login falhou.

#### 3. Teste de Mensagem de Erro no Login

- **Pré-condição:**
  O `LoginPage` deve exibir uma mensagem de erro quando a tentativa de login falha.

- **Procedimento de Teste:**
  1. Preencha o formulário de login com dados inválidos.
  2. Simule a submissão do formulário.
  3. Verifique se a função `criarUsuario` é chamada com os dados incorretos.
  4. Aguarde a promessa de login ser rejeitada.
  5. Verifique se uma mensagem de erro é exibida na interface.

- **Pós-condição:**
  Uma mensagem de erro é exibida após uma tentativa de login falha.

- **Resultados Esperados:**
  Uma mensagem de erro, como "Usuário não encontrado", é exibida na tela após uma tentativa de login malsucedida.

- **Resultados Obtidos:**
  A mensagem de erro foi exibida com sucesso após a falha no login.

<h6 align="center"> Figura 108: Teste de Integração</h6> 

<img src="../imagens/teste8.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 109: Teste de Integração</h6> 

<img src="../imagens/teste9.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>


### addLessons.test

```javascript
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import { ProgramProvider } from '../contexts/ProgramContext';

// Mocking the fetchOficinas function
jest.mock('../services/homeService', () => ({
  fetchOficinas: jest.fn(() =>
    Promise.resolve([
      { id_oficina: 1, nome_oficina: 'Oficina 1', categoria: 'Categoria 1' },
      { id_oficina: 2, nome_oficina: 'Oficina 2', categoria: 'Categoria 2' },
    ])
  ),
}));

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );
  });

  it('displays workshop cards', async () => {
    const { getByText } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Check if workshop cards are displayed
    expect(getByText('Oficina 1')).toBeInTheDocument();
    expect(getByText('Oficina 2')).toBeInTheDocument();
  });

  it('opens the add workshop modal', async () => {
    const { getByText, getByTestId } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Click the add button
    fireEvent.click(getByText('+'));

    // Check if modal is opened
    expect(getByTestId('add-oficina-modal')).toBeInTheDocument();
  });

  it('closes the add workshop modal', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Click the add button
    fireEvent.click(getByText('+'));

    // Check if modal is opened
    expect(getByTestId('add-oficina-modal')).toBeInTheDocument();

    // Close the modal
    fireEvent.click(getByTestId('modal-close-button'));

    // Check if modal is closed
    expect(queryByTestId('add-oficina-modal')).toBeNull();
  });
});
```

#### 4. Teste de Renderização do Componente `AddLessons`

- **Pré-condição:**
  O sistema deve estar configurado para interceptar e simular respostas para chamadas `fetch` de rede, com dados de teste pré-definidos.

- **Procedimento de Teste:**
  1. Renderize o componente `AddLessons`.
  2. Verifique se o componente é renderizado sem erros.

- **Pós-condição:**
  O componente `AddLessons` deve estar visível na interface do usuário sem apresentar erros.

- **Resultados Esperados:**
  O componente `AddLessons` é renderizado com sucesso, indicando que a estrutura básica do componente está funcional.

- **Resultados Obtidos:**
  - O componente foi renderizado conforme o esperado..

#### 5. Teste de Exibição de Detalhes da Aula

- **Pré-condição:**
  O componente `AddLessons` deve estar configurado para buscar e exibir detalhes da aula, como `Turma` e `Data`.

- **Procedimento de Teste:**
  1. Renderize o componente `AddLessons`.
  2. Simule a conclusão da busca de dados.
  3. Verifique se os detalhes da aula são exibidos corretamente.

- **Pós-condição:**
  Detalhes específicos da aula, como `Turma` e `Data`, devem ser exibidos no componente.

- **Resultados Esperados:**
  Os textos "Turma:" e "Data: 2024-03-16" aparecem na tela, confirmando a correta exibição dos detalhes da aula.

- **Resultados Obtidos:**
  - Os detalhes da aula, como turma e data foram exibidos corretamente.

#### 6. Teste de Alternância de Presença de Estudantes

- **Pré-condição:**
  A interface do componente `AddLessons` deve listar estudantes com opções para marcar presença.

- **Procedimento de Teste:**
  1. Renderize o componente `AddLessons`.
  2. Simule a busca de dados.
  3. Verifique a exibição dos nomes dos estudantes.
  4. Interaja com a interface para alternar a presença de um estudante.

- **Pós-condição:**
  A interface deve refletir a alteração de estado, indicando visualmente a presença do estudante.

- **Resultados Esperados:**
  Ao marcar a presença, o estudante selecionado deve exibir uma mudança visual (como alteração de opacidade).

- **Resultados Obtidos:**
  - A interação alterou corretamente o estado de presença do estudante.

#### 7. Teste de Abertura e Fechamento do Popup de Sucesso

- **Pré-condição:**
  Deve existir um mecanismo no componente `AddLessons` para abrir um popup de sucesso após salvar os dados.

- **Procedimento de Teste:**
  1. Renderize o componente `AddLessons`.
  2. Simule a ação de salvar para acionar o popup.
  3. Feche o popup para verificar seu fechamento adequado.

- **Pós-condição:**
  O popup de sucesso deve ser aberto e, em seguida, fechado corretamente, sem permanecer visível após a ação.

- **Resultados Esperados:**
  Após salvar, um popup deve aparecer e fechar corretamente ao interagir com o botão "OK".

- **Resultados Obtidos:**
  - O popup de sucesso foi aberto e fechado como esperado.

<h6 align="center"> Figura 110: Teste de Integração</h6> 

<img src="../imagens/teste1.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 111: Teste de Integração</h6> 

<img src="../imagens/teste2.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### homeViews.test

```javascript
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import { ProgramProvider } from '../contexts/ProgramContext';

// Mocking the fetchOficinas function
jest.mock('../services/homeService', () => ({
  fetchOficinas: jest.fn(() =>
    Promise.resolve([
      { id_oficina: 1, nome_oficina: 'Oficina 1', categoria: 'Categoria 1' },
      { id_oficina: 2, nome_oficina: 'Oficina 2', categoria: 'Categoria 2' },
    ])
  ),
}));

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );
  });

  it('displays workshop cards', async () => {
    const { getByText } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Check if workshop cards are displayed
    expect(getByText('Oficina 1')).toBeInTheDocument();
    expect(getByText('Oficina 2')).toBeInTheDocument();
  });

  it('opens the add workshop modal', async () => {
    const { getByText, getByTestId } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Click the add button
    fireEvent.click(getByText('+'));

    // Check if modal is opened
    expect(getByTestId('add-oficina-modal')).toBeInTheDocument();
  });

  it('closes the add workshop modal', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Click the add button
    fireEvent.click(getByText('+'));

    // Check if modal is opened
    expect(getByTestId('add-oficina-modal')).toBeInTheDocument();

    // Close the modal
    fireEvent.click(getByTestId('modal-close-button'));

    // Check if modal is closed
    expect(queryByTestId('add-oficina-modal')).toBeNull();
  });
});
```

#### 8. Teste de Renderização do Componente `Home`

- **Pré-condição:**
  O sistema deve estar configurado para interceptar e simular respostas para chamadas de serviço, especificamente para `fetchOficinas`.

- **Procedimento de Teste:**
  1. Renderize o componente `Home` dentro do `ProgramProvider`.
  2. Verifique se o componente é renderizado sem erros.

- **Pós-condição:**
  O componente `Home` é exibido na interface do usuário sem apresentar erros.

- **Resultados Esperados:**
  O componente `Home` é renderizado com sucesso, indicando que está operacional.

- **Resultados Obtidos:**
  O componente `Home` foi renderizado com sucesso e sem erros.

#### 9. Teste de Exibição de Cartões de Oficina

- **Pré-condição:**
  O componente `Home` deve estar configurado para buscar e exibir cartões de oficina usando a função `fetchOficinas`.

- **Procedimento de Teste:**
  1. Renderize o componente `Home` dentro do `ProgramProvider`.
  2. Aguarde a simulação da busca de dados.
  3. Verifique se os cartões das oficinas são exibidos corretamente.

- **Pós-condição:**
  Cartões de oficina com detalhes como `nome_oficina` e `categoria` são exibidos no componente.

- **Resultados Esperados:**
  Os nomes das oficinas, como "Oficina 1" e "Oficina 2", são presentes na tela, confirmando a correta exibição dos cartões.

- **Resultados Obtidos:**
  Os cartões de oficina foram exibidos corretamente, confirmando a funcionalidade de exibição de oficinas.

#### 10. Teste de Abertura do Modal de Adicionar Oficina

- **Pré-condição:**
  Deve existir um botão no componente `Home` que, ao ser clicado, abre um modal para adicionar uma nova oficina.

- **Procedimento de Teste:**
  1. Renderize o componente `Home` dentro do `ProgramProvider`.
  2. Clique no botão de adicionar (`+`) para abrir o modal.
  3. Verifique se o modal de adicionar oficina é aberto.

- **Pós-condição:**
  O modal de adicionar oficina é aberto na interface do usuário.

- **Resultados Esperados:**
  Após clicar no botão de adicionar, o modal correspondente é exibido.

- **Resultados Obtidos:**
  O modal de adicionar oficina foi aberto com sucesso.

#### 11. Teste de Fechamento do Modal de Adicionar Oficina

- **Pré-condição:**
  O modal de adicionar oficina deve estar aberto na interface do usuário.

- **Procedimento de Teste:**
  1. Renderize o componente `Home` dentro do `ProgramProvider`.
  2. Abra o modal de adicionar oficina.
  3. Clique no botão de fechar (`modal-close-button`) no modal.
  4. Verifique se o modal é fechado corretamente.

- **Pós-condição:**
  O modal de adicionar oficina é fechado, e não é mais visível na interface do usuário.

- **Resultados Esperados:**
  Após a interação, o modal é fechado e removido da tela.

- **Resultados Obtidos:**
  O modal de adicionar oficina foi fechado com sucesso.


<h6 align="center"> Figura 112: Teste de Integração</h6> 

<img src="../imagens/teste3.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 113: Teste de Integração</h6> 

<img src="../imagens/teste4.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 114: Teste de Integração</h6> 

<img src="../imagens/teste5.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### workshopViews.test

```javascript
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProgram } from '../contexts/ProgramContext';
import Workshop from './Workshop';
import { fetchClassesByWorkshopId } from '../services/workshopService';

// Mock do hook useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

// Mock do hook useProgram
jest.mock('../contexts/ProgramContext', () => ({
  useProgram: jest.fn(),
}));

// Mock da função fetchClassesByWorkshopId
jest.mock('../services/workshopService', () => ({
  fetchClassesByWorkshopId: jest.fn(),
}));

describe('Workshop component', () => {
  beforeEach(() => {
    // Reseta os mocks antes de cada teste
    jest.clearAllMocks();
  });

  test('renders workshop information and class cards', async () => {
    // Mock dos dados da oficina e das turmas
    const workshopId = 1;
    const workshopData = {
      workshopId,
      // Outros dados da oficina...
    };
    const classesData = [
      { id_turma: 1, nome: 'Turma A', horario: 'Segunda-feira 14h', dataInicio: '2024-04-01', dataFim: '2024-06-30' },
      { id_turma: 2, nome: 'Turma B', horario: 'Quarta-feira 10h', dataInicio: '2024-04-15', dataFim: '2024-07-15' },
    ];

    // Mock do retorno da função useProgram
    useProgram.mockReturnValueOnce({ workshopId });

    // Mock da função fetchClassesByWorkshopId para retornar os dados das turmas
    fetchClassesByWorkshopId.mockResolvedValueOnce(classesData);

    render(<Workshop />);

    // Verifica se os elementos da oficina são renderizados corretamente
    expect(screen.getByText(`Dados da Oficina de ${workshopId}`)).toBeInTheDocument();
    // Verifica se os cartões de turma são renderizados corretamente
    await waitFor(() => {
      expect(screen.getByText('Turma A')).toBeInTheDocument();
      expect(screen.getByText('Turma B')).toBeInTheDocument();
    });
  });

  test('navigates to home page when arrow left is clicked', async () => {
    // Mock do hook useNavigate
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(<Workshop />);

    // Clica na seta para a esquerda
    userEvent.click(screen.getByAltText('Arrow Left'));

    // Verifica se a navegação foi chamada corretamente
    expect(navigateMock).toHaveBeenCalledWith('/home');
  });

  // Adicione mais testes conforme necessário para outras funcionalidades do componente
});
```

#### 12. Teste de Exibição de Informações e Cartões de Turma no Componente `Workshop`

- **Pré-condição:**
  O componente `Workshop` deve estar configurado para buscar informações de oficinas e turmas usando a função `fetchClassesByWorkshopId`.

- **Procedimento de Teste:**
  1. Renderize o componente `Workshop`.
  2. Aguarde a simulação da busca de dados das turmas.
  3. Verifique se as informações da oficina e os cartões das turmas são exibidos corretamente.

- **Pós-condição:**
  Informações da oficina e cartões de turma com detalhes específicos são exibidos no componente.

- **Resultados Esperados:**
  A tela deve mostrar os dados da oficina e os cartões das turmas, confirmando a correta exibição das informações.

- **Resultados Obtidos:**
  As informações da oficina e os cartões das turmas foram exibidos com sucesso.

#### 13. Teste de Navegação para a Página Inicial

- **Pré-condição:**
  O componente `Workshop` deve ter um botão ou ícone que, ao ser clicado, navega de volta para a página inicial.

- **Procedimento de Teste:**
  1. Renderize o componente `Workshop`.
  2. Clique no ícone ou botão que representa a ação de voltar para a página inicial (por exemplo, 'Arrow Left').
  3. Verifique se a navegação é realizada corretamente para a página inicial.

- **Pós-condição:**
  O usuário é navegado de volta para a página inicial do sistema.

- **Resultados Esperados:**
  Após clicar no ícone ou botão de navegação, a aplicação deve redirecionar para a página inicial.

- **Resultados Obtidos:**
  A navegação para a página inicial foi realizada com sucesso.

<h6 align="center"> Figura 115: Teste de Integração</h6> 

<img src="../imagens/teste5.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 116: Teste de Integração</h6> 

<img src="../imagens/teste6.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 117: Teste de Integração</h6> 

<img src="../imagens/teste7.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

###  workshopService.test

```javascript
import { fetchClassesByWorkshopId } from './classService';

describe('fetchClassesByWorkshopId function', () => {
    beforeEach(() => {
        // Mock fetch para simular a resposta da API
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('fetches classes by workshop ID from API', async () => {
        const mockClassesData = [{ id: 1, name: 'Class 1' }, { id: 2, name: 'Class 2' }];
        const workshopId = 1;
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockClassesData,
        });

        const classes = await fetchClassesByWorkshopId(workshopId);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/workshops/classes/by-workshop/${workshopId}`);
        expect(classes).toEqual(mockClassesData);
    });

    test('throws an error if API request fails', async () => {
        const workshopId = 1;
        const errorMessage = 'Network Error';
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        await expect(fetchClassesByWorkshopId(workshopId)).rejects.toThrow(errorMessage);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/workshops/classes/by-workshop/${workshopId}`);
    });
});
```

#### 14. Busca de turmas por ID de oficina a partir da API

- **Pré-condição:**
  A função `fetchClassesByWorkshopId` deve estar pronta para ser testada, com a simulação de resposta da API configurada usando `jest.fn()`.

- **Procedimento de Teste:**
  1. Defina um mock para os dados de retorno esperados da API.
  2. Chame `fetchClassesByWorkshopId` com um ID de oficina específico.
  3. Verifique se a função `fetch` global foi chamada exatamente uma vez e com a URL correta.
  4. Verifique se os dados retornados pela função correspondem aos dados mockados.

- **Pós-condição:**
  A função deve retornar os dados corretos das turmas associadas ao ID da oficina fornecido.

- **Resultados Esperados:**
  A função `fetch` é chamada uma vez com a URL correta, e os dados retornados correspondem aos dados mockados.

- **Resultados Obtidos:**
  A função retornou os dados esperados com sucesso.

<h6 align="center"> Figura 118: Teste de Integração</h6> 

<img src="../imagens/teste10.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### 15. Manipulação de erro se a solicitação da API falhar

- **Pré-condição:**
  A função `fetchClassesByWorkshopId` deve tratar erros de rede ou falhas na solicitação da API.

- **Procedimento de Teste:**
  1. Simule uma falha na solicitação da API usando `mockRejectedValueOnce` com uma mensagem de erro específica.
  2. Chame `fetchClassesByWorkshopId` com um ID de oficina.
  3. Verifique se a função `fetch` global foi chamada com a URL correta.
  4. Verifique se a função lança o erro esperado quando a solicitação da API falha.

- **Pós-condição:**
  A função deve lançar um erro indicando que a solicitação da API falhou.

- **Resultados Esperados:**
  A função `fetch` é chamada com a URL correta, e um erro é lançado conforme esperado devido à falha na solicitação.

- **Resultados Obtidos:**
  A função lançou um erro conforme esperado ao falhar a solicitação da API.

### SelecLessonsViews.test 

```javascript
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SelectLessons from './SelectLessons';
import { fetchLessons as mockFetchLessons } from '../services/selectLessonsService'; // Importe a função fetchLessons mockada

jest.mock('../services/selectLessonsService'); // Mock da função fetchLessons

describe('SelectLessons component', () => {
    beforeEach(() => {
        mockFetchLessons.mockResolvedValueOnce([
            { id: 1, name: 'Dança Contemporânea', turmaId: 1 },
            { id: 2, name: 'Esporte Coletivo', turmaId: 2 },
            { id: 3, name: 'Cultura Regional', turmaId: 3 },
            { id: 4, name: 'Empreendedorismo Social', turmaId: 4 },
            { id: 5, name: 'Cursos Livres', turmaId: 5 },
        ]);
    });

    test('renders without errors', () => {
        render(<SelectLessons />);
        expect(screen.getByTestId('select-lessons')).toBeInTheDocument();
    });

    test('fetches lessons and updates state', async () => {
        render(<SelectLessons />);
        await waitFor(() => {
            expect(mockFetchLessons).toHaveBeenCalledTimes(1);
        });
        expect(screen.getByText('Dança Contemporânea')).toBeInTheDocument();
        expect(screen.getByText('Esporte Coletivo')).toBeInTheDocument();
        expect(screen.getByText('Cultura Regional')).toBeInTheDocument();
        expect(screen.getByText('Empreendedorismo Social')).toBeInTheDocument();
        expect(screen.getByText('Cursos Livres')).toBeInTheDocument();
    });

    test('changes state on filter selection', () => {
        render(<SelectLessons />);
        fireEvent.click(screen.getByText('Filtrar'));
        fireEvent.click(screen.getByText('mais antigo'));
        expect(screen.getByText('mais antigo')).toBeInTheDocument();
    });

    test('navigates on lesson item click', async () => {
        render(<SelectLessons />);
        await waitFor(() => {
            expect(mockFetchLessons).toHaveBeenCalledTimes(1);
        });
        fireEvent.click(screen.getByText('Dança Contemporânea'));
        expect(screen.getByText('Dança Contemporânea')).toBeInTheDocument();
    });
});
```
#### 16. Renderização Sem Erros

- **Pré-condição:**
  O componente `SelectLessons` deve ser capaz de ser renderizado sem depender de dados externos.

- **Procedimento de Teste:**
  1. Renderize o componente `SelectLessons`.
  2. Verifique se o componente é renderizado corretamente usando `getByTestId`.

- **Pós-condição:**
  O componente `SelectLessons` é exibido na tela sem erros.

- **Resultados Esperados:**
  O componente é renderizado com sucesso e está visível na tela.

- **Resultados Obtidos:**
  O componente foi renderizado corretamente e o teste passou sem erros.

### 17. Busca e Atualização de Aulas

- **Pré-condição:**
  O serviço `selectLessonsService` deve estar mockado para retornar dados fictícios de aulas.

- **Procedimento de Teste:**
  1. Renderize o componente `SelectLessons`.
  2. Aguarde a conclusão da busca das aulas.
  3. Verifique se as aulas são exibidas corretamente na tela.

- **Pós-condição:**
  As aulas retornadas pelo serviço mockado são exibidas no componente.

- **Resultados Esperados:**
  As aulas específicas como 'Dança Contemporânea', 'Esporte Coletivo', etc., são listadas na tela.

- **Resultados Obtidos:**
  As aulas foram buscadas e renderizadas corretamente, e o teste verificou a exibição dessas aulas.

### 18. Alteração de Estado na Seleção de Filtro

- **Pré-condição:**
  O componente `SelectLessons` deve ter uma funcionalidade de filtro que altera o estado do componente.

- **Procedimento de Teste:**
  1. Renderize o componente `SelectLessons`.
  2. Simule cliques para ativar o filtro e selecione uma opção de filtro.
  3. Verifique se a seleção altera o estado do componente corretamente.

- **Pós-condição:**
  O estado do componente é atualizado para refletir a opção de filtro selecionada.

- **Resultados Esperados:**
  A seleção do filtro altera o estado do componente, exibindo a opção 'mais antigo' como ativa.

- **Resultados Obtidos:**
  A seleção de filtro funcionou como esperado, e o teste confirmou a mudança de estado.

### 19. Navegação na Seleção de Aula

- **Pré-condição:**
  O componente `SelectLessons` deve permitir a navegação para outra página ao clicar em um item de aula.

- **Procedimento de Teste:**
  1. Renderize o componente `SelectLessons`.
  2. Aguarde a conclusão da busca das aulas.
  3. Simule o clique em uma aula.
  4. Verifique se a ação de clique leva à navegação correta ou à exibição de detalhes.

- **Pós-condição:**
  Um clique em uma aula leva à navegação ou mostra detalhes da aula.

- **Resultados Esperados:**
  Clicar em uma aula, como 'Dança Contemporânea', leva a uma ação de navegação ou mostra detalhes.

- **Resultados Obtidos:**
  O clique na aula navegou ou mostrou detalhes conforme esperado.

<h6 align="center"> Figura 119: Teste de Integração</h6> 

<img src="../imagens/teste11.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 120: Teste de Integração</h6> 

<img src="../imagens/teste12.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 121: Teste de Integração</h6> 

<img src="../imagens/teste13.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

### SelectLessonsSevice.test

```javascript
import { fetchLessons } from './dashboardService';

describe('fetchLessons function', () => {
    beforeEach(() => {
        global.fetch = jest.fn(); // Mock do fetch global
    });

    afterEach(() => {
        jest.resetAllMocks(); // Limpa todos os mocks depois de cada teste
    });

    test('fetches lessons successfully', async () => {
        const lessonsData = [{ id: 1, name: 'Lesson 1' }, { id: 2, name: 'Lesson 2' }];
        const mockResponse = { json: jest.fn().mockResolvedValueOnce(lessonsData) };
        global.fetch.mockResolvedValueOnce(mockResponse);

        const lessons = await fetchLessons();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/all-lessons`);
        expect(lessons).toEqual(lessonsData);
    });

    test('handles fetch error', async () => {
        const errorMessage = 'Failed to fetch lessons';
        const mockResponse = { json: jest.fn().mockRejectedValueOnce(new Error(errorMessage)) };
        global.fetch.mockResolvedValueOnce(mockResponse);

        try {
            await fetchLessons();
        } catch (error) {
            expect(error.message).toBe(errorMessage);
        }

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/all-lessons`);
    });
});
```

### 20. Busca de Aulas com Sucesso

- **Pré-condição:**
  A função `fetchLessons` deve estar pronta para ser testada, com a simulação de resposta da API configurada usando `jest.fn()`.

- **Procedimento de Teste:**
  1. Defina um mock para os dados de retorno esperados da API.
  2. Chame `fetchLessons` para iniciar a busca de aulas.
  3. Verifique se a função `fetch` global foi chamada exatamente uma vez e com a URL correta.
  4. Verifique se os dados retornados pela função correspondem aos dados mockados.

- **Pós-condição:**
  A função deve retornar os dados corretos das aulas como esperado.

- **Resultados Esperados:**
  A função `fetch` é chamada uma vez com a URL correta, e os dados retornados correspondem aos dados mockados.

- **Resultados Obtidos:**
  A função falhou e não apresentou os dados.

### 21. Tratamento de Erro na Busca de Aulas

- **Pré-condição:**
  A função `fetchLessons` deve tratar erros de rede ou falhas na solicitação da API.

- **Procedimento de Teste:**
  1. Simule uma falha na solicitação da API usando `mockRejectedValueOnce` com uma mensagem de erro específica.
  2. Chame `fetchLessons` para iniciar a busca de aulas.
  3. Verifique se a função `fetch` global foi chamada com a URL correta.
  4. Capture e verifique o erro lançado pela função devido à falha na solicitação.

- **Pós-condição:**
  A função deve lançar um erro indicando que a solicitação da API falhou.

- **Resultados Esperados:**
  A função `fetch` é chamada com a URL correta, e um erro é lançado devido à falha na solicitação.

- **Resultados Obtidos:**
  A função lançou um erro conforme esperado ao falhar a solicitação da API.

<h6 align="center"> Figura 122: Teste de Integração</h6> 

<img src="../imagens/teste14.jpg">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp;  Concluir os testes de integração e unidade com sucesso demonstra a robustez e confiabilidade de uma aplicação, garantindo que cada componente funcione corretamente tanto isoladamente quanto em conjunto. Essa abordagem sistemática não apenas identifica e resolve falhas precocemente no ciclo de desenvolvimento, mas também contribui para a manutenção e escalabilidade futuras do sistema. Ao assegurar que todos os elementos do software se integrem harmoniosamente, os desenvolvedores podem entregar um produto final mais estável e de alta qualidade, reduzindo o risco de problemas inesperados pós-lançamento e melhorando a experiência do usuário final.

## 8.3 Testes automatizados

&emsp;&emsp; Testes automatizados são essenciais no ciclo de desenvolvimento de software, permitindo que equipes verifiquem a qualidade e o desempenho das aplicações de maneira eficiente. Essa prática consiste em utilizar softwares específicos para validar o funcionamento das funcionalidades de maneira consistente, o que é fundamental para identificar defeitos e evitar regressões no código. A importância desses testes é amplamente reconhecida, pois além de otimizar o tempo dos testadores, contribuem para a construção de um produto mais estável e confiável [13].

&emsp;&emsp; Os testes automatizados deste projeto estão sistematicamente organizados no repositório, localizados no caminho `/src/backend/src/tests`. Para facilitar a execução coletiva, entre na pasta `/src/backend/src/` pelo terminal e todos os testes podem ser rodados simultaneamente através do comando `npm test`, certificando que o `jest` já esteja instalado, com o comando `npm install --save-dev jest`. A documentação detalhada de cada caso de teste está disponível nesta mesma pasta, proporcionando clareza e acessibilidade às informações necessárias para sua compreensão e eventual replicação.

## 8.4 Simulação de Carga

&emsp;&emsp;A simulação de carga é um componente crítico no ciclo de desenvolvimento de software, destinada a avaliar a capacidade de um aplicativo para suportar um número específico de usuários simultâneos, sem comprometer sua performance. Esta técnica é essencial para identificar gargalos e pontos de falha no sistema, assegurando sua robustez e estabilidade mesmo sob condições extremas de uso. A realização de testes de carga é fundamental para prevenir problemas de desempenho que podem afetar negativamente a experiência do usuário e a credibilidade do produto.

&emsp;&emsp;Durante nossa simulação de carga, optamos pela ferramenta Artillery, devido à sua capacidade de gerar um grande volume de requisições simultâneas, o que permite uma avaliação eficaz da capacidade do sistema em manter a estabilidade e o desempenho sob pressão. Este processo envolve a criação de cenários de teste que imitam o uso real do aplicativo, permitindo uma análise detalhada de como o sistema se comporta sob diferentes níveis de demanda.

&emsp;&emsp;Para executar os testes de carga, deve-se acessar o diretório `/src/backend/src/tests/load_tests` através do terminal. O comando `npm run nome_do_arquivo_de_teste` é utilizado para iniciar a simulação específica, após a instalação da ferramenta Artillery com o comando `npm install --save-dev artillery`. Importante ressaltar que a preparação do ambiente de teste é crucial para resultados confiáveis, envolvendo a configuração correta dos parâmetros de simulação conforme as necessidades do sistema.

&emsp;&emsp;A documentação associada a cada cenário de teste de carga encontra-se no mesmo diretório, oferecendo uma visão abrangente das condições simuladas, dos parâmetros utilizados no teste e dos resultados esperados. Essa documentação detalhada é vital para a análise correta dos resultados, permitindo que desenvolvedores e analistas compreendam as implicações de cada teste e façam ajustes apropriados no código para melhorar a performance e a estabilidade do sistema.

&emsp;&emsp;Além disso, é importante que a documentação inclua recomendações baseadas nos resultados dos testes, como otimizações de código, melhorias na infraestrutura ou na configuração do sistema, para garantir que o aplicativo possa lidar eficientemente com altas cargas de trabalho. A colaboração e o compartilhamento de conhecimentos entre as equipes de desenvolvimento e operações também são fundamentais para aprimorar continuamente a capacidade do sistema de atender às demandas dos usuários finais.


## 8.5 Testes de Usabilidade

&emsp;&emsp;Teste de usabilidade é uma técnica utilizada no design centrado no usuário para avaliar um produto ou serviço interagindo com ele. Neste processo, os usuários reais são observados utilizando o produto para realizar tarefas específicas em condições controladas. O principal objetivo é identificar quaisquer pontos de dificuldade ou problemas de usabilidade que os usuários possam encontrar, bem como entender a experiência do usuário (UX) de uma perspectiva prática. Os testes de usabilidade foram conduzidos para avaliar a plataforma FLY para a Gerando Falcões com foco em eficiência, satisfação do usuário, acessibilidade e intuitividade.

### 8.5.1 Roteiro dos Testes

&emsp;&emsp;O teste de usabilidade é uma ferramenta essencial para garantir a consistência e a qualidade de produtos digitais. Ele permite obter feedback direto dos usuários finais, possibilitando melhorias contínuas e direcionadas. Nesse contexto, entender como estruturar e aplicar testes de usabilidade é fundamental para criar interfaces mais eficazes e agradáveis. Baseado nisso, foram definidos os seguintes testes para esse projeto:

#### Objetivos

&emsp;&emsp;O propósito principal dos testes de usabilidade é avaliar a interação dos usuários com a plataforma de gestão de atendimentos das ONGs, especificamente no que tange à usabilidade, eficiência e satisfação do usuário no desempenho de tarefas cruciais. Buscamos entender como os usuários reais navegam e utilizam a plataforma, identificando pontos de atrito, confusão ou erro que possam impedir a execução eficaz de tarefas ou prejudicar a experiência geral do usuário. Objetivos específicos incluem:

**Facilidade de Uso:** Determinar se os usuários podem realizar tarefas fundamentais, como cadastrar novos atendimentos, com pouco ou nenhum auxílio prévio.

**Intuitividade da Interface:** Avaliar se a navegação, os controles e o layout da plataforma são intuitivos e alinhados com as expectativas dos usuários.

**Eficiência do Processo:** Medir a rapidez com que os usuários conseguem completar uma série de tarefas padrão, fornecendo uma base para avaliar a eficiência da plataforma.

**Precisão e Erros:** Contabilizar a quantidade e a natureza dos erros cometidos pelos usuários, visando identificar áreas que necessitam de melhoria na interface ou no fluxo de interações.

**Satisfação do Usuário:** Coletar feedback subjetivo sobre a experiência do usuário para complementar as métricas de desempenho objetivo.

#### Metodologia

&emsp;&emsp;A metodologia adotada para os testes de usabilidade foi cuidadosamente planejada para garantir a coleta de dados detalhados sobre a interação dos usuários com a plataforma. O grupo de trabalho consiste em cinco membros com funções bem definidas para conduzir os testes de maneira eficiente e imparcial.

**Estrutura da Equipe de Teste**

&emsp;&emsp;1. Instrutores: Dois membros da equipe serão responsáveis por comunicarem as tarefas de teste aos participantes, garantindo que compreendam claramente o que é esperado deles.

&emsp;&emsp;2. Documentadores: Dois membros da equipe serão encarregados de documentar minuciosamente as ações dos usuários, suas reações e quaisquer problemas encontrados durante os testes. Eles farão isso de maneira silenciosa, para não influenciar os participantes.

&emsp;&emsp;3. Operadores: Um membro atuará como operador, executando as ações na plataforma conforme instruído pelos participantes remotos, para assegurar que a experiência do usuário seja capturada fielmente.

**Processo de Teste**

&emsp;&emsp;Para Participantes Presenciais: Aqueles que estiverem presentes fisicamente no local, receberão um computador onde poderão navegar pela plataforma livremente, realizando as tarefas conforme instruídas, enquanto os documentadores registram suas interações.

&emsp;&emsp;Para Participantes Remotos: Os usuários que participarem remotamente terão sua tela compartilhada e proporcionarão comandos verbais aos operadores, que executarão as ações na plataforma. Isso permite que a equipe entenda como os usuários esperam que a plataforma responda, sem a influência direta de suas próprias interações físicas.

**Diversidade de Perfis**

&emsp;&emsp;Diversos perfis de líderes de ONGs serão trazidos para participar dos testes, incluindo aqueles com diferentes níveis de expertise tecnológica. Isso garantirá que a plataforma seja acessível e funcional para todos os usuários potenciais.

#### Perfis dos Participantes

**Perfil 1:** Usuários jovens, com idade entre 18 e 24 anos, estudantes universitários, familiarizados com tecnologia, mas sem experiência prévia com a plataforma.

**Perfil 2:** Usuários de meia-idade, com idade entre 35 e 50 anos, profissionais da área social, com alguma experiência em tecnologia e sem experiência prévia com a plataforma.

**Perfil 3:** Usuários seniores, com idade acima de 60 anos, voluntários em ONGs, com experiência limitada em tecnologia e nenhuma experiência com a plataforma.

#### Cenários de Teste

**Cenário 1:** Acessar oficinas.

Tarefa 1: Acessar a plataforma com o login.

Tarefa 2: Selecionar uma oficina desejada.

Tarefa 3: Interagir com o dashboard com os dados da oficina e entender as métricas apresentadas.

Tarefa 4: Rolar a tela e selecionar a turma desejada.


**Cenário 2:** Acesso de aulas.

Tarefa 1: Selecionar a aula desejada na tela de aulas.

Tarefa 2: Visualizar as informações das aulas.

Tarefa 3: Responder os checkbox para marcar a presença dos alunos.

Tarefa 4: Clicar em “Salvar” para enviar a lista de presença dos alunos.


**Cenário 3:** Visualização e adição de professores.

Tarefa 1: Acessar a aba professores.

Tarefa 2: Utilizar a barra de pesquisa para encontrar um professor específico.

Tarefa 3: Selecionar “Adicionar professor”.

Tarefa 4: Selecionar os professores desejados e adicionar a oficina.


**Cenário 4:** Visualização e adição de alunos.

Tarefa 1: Acessar a aba alunos.

Tarefa 2: Utilizar a barra de pesquisa para encontrar um aluno específico.

Tarefa 3: Selecionar “Adicionar aluno”.

Tarefa 4: Selecionar os alunos desejados e adicionar a oficina.

#### Critérios de Avaliação

- Eficiência: avaliação do tempo e esforço necessários para concluir as tarefas.

- Satisfação do usuário: avaliação da experiência geral do usuário ao utilizar o sistema.

- Acessibilidade: avaliação da capacidade do sistema em ser utilizado por diferentes usuários.

- Intuitividade: avaliação da facilidade em compreender e usar o sistema de forma intuitiva.

- Consistência: avaliação da uniformidade e coerência das interfaces e interações do sistema.

- Feedback e ajuda: avaliação da disponibilidade de feedback e suporte durante o uso do sistema.

### 8.5.2 Descrição e resultados

&emsp;&emsp; Nesta seção, detalharemos os resultados observados dos testes de usabilidade e as percepções coletadas dos participantes. Além disso, discutiremos as melhorias identificadas a partir desses resultados, delineando recomendações práticas para aprimorar a plataforma. Essas descobertas são cruciais não apenas para resolver questões imediatas de usabilidade, mas também para guiar o desenvolvimento futuro da plataforma, assegurando que ela permaneça alinhada com as necessidades e expectativas de seus usuários.

#### Perfil dos testadores

&emsp;&emsp; Na tabela abaixo, podemos observar o perfil dos usuários que testaram a aplicação FLY.

<h6 align="center"> Tabela 4: Perfil dos usuários de teste </h6>

| ID Perfil do Testador | Nome | Idade | Profissão | Nível de letramento digital |
|-----------------------|------|-------|-----------|-----------------------------|
| PT01 | Pedro Henrique | 23 | Analista de dados | Avançado |
| PT02 | Reginaldo | 63 | Professor de engenharia de software | Médio Alto |
| PT03 | Meire | 44 | Desenvolvedora | Avançado |
| PT04 | Gustavo | 33 | Assistente educacional em Ongs | Avançado |
| PT05 | Marcelo | 19 | Estudante | Médio Alto |
| PT06 | Eduardo | 20 | Estudante | Alto |
| PT07 | Kauã | 18 | Estudante | Medio Alto |
| PT08 | Ueliton | 25 | Líder de Ong | Alto |

<h6 align="center"> Fonte: Elaborado por grupo Fly </h6>

#### Resultados dos testes

&emsp;&emsp; Na tabela abaixo, podemos observar os resultados obtidos em cada um dos cenários pelos usuários que testaram a aplicação FLY. Os reultdos foram classificados em: Não concluído, Concluído com dificuldade e Concluído com facilidade.

<h6 align="center"> Tabela x: Resultados dos testes por usuário </h6>

| Nome           | Cenário 1               | Cenário 2               | Cenário 3               | Cenário 4               |
|----------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Pedro Henrique | Concluído com facilidade | Concluído com facilidade | Concluído com facilidade | Concluído com facilidade |
| Reginaldo      | Concluído com facilidade | Concluído com dificuldade | Concluído com dificuldade | Não concluído |
| Meire          | Concluído com facilidade | Concluído com dificuldade | Não concluído | Concluído com dificuldade |
| Gustavo        | Concluído com facilidade | Concluído com facilidade | Concluído com dificuldade | Concluído com facilidade |
| Marcelo        | Concluído com facilidade | Concluído com facilidade | Concluído com dificuldade | Concluído com facilidade |
| Eduardo        | Concluído com facilidade | Concluído com dificuldade | Concluído com facilidade | Concluído com facilidade |
| Kauã           | Concluído com facilidade | Concluído com facilidade | Concluído com facilidade | Concluído com facilidade |
| Ueliton        | Concluído com facilidade | Concluído com facilidade | Concluído com dificuldade | Concluído com facilidade |

<h6 align="center"> Fonte: Elaborado por grupo Fly </h6>

#### Classificação dos Critérios de Avaliação

&emsp;&emsp; Na tabela abaixo, podemos observar as classificações de 1 (ruim) a 5 (ótimo) de cada um dos usuários que testaram a aplicação FLY.

<h6 align="center"> Tabela x: Classificação dos Critérios de Avaliação por usuário </h6>

| Nome           | Eficiência | Satisfação do usuário | Acessibilidade | Intuitividade | Consistência | Feedback e ajuda |
|----------------|------------|-----------------------|----------------|---------------|--------------|------------------|
| Pedro Henrique | 5          | 5                     | 4              | 5             | 5            | 4                |
| Reginaldo      | 4.5        | 4.5                   | 4              | 4             | 4            | 4.5              |
| Meire          | 4          | 5                     | 5              | 4             | 5            | 5                |
| Gustavo        | 5          | 5                     | 5              | 4             | 4            | 5                |
| Marcelo        | 5          | 5                     | 4              | 5             | 5            | 4                |
| Eduardo        | 4          | 5                     | 5              | 4             | 5            | 5                |
| Kauã           | 5          | 5                     | 4              | 5             | 5            | 4                |
| Ueliton        | 5          | 5                     | 5              | 4             | 5            | 5                |

<h6 align="center"> Fonte: Elaborado por grupo Fly </h6>

#### Conclusão

&emsp;&emsp;De uma forma geral, os usuários tiveram uma boa experiência dentro da plataforma, conseguiram seguir o fluxo esperado com tranquilidade e satisfação. A maioria dos participantes demonstrou pouca ou nenhuma dificuldade em navegar pelos diferentes cenários de testes, o que sugere uma alta intuitividade e eficácia do design da interface. As tarefas foram completadas com eficiência, e os usuários expressaram uma percepção positiva da experiência geral, refletida em avaliações altas de satisfação e eficiência.

&emsp;&emsp;Em termos de facilidade de uso, os participantes elogiaram a clareza e a simplicidade da interface, apontando a navegação intuitiva como um ponto forte da plataforma. A maioria não encontrou impedimentos em seu caminho, completando as tarefas com fluidez e demonstrando uma ótima adaptação ao ambiente digital da plataforma. Isso foi corroborado até por usuários de idade mais avançada, que  conseguiram acessar e interagir com as funcionalidades oferecidas sem problemas, destacando a plataforma como bem contextualizada e intuitiva.

#### Feedbacks e implementações

&emsp;&emsp;Os feedbacks coletados foram majoritariamente positivos, com elogios concentrados no design e na usabilidade. No entanto, os usuários também identificaram áreas com potencial para refinamento e sugeriram melhorias específicas, tais como:

- **Maior Contraste nos Elementos Interativos:** Os usuários sugeriram o aumento de contraste ao passar o mouse sobre botões e links para melhorar a visibilidade e a orientação durante a navegação.

- **Feedbacks e Mensagens de Ajuda Ampliadas:** A implementação de mais mensagens explicativas e de suporte, especialmente em funcionalidades complexas, para facilitar ainda mais o uso da plataforma.

- **Ajustes na Visualização do Dashboard:** Foi recomendado revisar a disposição do dashboard para evitar confusões, especialmente por parecer que as informações sao interativas, e não estáticas. Além disso, foi recomendado mudar o título dessas informações, a fim de deixar mais claro sobre o que se tratam.

- **Clarificação dos Professores e Alunos:** Os participantes indicaram a necessidade de tornar mais explícita a distinção entre professores e alunos associados a turmas específicas ou à organização como um todo.

- **Detalhamento das Aulas:** Há uma demanda por informações mais claras sobre as datas das aulas e descrições detalhadas, visando facilitar o planejamento e a compreensão dos conteúdos programáticos.

- **Funcionalidade de Edição de Aula:** A possibilidade de editar informações das aulas após sua criação foi destacada como uma adição valiosa, proporcionando flexibilidade na gestão do cronograma educacional.


&emsp;&emsp;Em suma, a experiência de navegação na plataforma foi amplamente positiva, com usuários reportando altos níveis de satisfação e eficiência. As sugestões de melhorias apontam para ajustes refinados, em vez de revisões extensas, indicando que a plataforma está bem encaminhada para atender às necessidades de seus usuários de forma eficaz. A implementação das recomendações identificadas durante os testes de usabilidade promete não apenas aprimorar a acessibilidade e a intuitividade da plataforma, mas também enriquecer a experiência do usuário, fortalecendo a plataforma como uma ferramenta eficaz e intuitiva para a gestão de atividades educacionais em ONGs.

## 8.6 Testes de Requisitos Não Funcionais

&emsp;&emsp; Os Testes de Requisitos Não Funcionais (RNF) são uma parte crucial do processo de desenvolvimento de software, focando na avaliação de aspectos que não estão diretamente relacionados às funcionalidades específicas do sistema, mas que são essenciais para garantir sua qualidade, eficiência e satisfação do usuário. Esses testes abordam características como usabilidade, confiabilidade, desempenho, segurança, entre outros, e sua realização é vital para identificar e corrigir problemas precocemente no ciclo de vida do desenvolvimento, garantindo a solidez e a estabilidade da plataforma desde o início. A seguir, é possível observar alguns testes referentes aos requisitos não funcionais (RNF) citados na seção [4.2](#42-requisitos-não-funcionais) 

<h6 align="center"> Tabela 5: Testes de Requisitos Não Funcionais  </h6>

| ID | Requisito Não Funcional | Descrição de Teste | Critérios de Aceitação |
|----|-------------------------|--------------------|------------------------|
| RNF01 | Controle de Acesso Baseado em Papéis (RBAC) | **Pré-condição:** Usuários autenticados e com cadastro. <br>**Procedimento de Teste:** Acessar a plataforma em sua respectiva área conforme seu papel específico: líder da ONG, professor ou membro da equipe da Gerando Falcões. <br>**Resultado Esperado:** Login na plataforma com sucesso. <br>**Pós-condição:** Usuários conseguem navegar tranquilamente na plataforma conforme a permissão do seu login. |A plataforma restringe e permite acesso às funcionalidades baseando-se nos papéis dos usuários conforme as políticas de RBAC.|
| RNF02 | Dashboards Interativos |**Pré-condição:** Usuário logado com permissões adequadas para visualizar dashboards interativos. <br>**Procedimento de Teste:** Usuário seleciona diferentes filtros e opções de visualização de dados no dashboard interativo. <br>**Resultado Esperado:** O dashboard exibe os dados corretos com base nos filtros aplicados. <br>**Pós-condição:** O dashboard mostra um conjunto de dados atualizado que corresponde exatamente aos critérios de filtro aplicados pelo usuário. |Os dados no dashboard devem ser precisos e refletir em tempo real as alterações feitas, sem erros técnicos ou atrasos no processamento.|
| RNF03 |  Interface de Usuário Simplificada e Intuitiva |**Pré-condição:** Usuário com baixo letramento digital logado na plataforma. <br>**Procedimento de Teste:** Usuário tenta realizar uma tarefa básica na plataforma, como cadastrar um novo participante em uma oficina. <br>**Resultado Esperado:** O usuário consegue completar a tarefa sem dificuldades, seguindo instruções claras e diretas fornecidas pela interface. <br>**Pós-condição:** O novo participante é cadastrado no sistema. | A tarefa é completada com sucesso pelo usuário sem erros, confusões ou necessidade de ajuda adicional, demonstrando a eficácia da interface simplificada e intuitiva.|
| RNF04 | Sistema de Gerenciamento de Aulas |**Pré-condição:** Usuário logado com perfil de líder da oficina/ONG com permissões para gerenciar aulas.<br>**Procedimento de Teste:** Usuário cria uma nova aula, define o horário e aloca um professor. <br>**Resultado Esperado:** A aula é criada e agendada com sucesso em determinada oficina. <br>**Pós-condição:** A nova aula aparece no calendário de aulas da plataforma, com todas as informações corretamente atribuídas e acessíveis.| O sistema de gerenciamento de aulas demonstra ser intuitivo e flexível, permitindo a organização eficaz das aulas sem erros, confusões ou necessidade de suporte técnico adicional.|
| RNF05 | Estabilidade e Precisão no Gerenciamento de Dados |**Pré-condição:** Dados previamente inseridos na plataforma, incluindo detalhes das aulas, informações dos professores e registros de progresso dos alunos. <br>**Procedimento de Teste:** Realizar uma série de operações de atualização, exclusão e consulta aos dados no sistema para verificar a estabilidade e precisão. <br>**Resultado Esperado:** Todas as operações de dados são executadas sem erros, os dados atualizados refletem as mudanças corretamente, nenhuma perda de dados ocorre durante o processo, e as consultas retornam informações precisas e atuais. <br>**Pós-condição:** O sistema mantém a integridade e a precisão dos dados após múltiplas operações, demonstrando a estabilidade do ambiente de gerenciamento de dados.| A plataforma demonstra alta confiabilidade no gerenciamento e armazenamento de dados, com zero perda de informação e precisão nos detalhes das aulas, informações dos professores e progresso dos alunos.|

<h6 align="center"> Fonte: Elaborado por grupo Fly </h6>

&emsp;&emsp; A execução cuidadosa dos testes de requisitos não funcionais desempenha um papel significativo na construção de uma base sólida para o projeto. Ao validar aspectos como segurança, usabilidade e confiabilidade desde as fases iniciais, é possível melhorar a qualidade geral do produto. Esses testes contribuem para a entrega de uma plataforma que não só cumpre com suas funcionalidades prometidas, mas também excede as expectativas dos utentes em termos de desempenho e facilidade de uso, fortalecendo a confiança e a satisfação do usuário final.

# 9. Procedimento de Implantação da Solução

&emsp;&emsp; O procedimento de implantação da solução é uma etapa crítica no ciclo de vida do desenvolvimento de software, onde o projeto é transformado em um sistema funcional e pronto para uso. Nesta seção, abordaremos os procedimentos específicos para implantar tanto o sistema em si quanto o banco de dados associado.

## 9.1 Procedimento de Implantação do Sistema

&emsp;&emsp; Para implementar o sistema, elaboramos um manual de implantação com as orientações necessárias. Esse documento fornece instruções detalhadas sobre como instalar e configurar o projeto de software. Ele é essencial para garantir que o processo de implantação seja realizado de forma correta e eficiente, seguindo um conjunto de etapas pré-definidas.

&emsp;&emsp; O passo a passo para implantar o projeto pode ser encontrado no [manual de implantação](manual-implantacao.pdf), localizado na pasta "documentos" do projeto. Este manual inclui todas as informações necessárias para configurar o ambiente de desenvolvimento, instalar dependências, configurar integrações com serviços externos (se aplicável), e iniciar o projeto para uso.

&emsp;&emsp; Ao seguir as instruções detalhadas no manual de implantação, os desenvolvedores e administradores podem garantir que o projeto seja implantado de maneira consistente e sem erros, contribuindo para uma experiência mais suave para os usuários finais e facilitando a manutenção futura do sistema.

## 9.2 Procedimento de Implantação do Banco de Dados

&emsp;&emsp; Nesta seção descrevemos o fluxo de Criação do Banco de Dados na RDS (Amazon Relational Database Service)

#### 1. Criação do DB na RDS

A primeira etapa envolve a criação do banco de dados na Amazon RDS. Isso é feito através da console da AWS, onde você configura as opções como tipo de banco de dados, tamanho da instância, configurações de segurança, entre outros. Abaixo está um print do console AWS com o banco de dados em execução:

<h6 align="center"> Figura 123: Banco de dados RDS na AWS</h6>

<img src="../imagens/rds_execucao.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Esta imagem é crucial para visualizar o estado inicial do seu banco de dados na RDS, incluindo informações sobre a instância, como endpoint, tipo de instância, e status de execução.

#### 2. Conexão da Instância Backend ao DB na RDS

Após a criação do banco de dados na RDS, o próximo passo é conectar a instância backend a esse banco de dados. Isso geralmente envolve configurações de conexão SSH e definição das credenciais de acesso ao banco de dados. Abaixo estão os prints relevantes:
  
<h6 align="center"> Figura 124: Instância backend conectada ao banco de dados na RDS</h6>

<img src="../imagens/conexao_ec2.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

- Print dos dados da instância backend (que serão utilizados no código abaixo).

<h6 align="center"> Figura 125: Dados da instância backend</h6>

<img src="../imagens/info_backend.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 126: Informações do banco de dados na RDS</h6>

<img src="../imagens/info_rds.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

Essas imagens são importantes para mostrar a integração bem-sucedida entre a instância backend e o banco de dados na RDS, incluindo informações como endpoint, portas de conexão, e status de conexão.

#### 3. Código de Conexão Backend - RDS

Abaixo está o código que define a conexão SSH e a conexão com o banco de dados na RDS:

```javascript
const sshConfig = {
    host: '3.93.200.113',
    port: 22,
    username: 'ubuntu',
    password: '12345678',
    privateKey: fs.readFileSync('fly_backend.pem')
};

const dbConfig = {
    host: 'db-fly.crw2uo0iwho1.us-east-1.rds.amazonaws.com',
    user: 'fly_user',
    password: '12345678',
    database: 'fly_database',
    port: 3306,
    localPort: 3333
};
```

Este código é essencial para estabelecer a conexão segura entre o backend e o banco de dados na RDS, garantindo a transmissão segura de dados e consultas eficientes ao banco de dados.

#### 4. Processo de criação das tabelas no Workbench

Para criar as tabelas no Workbench, foi necessário seguir um processo específico. Primeiramente, as tabelas foram criadas sem as Foreign Keys estabelecidas. Em seguida, a checkagem de foreign keys foi desativada e as Foreign Keys foram adicionadas às tabelas. Por fim, a checkagem foi ativada novamente. O código utilizado neste processo é o seguinte:

```sql
    CREATE TABLE oficinas (
    id_oficina INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_oficina_da_ong INT,
    nome_oficina VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
);


CREATE TABLE oficina_ong (
    id_oficina_da_ong INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_ong INT NOT NULL,
    fk_id_oficina INT NOT NULL
);

CREATE TABLE turmas (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_matricula INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    fk_id_oficina INT
);


CREATE TABLE alunos (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_matricula INT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(100),
    data_nascimento DATE NOT NULL,
    cpf VARCHAR(100),
    genero VARCHAR(100) NOT NULL,
    etnia VARCHAR(100) NOT NULL,
    endereco VARCHAR(100),
    estado_civil VARCHAR(100),
    status BOOLEAN NOT NULL

);

CREATE TABLE matricula (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_aluno INT NOT NULL,
    fk_id_turma INT NOT NULL

);

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100),
    permissoes VARCHAR(100)
);

CREATE TABLE ong (
    id_ong INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_oficina_da_ong INT,
    nome VARCHAR(100),
    email VARCHAR(100),
    responsavel VARCHAR(100),
    telefone VARCHAR(20),
    cnpj VARCHAR(20),
    endereco VARCHAR(100)
);


CREATE TABLE lider (
    id_lider INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_ong INT,
    nome VARCHAR(100),
    email VARCHAR(100),
    data_nascimento DATE,
    telefone VARCHAR(11),
    cpf VARCHAR(11),
    genero ENUM('Masculino', 'Feminino', 'Outro', 'Prefiro não informar'),
    etnia ENUM('Pardo', 'Branco', 'Preto', 'Amarelo', 'Indígena', 'Prefiro não informar'),
    endereco VARCHAR(100)
);

CREATE TABLE professores (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_professor_por_aula INT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    telefone INT NOT NULL,
    cpf VARCHAR(20) NOT NULL,
    genero ENUM('Masculino', 'Feminino', 'Outro', 'Prefiro não informar') NOT NULL,
    etnia ENUM('Pardo', 'Branco', 'Preto', 'Amarelo', 'Indígena', 'Prefiro não informar') NOT NULL,
    endereco VARCHAR(100)

);

CREATE TABLE professor_por_aula (
    id_professor_por_aula INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_aula INT,
    fk_id_professor INT

);


CREATE TABLE aulas (
    id_aula INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    data DATE,
    dias_semana VARCHAR(50),
    fk_id_presenca INT,
    fk_id_turma INT
);

CREATE TABLE lista_de_presenca (
    id_presenca INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_aluno INT,
    fk_id_aula INT

);

SET FOREIGN_KEY_CHECKS=01;

ALTER TABLE oficinas ADD CONSTRAINT fk_id_oficina_da_ong_oficinas FOREIGN KEY (fk_id_oficina_da_ong) REFERENCES oficina_ong(id_oficina_da_ong);

ALTER TABLE oficina_ong ADD CONSTRAINT fk_id_ong_oficina_ong FOREIGN KEY (fk_id_ong) REFERENCES ong(id_ong);
ALTER TABLE oficina_ong ADD CONSTRAINT fk_id_oficina_oficina_ong FOREIGN KEY (fk_id_oficina) REFERENCES oficinas(id_oficina);

ALTER TABLE turmas ADD CONSTRAINT fk_id_matricula_turmas FOREIGN KEY (fk_id_matricula) REFERENCES matricula(id_matricula);

ALTER TABLE alunos ADD CONSTRAINT fk_id_matricula_alunos FOREIGN KEY (fk_id_matricula) REFERENCES matricula(id_matricula);

ALTER TABLE matricula ADD CONSTRAINT fk_id_aluno_matricula FOREIGN KEY (fk_id_aluno) REFERENCES alunos(id_aluno);
ALTER TABLE matricula ADD CONSTRAINT fk_id_turma_matricula FOREIGN KEY (fk_id_turma) REFERENCES turmas(id_turma);

ALTER TABLE ong ADD CONSTRAINT fk_id_oficina_da_ong_ong FOREIGN KEY (fk_id_oficina_da_ong) REFERENCES oficina_ong(id_oficina_da_ong);

ALTER TABLE lider ADD CONSTRAINT fk_id_ong_lider FOREIGN KEY (fk_id_ong) REFERENCES ong(id_ong);

ALTER TABLE professores ADD CONSTRAINT fk_id_professor_por_aula_professores FOREIGN KEY (fk_id_professor_por_aula) REFERENCES professor_por_aula(id_professor_por_aula);

ALTER TABLE aulas ADD CONSTRAINT fk_turma_aulas FOREIGN KEY (fk_id_turma) REFERENCES turma(id_turma);

ALTER TABLE professor_por_aula ADD CONSTRAINT fk_id_aula_professor_por_aula FOREIGN KEY (fk_id_aula) REFERENCES aulas(id_aula);
ALTER TABLE professor_por_aula ADD CONSTRAINT fk_id_professor_professor_por_aula FOREIGN KEY (fk_id_professor) REFERENCES professores(id_professor);

ALTER TABLE lista_de_presenca ADD CONSTRAINT fk_id_aluno_lista_de_presenca FOREIGN KEY (fk_id_aluno) REFERENCES alunos(id_aluno);
ALTER TABLE lista_de_presenca ADD CONSTRAINT fk_id_aula_lista_de_presenca FOREIGN KEY (fk_id_aula) REFERENCES aulas(id_aula);


-- Tabela oficinas
INSERT INTO oficinas (fk_id_oficina_da_ong, nome_oficina, categoria) VALUES
(1, 'Balé', 'Dança'),
(2, 'Futebol', 'Esporte'),
(3, 'Teatro', 'Cultura'),
(4, 'Empreendedorismo Digital', 'Empreendedorismo'),
(5, 'Inglês', 'Cursos');

-- Tabela oficina_ong
INSERT INTO oficina_ong (fk_id_ong, fk_id_oficina) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Tabela turmas
INSERT INTO turmas (fk_id_matricula, nome) VALUES
(1, 'Turma 01'),
(2, 'Turma 02'),
(3, 'Turma 03'),
(4, 'Turma 04'),
(5, 'Turma 05');

-- Tabela alunos
INSERT INTO alunos (fk_id_matricula, nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status) VALUES
(1, 'João Silva', 'joao@example.com', '123456789', '2000-01-15', '123.456.789-10', 'Masculino', 'Branco', 'Rua A, 123', 'Solteiro', 1),
(2, 'Maria Souza', 'maria@example.com', '987654321', '1999-05-20', '987.654.321-00', 'Feminino', 'Pardo', 'Avenida B, 456', 'Casada', 1),
(3, 'Pedro Santos', 'pedro@example.com', '555555555', '2002-10-03', '222.222.222-22', 'Masculino', 'Preto', 'Travessa C, 789', 'Solteiro', 1),
(4, 'Ana Oliveira', 'ana@example.com', '777777777', '2001-03-08', '333.333.333-33', 'Feminino', 'Branco', 'Rua D, 321', 'Solteira', 1),
(5, 'Luiz Pereira', 'luiz@example.com', '999999999', '2003-07-12', '444.444.444-44', 'Masculino', 'Indígena', 'Avenida E, 567', 'Divorciado', 1);


-- Tabela matricula
INSERT INTO matricula (fk_id_aluno, fk_id_turma) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Tabela usuario
INSERT INTO usuario (nome, email, senha, permissoes) VALUES
('admin', 'admin@example.com', 'admin123', 'admin'),
('usuario1', 'usuario1@example.com', 'senha123', 'comum'),
('usuario2', 'usuario2@example.com', 'senha456', 'comum'),
('usuario3', 'usuario3@example.com', 'senha789', 'comum'),
('usuario4', 'usuario4@example.com', 'senhaabc', 'comum');

-- Tabela ong
INSERT INTO ong (fk_id_oficina_da_ong, nome, email, responsavel, telefone, cnpj, endereco) VALUES
(1, 'ONG Artes', 'contato@ongartes.org', 'Ana Silva', '111111111', '12.345.678/0001-01', 'Rua X, 789'),
(2, 'Tech ONG', 'contato@techong.org', 'Carlos Souza', '222222222', '23.456.789/0001-02', 'Avenida Y, 456'),
(3, 'ONG Sabor', 'contato@ongsabor.org', 'Maria Oliveira', '333333333', '34.567.890/0001-03', 'Travessa Z, 123'),
(4, 'Música para Todos', 'contato@musicaparatodos.org', 'Luciana Pereira', '444444444', '45.678.901/0001-04', 'Rua W, 234'),
(5, 'ONG Verde', 'contato@ongverde.org', 'João Santos', '555555555', '56.789.012/0001-05', 'Avenida V, 345');

-- Tabela lider
INSERT INTO lider (fk_id_ong, nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco) VALUES
(1, 'Fernanda Oliveira', 'fernanda@example.com', '1990-02-25', '123456789', '123.456.789-01', 'Feminino', 'Branco', 'Rua Principal, 123'),
(2, 'Rafael Silva', 'rafael@example.com', '1985-07-10', '987654321', '987.654.321-02', 'Masculino', 'Pardo', 'Avenida Central, 456'),
(3, 'Juliana Souza', 'juliana@example.com', '1988-11-15', '555555555', '222.222.222-03', 'Feminino', 'Preto', 'Travessa Secundária, 789'),
(4, 'Daniel Santos', 'daniel@example.com', '1983-05-20', '777777777', '333.333.333-04', 'Masculino', 'Branco', 'Rua do Centro, 321'),
(5, 'Carla Pereira', 'carla@example.com', '1980-09-30', '999999999', '444.444.444-05', 'Feminino', 'Indígena', 'Avenida Lateral, 567');

-- Tabela professores
INSERT INTO professores (fk_id_professor_por_aula, nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco) VALUES
(1, 'Maria Santos', 'maria.santos@example.com', '1980-05-10', '111111111', '111.111.111-11', 'Feminino', 'Branco', 'Rua dos Professores, 123'),
(2, 'José Silva', 'jose.silva@example.com', '1975-08-15', '222222222', '222.222.222-22', 'Masculino', 'Pardo', 'Avenida dos Educadores, 456'),
(3, 'Ana Souza', 'ana.souza@example.com', '1982-11-20', '333333333', '333.333.333-33', 'Feminino', 'Preto', 'Travessa das Aulas, 789'),
(4, 'Pedro Oliveira', 'pedro.oliveira@example.com', '1978-04-25', '444444444', '444.444.444-44', 'Masculino', 'Branco', 'Rua das Salas, 321'),
(5, 'Mariana Ferreira', 'mariana.ferreira@example.com', '1983-10-05', '555555555', '555.555.555-55', 'Feminino', 'Indígena', 'Avenida dos Conhecimentos, 567');

-- Tabela professor_por_aula
INSERT INTO professor_por_aula (fk_id_aula, fk_id_professor) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO aulas (nome, data, dias_semana, fk_id_turma, fk_id_presenca) VALUES
('Dança Contemporânea', '2024-03-15', 'Segunda-feira', 1, 1), -- Presença 1 para Turma 01
('Esporte Coletivo', '2024-03-16', 'Terça-feira', 2, 2), -- Presença 2 para Turma 02
('Cultura Regional', '2024-03-17', 'Quarta-feira', 3, 3), -- Presença 3 para Turma 03
('Empreendedorismo Social', '2024-03-18', 'Quinta-feira', 4, 4), -- Presença 4 para Turma 04
('Cursos Livres', '2024-03-19', 'Sexta-feira', 5, 5); -- Presença 5 para Turma 05

-- Tabela lista_de_presenca
INSERT INTO lista_de_presenca (fk_id_aluno, fk_id_aula) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

SET FOREIGN_KEY_CHECKS=1;
```

Este processo garantiu a correta estruturação das tabelas e a integridade referencial entre elas, essencial para um banco de dados bem organizado e funcional.


#### 5. Estrutura das Tabelas no Workbench

Finalmente, é crucial visualizar a estrutura das tabelas no banco de dados. Abaixo estão os prints do Workbench com consultas em cada tabela:

<h6 align="center"> Figura 127: Print da estrutura da tabela `oficinas`</h6>

<img src="../imagens/oficinas_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 128: Print da estrutura da tabela `oficina_ong`</h6>

<img src="../imagens/oficina_ong_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 129: Print da estrutura da tabela `turmas`</h6>

<img src="../imagens/turmas_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 130:Print da estrutura da tabela `alunos`</h6>

<img src="../imagens/alunos_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 131: Print da estrutura da tabela `matricula`</h6>

<img src="../imagens/matricula_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 132: Print da estrutura da tabela `usuario`</h6>

<img src="../imagens/usuario_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 133: Print da estrutura da tabela `ong`</h6>

<img src="../imagens/ong_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 134: Print da estrutura da tabela `lider`</h6>

<img src="../imagens/lider_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 135: Print da estrutura da tabela `professores`</h6>

<img src="../imagens/oficinas_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 136: Print da estrutura da tabela `professor_por_aula`</h6>

<img src="../imagens/professor_por_aula_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 137: Print da estrutura da tabela `aulas`</h6>

<img src="../imagens/oficinas_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 138: Print da estrutura da tabela `lista_de_presenca`</h6>

<img src="../imagens/lista_de_presenca_query.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; Essas imagens são fundamentais para entender a organização e relacionamentos das tabelas no banco de dados, incluindo chaves primárias, chaves estrangeiras e tipos de dados utilizados.

&emsp;&emsp; Com todo esse processo documentado e visualizado através das imagens, você tem uma visão abrangente da criação e conexão do seu banco de dados na RDS, garantindo um ambiente seguro e estruturado para suas operações.


## 9.3 Documentação Automática do Sistema (Swagger)

&emsp;&emsp; Primeiramente, é válido destacar o conceito e a importância da utilização da ferramenta Swagger para realizar a documentação automática do sistema. Swagger é uma ferramenta de código aberto que permite criar, documentar e testar APIs de forma eficiente. Ele é baseado na especificação OpenAPI e oferece uma variedade de recursos para simplificar o desenvolvimento e a manutenção de APIs RESTful.
 Uma vez definido a API usando o Swagger/OpenAPI, ele gera automaticamente uma documentação interativa. Essa documentação é uma interface visual que detalha todos os recursos da sua API, permitindo que desenvolvedores e usuários entendam como interagir com ela sem a necessidade de ler o código-fonte diretamente.

 &emsp;&emsp; Ao seguir a especificação OpenAPI, o Swagger promove a padronização e a consistência na definição e documentação de APIs. Isso é crucial em projetos com equipes grandes ou distribuídas, onde é importante que todos os membros tenham uma compreensão clara das APIs utilizadas. Além disso, a documentação interativa gerada pelo Swagger também pode ser usada para testar automaticamente os endpoints da API. Isso é útil para garantir que a API esteja funcionando conforme o esperado e que as alterações não quebraram funcionalidades existentes.

 &emsp;&emsp; Para realizar a construção desta documentação, primeiramente foi instalado o Swagger e, então, definido uma rota no arquivo app.js, como mostra a imagem abaixo. Após isso, em cada arquivo da pasta "routes" foi feito a adição do componente swagger que, está integrado a um arquivo pertencente ao backend chamado "swagger.js". Desse modo, para acessar esta documentação, basta acessar por: http://localhost:3333/api-docs

<h6 align="center"> Figura 139: Demonstração Swagger</h6>

<img src="../imagens/Swagger 8.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

&emsp;&emsp; A seguir, a representação da documentação automática do sistema da plataforma Fly:

<h6 align="center"> Figura 140: Demonstração Swagger</h6>

<img src="../imagens/Swagger 1.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 141: Demonstração Swagger</h6>

<img src="../imagens/Swagger 2.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

<h6 align="center"> Figura 142: Demonstração Swagger</h6>

<img src="../imagens/Swagger 3.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

 &emsp;&emsp; Nestas três imagens acima, é exibido a organização e divisão da documentação. No campo "default", há todas as rotas com seus métodos, respectivamente. Neste caso, foi trabalhado com "Leader, Workshop, AttendanceList, Student, Teacher e Ong".

 <h6 align="center"> Figura 143: Demonstração Swagger</h6>

<img src="../imagens/Swagger 4.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

 <h6 align="center"> Figura 144: Demonstração Swagger</h6>

<img src="../imagens/Swagger 5.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

 &emsp;&emsp; Já nesta imagem acima, quando selecionado uma rota, independentemente do método, há uma interação com a plataforma. Neste caso, foi selecionado a rota /teachers no método GET. Essa, então, tem como funcionalidade exibir todos os professores cadastrados no sistema, como mostra a imagem. Ao final da imagem, observa-se o tipo de cada campo que compõe esta tabela, ou seja, booleano, string, entre outros.

<h6 align="center"> Figura 145: Demonstração Swagger</h6>

<img src="../imagens/Swagger 6.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

 &emsp;&emsp; Para campo método, há uma interação diferente com o Swagger. No método POST, ainda na rota de professores, o usuário pode cadastrar um professor novo passando todos os parâmetros definidos na construção do banco de dados e seguindo seus tipos. Além disso, ao final da imagem pode-se visualizar em "Code" números que representam sucesso ou falha na adição de professores.

 <h6 align="center"> Figura 146: Demonstração Swagger</h6>

<img src="../imagens/Swagger 7.png">

<h6 align="center"> Fonte: Elaborado pelo grupo Fly </h6>

 &emsp;&emsp; Por fim, uma vez que um professor, por exemplo, foi adicionado com sucesso, é exibido em "Response Body" o Id deste novo professor juntamente com a mensagem e o número representando que tal ato foi bem sucedido. Isso pode ser feito com todas as demais rotas pois segue um padrão.

# Referências

[1]: Portal do Impacto. "Como a tecnologia pode ajudar as ONGs". Portal do Impacto, 2021. Disponível em: www.portaldoimpacto.com/como-a-tecnologia-pode-ajudar-as-ongs. Acesso em: 15 fev. 2024.

[2]: Funraise. "Sobre o relatório | Relatório Global de Tecnologia de ONGs de 2019". Funraise, 2019. Disponível em: www.funraise.org/techreport-pt. Acesso em: 15 fev. 2024.

[3]: Memori Digital. "Parceria entre empresas: por que investir e como fazer?". Memori Digital, 2021. Disponível em: www.linkedin.com/pulse/parceria-entre-empresas-por-que-investir-memoribr/?originalSubdomain=pt. Acesso em: 15 fev. 2024.

[4]: Business Research Insights. "Tamanho do mercado de ONGs e organizações de caridade [2024 a 2031] Participação, crescimento e análise da indústria". Business Research Insights, 2024. Disponível em: www.businessresearchinsights.com/pt/market-reports/ngos-and-charitable-organizations-market-102744. Acesso em: 15 fev. 2024.

[5]: Portal do Impacto. "Como a tecnologia pode tornar sua ONG mais efetiva". Portal do Impacto, 2021. Disponível em: https://www.portaldoimpacto.com/como-a-tecnologia-pode-tornar-sua-ong-mais-efetiva. Acesso em: 15 fev. 2024.

[6] AMAZON WEB SERVICES. Usando o Amazon VPC. [S.l.], [s.d.]. Disponível em: <2>. Acesso em: 13 fev. 2024.

[7] Elastic Compute Cloud - Amazon EC2 - AWS. Disponível em: <https://aws.amazon.com/pt/ec2/>. Acesso em: 12 fev. 2024.

[8] AWS Academy. 
Disponível em: <https://awsacademy.instructure.com/courses/71789/modules/items/6416354>. Acesso em: 12 fev. 2024.
‌
[9] Computação em nuvem para negócios empresariais – AWS. Disponível em: <https://aws.amazon.com/pt/enterprise/#:~:text=Goldman%20Sachs%2C%20Coca%2DCola%2C>. Acesso em: 12 fev. 2024.

[10] Playstudio. O que é o Canvas de Proposta de Valor e como preenchê-lo? Disponível em: www.playstudio.io/blog/o-que-e-proposta-de-valor-e-como-encontrar#:~:text=Proposta%20de%20valor%20%C3%A9%20o,do%20seu%20produto%20ou%20servi%C3%A7o. Acesso em: 16 fev. 2024.

[11] ANALISTA MODELOS DE NEGÓCIOS. Canvas da Proposta de Valor em PDF. Disponível em: https://analistamodelosdenegocios.com.br/downloads/canvas-da-proposta-de-valor-em-pdf/. Acesso em: 17 fev. 2024.

[12] CASA DO DESENVOLVEDOR. Testes de Integração: Tipos, Importância e Vantagens. Disponível em: https://blog.casadodesenvolvedor.com.br/testes-de-integracao/. Acesso em: 16 mar. 2024.

[13] M. Fowler, "Refactoring: Improving the Design of Existing Code," Addison-Wesley, 1999. [Online]. Disponível em: https://martinfowler.com/books/refactoring.html. Acesso em: 26 mar. 2024.

# Apêndice
