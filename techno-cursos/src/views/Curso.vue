<template>

  <div>
    <div v-if="carregando">
      <page-loading/>
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h2>{{ api.nome }}</h2>
          <p>{{ api.descricao }}</p>
          <ul class="aulas">
            <li v-for="aula in api.aulas" :key="aula">
              <!--
                Transformou cada nome de aula em um link que redireciona para o conteúdo 
                da aula de forma dinâmica. Assim, o conteúdo é carregado aqui na mesma página
                por ser filho direto de curso. Por isso, não substitui conteúdo e por ter um 
                router-view aqui dentro. Significa que vai renderizar nessa mesma rota e componente
                um novo componente
              -->
              <router-link :to="{name: 'aula', params: {aula: aula.id}}" class="title-link">{{ aula.nome }}</router-link>
            </li>
          </ul>
        </div>
        <!-- Exibindo dados de cada aula com mais uma view que é renderizada pelo router-view -->
        <!-- Isso será feito pra exibir o filho de curso. Definido no arquivo router.-->
        <router-view>
          
        </router-view>
      </div>
    </transition>
  </div>

</template>

<script>

// importando o mixin
import fetchData from '@/mixins/fetchData.js'

export default {
  name: "CursoView",
  // propos pega a propriedade que via params para ser usada aqui dentro do componente
  // essa propriedade vem como parâmetro no router-link
  props: ["curso"],
  mixins: [fetchData], // registra o mixin importado
  created(){
    // vai fazer o fetch concatenando o trecho de url abaixo na base url que já está no mixin
    this.fetchData(`/curso/${this.curso}`)
  }

}
</script>

<style scoped>
  .aulas li{
    display: block;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background: white;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
  }

.title-link{
  color: #003;
}

.aulas li a.router-link-active{
  background: #4b8;
  color: white;
}
</style>