<template>

  <div>
    <div v-if="carregando">
      <page-loading/>
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h2>{{ api.nome }}</h2>
          <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${api.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
// importando o mixin
import fetchData from '@/mixins/fetchData.js'

export default {
  name: "AulaView",
  props: ['aula'], // nome da propriedade que está sendo recuperada via routes via params
  mixins: [fetchData], // registra o mixin importado
  created(){
    // vai fazer o fetch concatenando o trecho de url abaixo na base url que já está no mixin
    this.fetchData(`/aula/${this.aula}`)
  },
  // Para que o componente que foi renderizado com o conteúdo de uma aula saia e possa
  // ser renderizado outro com os demais conteúdos a cada click no router-link, devemos 
  // usar o guard abaixo. É um Hook do próprio router
  beforeRouteUpdate(to, from, next){
    this.fetchData(`/aula/${to.params.aula}`)
    next()
  }

}
</script>

<style>

</style>