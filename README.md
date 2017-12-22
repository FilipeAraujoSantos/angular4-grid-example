# angular4-grid-example
Componente **Listagem** (*listagem.component.ts*) simula o DataTables.js

Utilizei 2 componentes externos nesse projeto:
  * O primeiro deles (menu-responsivo.componenet.ts) é referente a responsividade no menu. Maiores detalhes podem ser encontrados no link abaixo
      * https://medium.com/@ct7/the-simple-way-to-make-a-mobile-angular-2-bootstrap-navbar-without-jquery-d6b3f67b037b
  * O segundo (paginacao.component.ts) é a paginação do grid. Maiores detalhes podem ser encontrado aqui:
      * http://www.bentedder.com/create-a-pagination-component-in-angular-4/
    
O guardião (*autenticacao.guard.ts*) e o componente (*login.component.ts*) podem ser ignorados. Para isso, basta remover os parametros *canActive* e *canLoad* das rotas no **arquivo app.router.ts**. 

PS: É necessário tambem remover a indicação de provedor do "AutenticacaoGuard" no arquivo **app.module.ts**.
```javascript
 ...
 prodivers: [
  AutenticacaoGuard
 ]
 ...
```

