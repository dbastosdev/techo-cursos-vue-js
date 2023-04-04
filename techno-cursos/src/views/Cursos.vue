<template>
  <div>
    <div v-if="carregando">
      <page-loading/>
    </div>
    <transition> 
      <div v-if="api">
        <h1>Sobre nossos {{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <!-- Pega a lista de avaliações e as exibe com v-for-->
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <!-- 
                transformando o conteúdo do h2 em link
                esse, vai exibir um novo componente de view chamado curso
                envia dados para rota curso com o parâmetro de id do curso específico

                Manda para a rota curso - informação do name
                Manda com o parâmetro curso.id - informação do params
              -->
              <router-link :to="{name: 'curso', params: {curso: curso.id}}" class="title-link">
                {{ curso.nome }} - {{ curso.totalAulas }} aulas | {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
          {{ api }}
        </ul>
      </div>
    </transition>
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

<style scoped>
.title-link{
  color: #003;
}
</style>