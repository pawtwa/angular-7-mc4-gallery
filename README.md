# Mc4Gallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Wymagania

+ Pobieranie listy zdjęć z pliku JSON
   - Zawartość pliku wygenerować za pomocą JSON Schema: https://gist.github.com/piecioshka/da76dc4db6a7cc39a0634327c8f6cef6
+ Prezentacja listy miniaturek
   - Rozmiary miniatur: 200x133px
   - Rozmiary powiększonych zdjęć: 600x400px
+ Definiowanie wyglądu za pomocą składni SCSS
   - Ustawić wygląd miniaturek
   - Wykorzystać CSS Flexbox do ustawienia komponentu z miniaturkami
+ Po kliknięciu w miniaturkę pojawia się powiększone zdjęcie
   - Domyślnym dużym zdjęciem jest pierwsze w kolekcji miniaturek
+ Wyróżnić miniaturkę, której widać powiększenie
