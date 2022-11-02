---
title: 'Angular Pleno'
metaTitle: 'Gama Academy & Accenture Angular Junior e Pleno '
metaDesc: 'Exercícios separados por dias com um checklist para ser feito individualmente ao longo de 15 minutos'
socialImage: /images/classes/11-01-2019.jpg
photoAutor: Alex Wong
photoLink: https://unsplash.com/@killerfvith
date: '2019-01-11'
---
## Crononagrama
| Dia | Conteúdo  |
|--|--|
| Dia 1 (4h) | Introdução, Angular CLI, Arquitetura de um component  |
| Dia 2 (8h) | Classes no Angular / Typescript, Inicializando a Aplicação, Css no projeto, Interpolação de template, Property binding, One Way data binding, Event Binding  |
| Dia 3 (4h) | Organização da arquitetura, Módulos, Ng-content |
| Dia 4 (4h) | Eventos e referências ($event), NgFor e o loop de template, Variáveis de referência (#), ngModel (banana in a box) |
| Dia 5 (4h) | ngSubmit, Validações orientadas a template, NgIf |
| Dia 6 (4h) | Configuração de rotas, Separando módulos |
| Dia 7 (4h) | Passando dados entre components (Input), Passando dados entre components (Output), Broadcat|
| Dia 8 (8h) | Formulários reativos, Usando HTTP para requisições, RXJS|
| Dia 9 (4h) | Criando serviços, Criando Pipes|
| Dia 10 (4h)| Publicando seu projeto, Plantão de dúvidas|


--

# Dia 1

## Configuração de ambiente

 1. Instale globalmente o node
 2. Verifique a versão que foi instalada via CLI
 3. Instale globalmente a CLI do Angular 
 4. Verifique a versão que foi instalada via CLI

# Dia 2

## Ambiente

 1. Via CLI do angular, inicie um projeto novo
 2. Rode a aplicação no servidor local

## Usando CSS

 1. Insira o css do material theme na aplicação toda ([Link do css](https://code.getmdl.io/1.3.0/material.indigo-red.min.css))
 2. No component raiz, crie um botão customizado com os estilos do material
  ```html
  <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
    <i class="material-icons">add</i>
  </button>
  ```
 3. Ainda no component raiz da aplicação, crie um formulário básico
  ```html
    <input type="email" />
    <input type="password" />
    <button>Entrar</button>
  ```
 4. Mude a cor do botão para vermelho

## Interpolação

 1. Defina um valor na classe `AppComponent` que seja uma `string` qualquer e exiba seu valor na página 
 2. Mostre o resultado da soma de dois números na página

## Property binding

 1. Deixe o botão do formulário desabilitado de acordo com uma propriedade da classe com valor false.

## Utilizando o data binding

 1. Faça o botão de entrar exibir qualquer texto no console do navegador ao ser clicado
 2. Mostr um console quando valores forem inseridos no campo email do formulário.
