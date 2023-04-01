<template>
  <div>
    <h1>Página de contato</h1>
    
    <div v-if="carregando">
      <p>carregando...</p>
    </div>
    <div v-else>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData.js'

export default {
   // Exporta a view
  name: 'ContatoView',
  // Busca lógica específica de arquivos externos. 
  mixins: [
    fetchData // fetch
  ],
  // Hooks
    // Será feito a chamada dos métodos assim que a instância do vue for criada.
  created(){
    // O uso do this é fundamental para funcionamento.
    this.fetchData("/contato") // faz o fetch preenchendo o argumento de url
  }
}
</script>

