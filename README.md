# angular4-grid-example
Componente **Listagem** (*listagem.component.ts*) que simula o plug-in **DataTables.js** (https://datatables.net)


Utilizei 2 componentes externos nesse projeto:
  * O primeiro deles (*menu-responsivo.componenet.ts*) é referente a responsividade no menu. Maiores detalhes podem ser encontrados no link abaixo
      * https://medium.com/@ct7/the-simple-way-to-make-a-mobile-angular-2-bootstrap-navbar-without-jquery-d6b3f67b037b
  * O segundo (*paginacao.component.ts*) é a paginação do grid. Maiores detalhes podem ser encontrado aqui:
      * http://www.bentedder.com/create-a-pagination-component-in-angular-4/
      
----------------------------------------------------------------------------------------------------------------------------------------

### Exemplo de Utilização

```
<listagem [titulo]="titulo"  
          [data]="data" 
          [colunasTitulo]="colunas" 
          [totalResultados]="totalResultados"
          [atributosIgnorados]='["token","teste"]'
          (doEdicao)="editarRegistro($event)"
          (doExclusao)="excluirRegistro($event)">
</listagem>
```
### Documentação do Componente

* [titulo]: Parametro de texto que representa o título que será exibido na camada de visão.
* [data]: Objeto JSON que será responsável por popular as celulas da tabela "<td>".
* [colunasTitulo]: Vetor de texto que representará as colunas de título "<th>" que serão exibidas na camada de visão.
* [totalResultados]: Valor numérico que será a base dos cálculos para definição da paginação. 
* [atributosIgnorados]: Vetor de texto onde será indicado se alguma propriedade do objeto JSON deverá ser ignorada ao compor a tabela.
* (doEdicao): Função JS que será executada ao clicar no botão "Editar".
* (doExclusão): Função JS que será executada ao clicar no botão "Excluir".

----------------------------------------------------------------------------------------------------------------------------------------

### ATENÇÃO 
Todas as requisições realizadas dentro do projeto estão passando por uma guarda de segurança. O guardião (*autenticacao.guard.ts*) e o componente (*login.component.ts*) podem ser ignorados. Para isso, basta remover os parametros *canActive* e *canLoad* das rotas no **arquivo app.router.ts**. 

PS: É necessário tambem remover a indicação de provedor do "AutenticacaoGuard" no arquivo **app.module.ts**.
```javascript
 ...
 prodivers: [
  AutenticacaoGuard
 ]
 ...
```

