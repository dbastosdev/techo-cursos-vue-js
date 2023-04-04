import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Importação de componentes globais criados por nós
import PageLoading from '@/components/PageLoading.vue' // importação
Vue.component("PageLoading", PageLoading) // Registro


// Apenas para indicar produção. Gera erro se for removido.
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App) // Renderização do template com arrow function
}).$mount('#app') // Indica que o vue só será montado após a instância do vue ser realizada. 

/*

Comentários gerais: 

pastas de interesse: 

public: só editamos coisas simples do arquivo index.html e mudamos o favicon da página. 

src: Onde será trabalhado o vue. 
assets: imagens e outros nossos, css externo dentre outros. 
compoentes: onde ficarão registrados nossos componentes
router: registro das rotas
views: páginas onde ficam montados os diversos agrupamentos de componentes 

App.vue: Onde fica o templeta principal do vue. 

main.js: Onde é iniciado o vue.js

A extensão e codificação é feita acrescentando compoenentes com o padrão: 

<template>
<script>
<style>

E em seguida, exporta o compoenentes dentro do próprio arquivo e o importa dentro da página, 
outro componente ou template. Além disso, o compoenente deve ser registrado dentro de components: 

Para importar como global, importa o componente dentro do main.js e em seguinda digita 
Vue.components("nomeParaUso", nomeUsadoNaImportacao). Assim, pode ser usado em qualquer lugar e 
instância do vue.






CLI: 

## Create project:
vue create techno  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

*/