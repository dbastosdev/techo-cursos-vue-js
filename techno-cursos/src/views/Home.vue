<!--
  O que queremos nessa página é puxar os dados da nossa fake api servida com o json-server. 
-->

<template>
  <div>


    <!-- 
      Exibindo o loading. Se o carregando = true, do contrário exibe os dados do fetch 
    -->
    <div v-if="carregando">
      <page-loading/> <!-- carrega o elemento global de page loading-->
    </div>
    <transition> <!-- Faz a animação do conteúdo seu estilo está em App.vue-->
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <!-- cria um call to action, botão para cursos usando o router -->
          <!-- Necessário colocar a tag para indicar que é um botão pra os estilos funcionarem-->
          <router-link tag="button" to="/cursos" class="btn-cursos">Cursos</router-link> 
          <div>
            <h2>Avaliações</h2>
            <ul>
              <!-- Pega a lista de avaliações e as exibe com v-for-->
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        

        <img src="../assets/aprender.png" alt="aprenda web design">
        
      </div>
    </transition>
    

  </div>
</template>

<script>

// Importação de mixins
import fetchData from '@/mixins/fetchData.js'
import PageLoading from '../components/PageLoading.vue';

export default {
  components: { PageLoading },
  name: 'HomeView',
  // Mixin: Usa script externo para realizar alguma lógica específica
  mixins: [
    fetchData // Usa o fetch para buscar dados
  ], 
  // Hooks
    // Será feito a chamada dos métodos assim que a instância do vue for criada.
  created(){
    // O uso do this é fundamental para funcionamento.
    // Aqui chama o nome do método. Seja do mixin ou de outro declarado aqui mesmo.
    this.fetchData("/home")  // faz o fetch preenchendo o argumento de url
  }

};
</script>

<style scoped>

.btn-cursos{
  background: #4b8;
  color: white;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 2px rgba(0,0,0,0.1);
  font-size: 1rem;
}

</style>
