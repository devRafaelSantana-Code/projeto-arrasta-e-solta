# 🖱️ Desafio Arrasta e Solta — Drag & Drop Puzzle

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Drag%20%26%20Drop-6C63FF?style=for-the-badge&logoColor=white" alt="Drag and Drop">
</p>

## 🌐 Visualização do Projeto

<p align="center">
  <a href="https://projeto-arrasta-e-solta.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Acessar%20Projeto%20Online-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Acessar projeto online na Vercel">
  </a>
</p>

## 📌 Sobre o Projeto

O **Desafio Arrasta e Solta — Drag & Drop Puzzle** é uma aplicação interativa desenvolvida com HTML5, CSS3 e JavaScript puro (_Vanilla JavaScript_), na qual o usuário precisa organizar cinco blocos numéricos em suas respectivas áreas para completar um quebra-cabeça lógico.

Desenvolvido a partir dos desafios de lógica e desenvolvimento front-end da plataforma B7Web, o projeto utiliza a API nativa **HTML5 Drag and Drop** para permitir a movimentação de elementos entre uma área de armazenamento e caixas de destino, com validação das posições durante a partida.

O objetivo é consolidar conhecimentos em manipulação do DOM, tratamento de eventos, movimentação de elementos, gerenciamento de estado e implementação de regras de negócio no lado do cliente.

## 🎯 Objetivos do Projeto

- Implementar interações de arrastar e soltar utilizando APIs nativas do navegador.
- Manipular elementos HTML dinamicamente por meio do JavaScript.
- Aplicar regras de validação para controlar o posicionamento dos blocos.
- Implementar um algoritmo de embaralhamento para variar a configuração inicial do jogo.
- Sincronizar o estado da interface com a lógica de validação da partida.
- Praticar a organização e a manutenção de código front-end sem dependências externas.

## ⚙️ Funcionalidades

- **Arrastar e soltar blocos:** movimentação interativa dos números entre as áreas disponíveis.
- **Validação de posicionamento:** cada caixa de destino aceita apenas um bloco por vez.
- **Área de armazenamento flexível:** permite retirar e devolver blocos durante a resolução do puzzle.
- **Embaralhamento aleatório:** distribuição dos números em uma nova configuração inicial.
- **Verificação automática da vitória:** identificação da sequência correta após cada movimentação válida.
- **Reinicialização da partida:** possibilidade de iniciar uma nova tentativa por meio do botão de reset.

## 📐 Regras de Negócio e Validação

O desafio consiste em posicionar os cinco blocos numéricos nas caixas correspondentes, respeitando as regras de movimentação e ocupação.

1. **Ocupação exclusiva:** cada caixa de destino, identificada pela classe `.area`, pode conter apenas um bloco numérico por vez.
2. **Armazenamento flexível:** a área `.neutralArea` permite guardar os blocos que ainda não foram posicionados ou que precisam ser reorganizados.
3. **Embaralhamento dos números:** o algoritmo Fisher-Yates é utilizado para gerar uma nova ordem dos blocos no início da partida ou durante a reinicialização.
4. **Atualização do estado:** após uma movimentação válida, a função `updateAreas` identifica os números presentes em cada caixa e atualiza o objeto lógico `areas`.
5. **Condição de vitória:** a partida é concluída quando todos os números ocupam suas posições correspondentes.

A condição lógica de vitória é representada pela seguinte expressão:

```javascript
areas.a === "1" &&
   areas.b === "2" &&
   areas.c === "3" &&
   areas.d === "4" &&
   areas.e === "5";
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia              | Aplicação no Projeto                                                 |
| ----------------------- | -------------------------------------------------------------------- |
| HTML5                   | Estrutura e organização dos elementos da interface.                  |
| CSS3                    | Estilização, organização visual e apresentação das áreas do jogo.    |
| JavaScript              | Implementação das regras de negócio, eventos e validação da partida. |
| HTML5 Drag and Drop API | Interação de arrastar e soltar os blocos numéricos.                  |
| DOM API                 | Seleção, movimentação e atualização dinâmica dos elementos HTML.     |

## 🧠 Detalhes Técnicos e Implementação

### 1. HTML5 Drag and Drop API

A API nativa de arrastar e soltar permite controlar o início, a movimentação e a conclusão das operações realizadas pelo usuário.

Os principais eventos envolvidos nesse fluxo são:

- `dragstart`: identifica o início do arrastamento de um elemento.
- `dragover`: permite habilitar uma área como destino quando o comportamento padrão é cancelado.
- `drop`: trata a tentativa de soltar o elemento em uma área de destino.
- `dragend`: identifica o encerramento da operação de arrastamento.

### 2. Manipulação do DOM

O método `appendChild()` é utilizado para mover os blocos entre os containers. Quando um nó existente é adicionado a outro elemento, ele é movido de sua posição anterior, sem a necessidade de criar uma cópia.

Propriedades como `dataset`, `children` e `firstElementChild` permitem consultar informações dos elementos e verificar a ocupação das áreas de destino.

### 3. Tratamento de Eventos

Os eventos de arrastamento podem ser tratados nos elementos apropriados da interface, permitindo centralizar comportamentos e reduzir a necessidade de ouvintes individuais quando a estrutura do código utiliza delegação de eventos.

### 4. Embaralhamento com Fisher-Yates

O algoritmo Fisher-Yates reorganiza os elementos de um conjunto por meio de trocas entre posições selecionadas aleatoriamente, produzindo uma permutação pseudoaleatória da sequência inicial.

Essa técnica permite variar a disposição dos blocos sem precisar definir manualmente diferentes configurações para o jogo.

### 5. Sincronização do Estado e Validação

O objeto `areas` representa o estado lógico das caixas de destino. A função `updateAreas` consulta a estrutura atual do DOM e atualiza esse objeto para verificar se todos os números estão posicionados corretamente.

Essa abordagem conecta o estado visual da interface às regras que determinam a conclusão da partida.

## 📁 Estrutura do Projeto

```text
projeto-arrasta-e-solta/
│
├── index.html       # Estrutura da aplicação
├── style.css        # Estilização da interface
├── script.js        # Lógica do jogo e eventos
└── README.md        # Documentação do projeto
```

## 💻 Como Executar o Projeto Localmente

O projeto utiliza tecnologias nativas do navegador e não exige a instalação de dependências externas.

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd SEU-REPOSITORIO
   ```

3. Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** no Visual Studio Code para executar a aplicação durante o desenvolvimento.

## 🚀 Aprendizados

O desenvolvimento deste projeto contribui para a consolidação dos seguintes conhecimentos:

- Manipulação dinâmica da árvore do DOM.
- Utilização de eventos da HTML5 Drag and Drop API.
- Implementação de regras de negócio e validação de estados.
- Aplicação do algoritmo Fisher-Yates.
- Organização de elementos em containers e movimentação de nós HTML.
- Desenvolvimento de interfaces interativas com JavaScript puro.

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e aprimoramento contínuo de habilidades em desenvolvimento web.

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript e desenvolvimento de interfaces interativas.
</p>
