Data Visualization with D3:

.select()
Utilizado para selecionar um elemento de nosso HTML.
Ex: 
const anchor = d3.select("a");

.append()
Acrescenta um nó html ao item selecionado;

.text()
Define o texto do nó selecionado ou traz seu texto atual.

Exemplo com os 3 metodos:
d3.select("ul") – seleciona o primeiro elemento `ul` no documento html
  .append("li") – adiciona um novo element <li> dentro do elemento ul selecionado anteriormente
  .text("Very important item") – define o texto dentro do novo elemento <li>;

.selectAll()
metodo para selecionar um grupo de elementos. Retorna uma array de nós html.
Ex:
const anchors = d3.selectAll("a");

.data()
metodo utilizado para atribuir dados aos elementos selecionados;
a fonte dos dados é utilizada como argumento neste método, dentro dos ();

.enter()
comumente utilizado em conjunto com a função .data() para lidar com a vinculação de dados a elementos do DOM;
é utilizado para acessar um subconjunto da seleção que representa os dados para os quais não há elementos DOM correspondentes. Pode-se dizer que existindos dados disponíveis, o método enter() adiciona novos elementos DOM para representar os dados adicionais;

Vejamos um exemplo que seleciona um "ul" elemento e cria uma lista de itens baseada no número de entradas da array:
Ex: 
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");

Através de .data() e .enter(), pegamos os dados e em conjunto com .append(), somos capazes de criar novos elementos DOM para cada entrada de dado;


-Trabalhando com dados dinâmicos em D3:

.text() aceita uma string (como vimos no exemplo acima) ou uma 'callback function' como argumento.
Ex:
selection.text((d) => d)
Neste exemplo, o parâmetro 'd' se refere a cada entrada na base de dados a qual 'selection' está vinculado.

-Adicionando estilos a elementos:

.style() 
permite adicionar estilos CSS.
Este método exige adicionarmos uma "," entre o estilo que será adicionado e o seu estilo.
Ex:
selection.style("color", "blue");

Também podemos utilizar da callback function para personalizar nossos dados e sua visualização através da inclusão de lógica condicional. 
Ex:
.style("color", (d) => {
    if(d < 20) {
      return ("red")
    } else {
      return ("green")
  }
});

.attr()
método para adicionar qualquer atributo HTML a um elemento;
funciona da mesma forma que o .style() e exige adicionarmos uma "," entre os valores. Também aceita o uso de callback function;
Ex:
selection.attr("class", "container");

-Gráficos de barras:
Através destes comandos já seria possível criar um gráfico de barras simples, atribuindo o 'style' 'height' de forma dinâmica.
Ex:
.style("height", (d) => (d + "px")) 
// aqui (+ "px") serve apenas para que após a numeração, seja incluida a string "px";

-Melhorando a apresentação de nosso gráfico de barras:
Com o exemplo acima, definimos a "height" individual de cada barra de forma dinâmica. Contudo, podemos adicionar outros "style" para melhorar a visualização de nosso gráfico, como por exemplo espaço entre as colunas:
Ex:
      .style("height", (d) => ((d * 10) + "px")) 
      .style("margin", "2px")

Neste exemplo, não estamos só adicionando um espaço entre as barras, estamos também multiplicando os valores de "d" para melhor visualização em nosso gráfico.

-SVG em D3:
SVG = "Scalable Vector Graphics".
"Scalable" - se ajusta ao formato da tela;
É utilizado para criar gráficos geometricos comuns. Cria formas para a visualização e apresentação de dados.
Formatos em SVG, para uma pagina web, são adicionados através da tag html svg;
Devemos também atribuir "width" e "height" ao nosso elemento "svg".
Também é interessante definirmos um background-color diferente daquele de nosso html, possibilitando a visualização de nosso gráfico geométrico;
SVG define elementos gráficos básicos, como <rect>, <circle>, <path>, entre outros que são utilizados para criar gráficos vetoriais escaláveis;
O SVG é um formato de arquivo que define elementos gráficos, e D3.js é uma biblioteca JavaScript que pode ser usada para criar e manipular esses elementos SVG,

Um SVG rect (retângulo) possui 4 atributos. Existem as coordenadas x e y, para onde o mesmo é posicionado em relação a área do svg. Existe também sua 'height' e 'width' para especificar seu tamanho.

Podemos combinar os metodos .data() .enter() e formatos SVG para criar e adicionar retângulos para cada dados de nossa base de dados.
Exemplo:

index.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <title>Gráfico de Barras</title>
</head>
<body>
    <svg width="500" height="150"></svg>
    <script src="script.js"></script>
</body>
</html>

script.js:

const dataset = [10, 20, 30, 40, 50];

const svg = d3.select("svg");

// Criando os retângulos com base nos dados
svg.selectAll("rect") 
   .data(dataset) 
   .enter() 
   .append("rect") 
   .attr("x", function(d, i) { return i * 30; }) 
   .attr("y", function(d) { return 100 - d; }) 
   .attr("width", 25) 
   .attr("height", function(d) { return d; }) 
   .attr("fill", "steelblue"); 

Isto é suficiente para criarmos de forma dinâmica nosso gráfico de barras, com base nas informações constantes de nosso `dataset`;

    const dataset = [10, 20, 30, 40, 50];
   .attr("x", function(d, i) { return i * 30; }) 

No caso acima, retiramos trechos do nosso código apenas para facilitar o entendimento, é importante destacarmos que nossa funcão aceita dois parâmetros (d, i), onde "d" representa o valor do dado na array e "i" representa sua posição na array (índice do dado), levando como base nosso dataset, conforme exemplo acima.
Ou seja, conforme itera sobre nossa dataset, nossa function passa a deter os seguintes valores:
.attr("x", function(d, i) { return i * 30; })
                    10, 0 { return 0 * 30; })

.attr("x", function(d, i) { return i * 30; })
                    20, 1 { return 1 * 30; })

.attr("x", function(d, i) { return i * 30; })
                    30, 2 { return 2 * 30; })

.attr("x", function(d, i) { return i * 30; })
                    40, 3 { return 3 * 30; })

.attr("x", function(d, i) { return i * 30; })
                    50, 4 { return 4 * 30; })                 


É importante observar que você NÃO precisa escrever um loop for ou usar forEach() para iterar sobre os itens no conjunto de dados. Lembre-se de que o método data() analisa o conjunto de dados e qualquer método encadeado após data() é executado uma vez para cada item no conjunto de dados.

Obs: Formatos em SVG e a cor de seu preenchimento:
Em SVG, o formato de um rect pode ter sua cor personalizada através do atributo "fill", conforme utilizamos no exemplo acima;

-Adicionando "labels" a elementos D3:
D3 permite adicionarmos "rótulos" a um elemento gráfico, como em nossas barras, usando o elemento SVG text.
Como o elemento rect, o elemento text precisa ter seus atributos x e y definidos, para serem posicionados no SVG. Também precisa ter acesso aos dados para exibir seus valores.

-Adicionando "hover effect" a um elemento D3:
(quando posicionamos o mouse sobre um elemento gráfico ele muda de cor)
Até o momento estavamos utilizando apenas os métodos D3 e SVG para personalizarmos nossos elementos. Contudo, podemos também utilizar o CSS para adicionar efeitos, como neste caso o "hover effect".
Podemos fazer isso atribuindo a "class" "bar" ao nosso elemento SVG, através do attr() método e personalizar o mesmo em nosso arquivo CSS. Vejamos:

.attr("class", "bar")

styles.css:
.bar:hover {
    fill: brown;
  }

No código acima (onde temos um exemplo completo de código de barras simples, com html e js), podemos implementar essa função facilmente, basta criarmos o arquivo style.css em nossa pasta; criar o link com o arquivo "style.css" em nosso html; adicionar o atributo de classe ao final de nosso arquivo "script.js" (.attr("class", "bar")) (obs: observar e alterar a posição do ";" em nosso "script.js" para evitar erro); adicionar o conteúdo de nosso "style.css" de nossa preferência, como por exemplo o "hover effect" acima. 
Fazendo isso, ao posicionarmos o mouse sobre nossas barras, que inicialmente são azuis, elas passam a deter a coloração marrom, enquanto o mouse estiver posicionado sobre a barra;

-Adicionando "Tooltip" a um elemento D3:
é utilizada para exibir mais informações quando o usuário passa o mouse sobre nosso gráfico.
Existem diversos métodos para fazer isso, mas podemos utilizar o elemento SVG 'title' neste casos;
title é combinado ao metodo text() para adicionar dinamicamente dados ao nosso gráfico.
Por exemplo, com base no modelo acima, que agora contém os arquivos index.html; style.css; script.js, podemos incluir o elemento title, combinado com o metodo text, apenas incluindo o seguinte código ao final de nosso script.js:

.append("title")
.text((d) => d)

Agora ao posicionarmos o mouse sobre uma barra, será exibido o valor atribuído a ela;

-Criando um "scatterplot" com circulos SVG:
scatter plot é outro tipo de visualização. 
geralmente utiliza circulos para mapear pontos, os quais possuem dois valores cada, que representam os eixos x e y, usados para posicionar o circulo;
SVG tem a tag circle para criar formatos de circulo, que funciona de forma semelhante ao rect elemento que usamos no exemplo acima;

Um circulo em SVG tem 3 atributos principais. O cx e cy atributos são suas coordenadas. Elas indicam ao D3 onde posicionar o centro do formato no SVG. O raio (atributo 'r') dá o tamanho do circulo;

Todos os 3 podem utilizar de 'callback function' para definir seus valores dinamicamente. Lembrando que todos os metodos 'anexados' após data(dataset) percorrem item por item de nosso dataset. 
O parametro 'd' na callback function se refere ao valor do item em dataset e utilizamos [] para acessar o valor dentro da array:

.attr("cx", (d,i) => d[0])
.attr("cy", (d,i) => 500 - d[1])
.attr("r", 5)

-Adicionando "labels" aos nossos circulos "scatterplot":
Podemos adicionar "coordenadas" de texto aos nossos pontos, com base nos valores de x e y, onde teremos apenas que adicionar uma "," entre eles para melhor visualização;
Os nós de texto, que exibem os valores conjuntamente aos nossos pontos nos gráficos, dependem de atributos x e y para serem posicionados no SVG. Geralmente podemos utilizar o mesmo valor de cy para y, enquanto o valor de x precisa ser um pouco maior que o de cx, o que empurrará nosso label um pouco ao lado do ponto, possibilitando melhor visualização.

Vejamos como ficaria:
svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d[0] + ", " + d[1])
       .attr("x", (d,i) => d[0] + 5)
       .attr("y", (d,i) => h - d[1])

-Para melhor visualização, observar a "Parte 2" em testFolder/script.js

-Criando uma escala linear com D3:
Em D3, existem escalas para ajudar a introduzir os dados. 
.scales são funções que orientam o programa sobre como mapear e introduzir os dados em nosso SVG.
Por exemplo, digamos que temos um SVG de 100x500 (dimensões) e desejamos incluir "Dados de gastos domésticos globais", com dados que variam de bilhões a trilhões de reais. Para isso, introduzimos escalas em nosso D3 para orientá-lo a como adicionar referidos dados em nossa área de 100x500, sem que haja distorções ou que os dados "fujam" de nossa área.

D3 possui diversos tipos de escalas. 
Para a escala linear(geralmente utilizada com dados de quantidade), existe um método D3 chamado de .scaleLinear()

Ex:
// Definindo o domínio dos dados (valores de entrada)
const dataDomain = [0, 100]; // Exemplo: dados variam de 0 a 100

// Definindo o intervalo (faixa de valores de saída)
const svgHeight = 500; // Altura do SVG
const range = [0, svgHeight]; // Intervalo de 0 a 500 pixels

// Criando a escala linear
const scale = d3.scaleLinear()
    .domain(dataDomain) // Define o domínio dos dados
    .range(range); // Define o intervalo de saída

// Usando a escala para mapear valores de entrada para valores de saída
console.log(scale(0)); // Saída: 0 (0% da altura do SVG)
console.log(scale(50)); // Saída: 250 (50% da altura do SVG)
console.log(scale(100)); // Saída: 500 (100% da altura do SVG)

--------------------

.domain() -> define o intervalo dos valores de entrada (valores de nossos dados).
ex: .domain([0, 100])

.range() -> define o intervalo dos valores de saída (valores exibidos para visualização).
ex: .range([0, 500])

Por exemplo, digamos que temos um 'dataset' com valores que vão de 50 a 480 - nosso .domain;
Queremos mapear esses pontos através do eixo x em nosso SVG, entre 10 e 500 - .range;
O método .domain() e .range() atribuem esses valores para a escala, sendo que ambos os métodos levam uma array com ao menos dois elementos como argumentos. Vejamos:

scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()

Em ordem, os seguintes valores seriam exibidos em nosso console:
10, 500, 323.37 e 807,67

-Use d3.max e d3.min para encontrar os valores máximos e mínimos em nosso dataset:
Geralmente quando determinamos nosso .domain(), queremos utilizar os valores mínimos e máximos de nosso dataset para isso. Tentar localizar esses valores manualmente, inclusive em dados de larga escala, pode causar erros.
D3 tem dois métodos - .min() e .max() para retornar tais informações. 

Vejamos exemplo:
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)

Nossa dataset pode conter arrays entrelaçadas, como coordenadas [x, y], como no caso da nossa "scatterplot" acima mencionada. Neste caso precisamos falar ao D3 como calcular nossas máximas e mínimas. Felizmente tanto nosso método .min() quanto nosso método .max() recebem 'callback function'. 
Por exemplo:

const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
minX would have the value 1.

No exemplo acima, d[0] representa o primeiro elemento de cada array dentro da array locationData, ou seja, os valores de: 1, 6 e 8. Tais valores representam nosso x nas coordenadas.
Da mesma forma, d[1] representa o segundo elemento de cada array dentro da array locationData, ou seja, os valores de: 7, 3 e 3. Tais valores representam nosso y nas coordenadas.

-Utilizando escalas dinâmicas:
Os métodos .min() e .max() são úteis para ajudar a estipular nossa escala.
Dada uma base de dados complexa, uma das prioridades é estabelecer a escala para que a visualização se encaixe em nosso SVG container width e height, uma vez que nosso objetivo é que todos os dados sejam introduzidos dentro da dimensão de nosso SVG e sejam visíveis.
Vejamos um exemplo mais completo:

const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);


-No exemplo acima temos nossa dataset, "w" e "h", para representar através de variáveis as dimensões de nosso SVG;
-Temos também, uma variável "padding" com valor de 30, a qual é utilizada para criar uma borda entre as paredes laterais, superior e inferior de nosso SVG e o conteúdo gráfico a ser exibido. Destacando que "padding" é apenas um nome comercialmente utilizado para facilitar a leitura do código e o entendimento por terceiros. Ou seja, por mais que nossa dimensão do SVG seja de 500x500, nosso .range, aplicando nossa variável 'padding', estipula um espaçamento mínimo de 30 entre as paredes, com um .range de (30, 470), evitando que o conteúdo gráfico "encoste" nas paredes "x" e "y";
Ou seja, nada impede excluirmos as variáveis 'w', 'h' e 'padding' e introduzir seus referidos valores nos locais em que são utilizadas. Contudo, utilizá-las facilita a leitura e manipulação dos dados e da estrutura por terceiros.

-Utilize uma escala pré-definida para posicionar os elementos:
Com as escalas definidas, é hora de mapear nosso "scatterplot" novamente. 
Primeiramente é importante destacar novamente que as escalas pegam os dados "crus" das posições "x" e "y" e as transformam em valores que serão renderizados corretamente dentro das dimensões de nosso SVG.

Você define os valores dos atributos de coordenada para uma forma SVG com a função de escala. Isso inclui os atributos x e y para elementos rect ou text, ou cx e cy para círculos. Aqui está um exemplo:

shape
  .attr("x", (d) => xScale(d[0]))

As escalas definem os atributos de coordenadas da forma para colocar os pontos de dados no SVG. Você não precisa aplicar escalas ao exibir o valor real dos dados, por exemplo, no método text() para uma dica de ferramenta ou rótulo.

.attr("cx", (d) => xScale(d[0]))
.attr("cy", (d) => yScale(d[1]))
.attr("r", 5)


.attr("x", (d) => xScale(d[0] + 10))
.attr("y", (d) => yScale(d[1]))

-Adicionando eixos à visualização:
Outra forma de aperfeiçoar a visualização é adicionando os eixos x e y ao nosso gráfico.
D3 tem dois métodos, axisLeft() e axisRight(), para renderizar os eixos y e x, respectivamente. 
Vejamos um exemplo utilizando o caso anterior como base:

const xAxis = d3.axisBottom(xScale);

O próximo passo é renderizar o nosso eixo em nosso SVG. Para tanto podemos utilizar o componente genérico SVG, o elemento 'g'. 
O último passo é aplicar o atributo "transform" para posicionar o eixo em nosso SVG, no local correto. SVG suporta diversos types de "transform", mas para posicionar eixos precisamos de "translate". Vejamos exemplo:

const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);

O código acima posiciona o eixo x na parte inferior do SVG. Em seguida, ele é passado como argumento para o método call(). O eixo y funciona da mesma forma, exceto que o argumento translate está na forma (x, 0). Como translate é uma string no método attr() acima, você pode usar concatenação para incluir valores variáveis para seus argumentos.


