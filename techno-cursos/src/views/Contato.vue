<template>
  <div>  
    <div v-if="carregando">
      <page-loading/>
    </div>
    <transition> 
      <div v-if="api">
        <h1>Página de {{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
            <li>
              <b>Email:</b>
              {{ api.contato.email }}
            </li>
            <li>
              <b>Telefone:</b>
              {{ api.contato.telefone }}
            </li>
            <li>
              <b>Endereço:</b>
              {{ api.contato.endereco }}
            </li>
        </ul>
      </div>
    </transition>
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

