<!--
  O que queremos nessa página é puxar os dados da nossa fake api servida com o json-server. 
-->

<template>
  <div>
    <h1> Página Home</h1>

    <!-- 
      Exibindo o loading. Se o carregando = true, do contrário exibe os dados do fetch 
    -->
    <div v-if="carregando">
      <p>carregando...</p>
    </div>
    <div v-else>
      <p>{{ api }}</p>
    </div>

  </div>
</template>

<script>

// Importação de mixins
import fetchData from '@/mixins/fetchData.js'

export default {
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

