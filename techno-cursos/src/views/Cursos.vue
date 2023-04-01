<template>
  <div>
    <h1>Página de cursos</h1>
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
  name: 'CursosView',
  mixins: [
    fetchData
  ],
  created(){
    this.fetchData('/cursos')
  }
}
</script>
