<!--
  Um arquivo .vue possui o template do componente, o script e o estilo do mesmo.
  Isso permite melhor organização/manutenção dos componentes.

  O que se encontra no main.js na raiz da aplicação será renderizado aqui. Pois o vue está amarrado a este
  arquivo pelo id app. 

  Temos ainda a pasta pública do projeto. Todo o projeto compilado é injetado na pasta pública dentro
  do index.html
-->

<template>
  <div id="app">

    <!--Aqui é usado o Header com a navegação da aplicação-->
    <!-- Esse componente foi importado e diretamente utilizado aqui mesmo. -->
    <TheHeader/>

    <!--Usando o router -->
    <!-- Ao inserir esse elemento aqui é inserido dinâmicamente os componentes
    listados dentro do vue-router. 
    este ainda aceita estilos com classes. -->
    <router-view class="container"></router-view>
  </div>
</template>

<script>
                      // @ é um atalho para pasta src
import TheHeader from '@/components/TheHeader.vue' // A importação sai da pasta e entra em outra

export default{
  // Registrando os componentes importados:
  components:{
    TheHeader
  }
};

</script>


<style>

/* 
   Como aqui é como se fosse a página principal, o reset do css vem aqui e também 
   as definições de classes gerais usadas em todo o site.
*/

body{
  margin: 0px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #234;
}

ul{
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

a{
  font-weight: bold;
  text-decoration: none;
  color: white;
}

img{
  max-width: 100%;
}

.container{
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* estilo do transition de animação do conteúdo */
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active{
  transition: all .3s;
}

/* estilo global de exibição de conteúdo */
.conteudo{
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  gap: 30px;
}

@media screen and (max-width: 700px) {
  .conteudo{
    display: block;
  }
}


</style>
