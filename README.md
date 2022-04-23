# FluxMusic

Projeto criado colocando em prática os conhecimentos adquiridos em Front-End e Back-End,  onde crio uma aplicação web de um novo produto que a goFlux decidiu investir, o fluxMusic. Um site que possibilita descobrir artistas, álbuns e novidades do mundo da música.

Para isso, foram consumidos dados da API: http://developers.music-story.com/developers/genre.

Utilizando os endpoints:
[http://api.music-story.com/en/genre/21/news](http://api.music-story.com/en/genre/21/news)
[http://api.music-story.com/en/genre/1/artists](http://api.music-story.com/en/genre/1/artists)
[http://api.music-story.com/en/genre/1/albums](http://api.music-story.com/en/genre/1/albums)

---

# Sumário

- [Status](#status)
- [Habilidades desenvolvidas](#habilidades-desenvolvidas)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Organização e Estrutura do Projeto](#organização-e-estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
  - [Ferramentas necessárias](#ferramentas-necessárias)
  - [Rodando a aplicação local](#rodando-a-aplicação-local)
  - [Rodando a aplicação no heroku](#rodando-a-aplicação-no-heroku)
- [Autora](#autora)

---

# Status

Este projeto foi construído para um teste na empresa goFlux.

---

# Habilidades desenvolvidas

- Exercitar os conceitos básicos do JavaScript, React enquanto Framework e Node.js no Back-End (para realizar as requisições na API e ser consumida pelo Front-End);
- Detectar e solucionar problemas no código de forma mais objetiva;
- Exercitar e aplicar hooks do react para gerenciamento de estados.
- Exercitar o uso de lógica de programação;
- Desenvolver o CSS para estilizar a página;
- Exercitar a componentização de partes do código;
- Entender e aplicar os conceitos de markdown na criação de um README estruturado;
- Realizar o Deploy da aplicação no heroku;

---

# Tecnologias utilizadas

- [React](https://pt-br.reactjs.org/)
- [Heroku](https://www.heroku.com/)

---

# Organização e Estrutura do Projeto

O projeto está organizado e estruturado da seguinte maneira:

```bash
├── fluxMusic_back
│   ├── src
│   │   ├── Routes
│   │   │   ├── albumsRouter
│   │   │   │   └── router.js
│   │   │   ├── artistsRouter
│   │   │   │   └── router.js
│   │   │   ├── newsRouter
│   │   │   │   └── router.js
│   │   │   ├── app.js
│   │   │   └── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
├── fluxMusic_front
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Header.js
│   │   │   └── router.js
│   │   ├── images
│   │   │   └── background_image.png
│   │   ├── pages
│   │   │   ├── Albums.js
│   │   │   ├── Artists.js
│   │   │   └── Home.js
│   │   ├── styles
│   │   │   ├── App.css
│   │   │   ├── artists.css
│   │   │   ├── header.css
│   │   │   ├── home.css
│   │   │   └── index.css
│   │   ├── Api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
└── README.md

```

# Pré-requisitos

## Ferramentas necessárias

Para rodar o projeto, você vai precisar instalar as seguintes ferramentas:
 - [Git](https://git-scm.com);
 - Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou outro de sua preferência;

## Rodando a aplicação local

 - Clone o Projeto e instale as dependências

    ```bash
    # Clone este repositório
     # via HTTPS
    $ git clone https://github.com/CamilaDamasio/fluxMusic.git
      # via SSH
    $ git clone git@github.com:CamilaDamasio/fluxMusic.git

    # Acesse o diretório do projeto no terminal/cmd
    $ cd fluxMusic

    # Acesse o diretório do Front-End e instale as dependências
    $ cd fluxMusic_front
    $ npm install

    # Volte para o diretório fluxMusic, acesse o diretório do Back-End e instale as dependências
    $ cd ..
    $ cd fluxMusic_back
    $ npm install

    ```

 - Inicie o sistema:

    ```bash
    # Volte para o diretório fluxMusic
    $ cd ..
    # Abra o diretório do Front-End e inicie
    $ cd fluxMusic_front
    $ npm start

    # Volte para o diretório fluxMusic
    $ cd ..
    # Abra o diretório do Back-End e inicie
    $ cd fluxMusic_back
    $ npm start

    ```

## Rodando a aplicação no Heroku

  O deploy desta aplicação foi hospedada no heroku.

  - link: []()

---

# Autora

  Camila de Souza Damásio
<br />
  Desenvolvedora WEB FullStack com foco em Front-End, sempre aprendendo algo novo e eterna apaixonada por tecnologia!

  <a href="https://www.linkedin.com/in/camilasdamasio/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

---
