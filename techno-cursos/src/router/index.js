// Arquivo padrão com as configurações do Vue router
// Esse router é chamado no main.js para indicar que o vue.js o utilizará. 

/*

Uso do Router:

O componente router-view é utilizado para indicarmos que um componente baseado no Router deverá 
ser carregado naquela área. O router-link é utilizado para criar os links de navegação.
*/

import Vue from 'vue' // Importação do vue
import Router from 'vue-router' // Importação do router

// Importação dos componentes que serão exibidos com o router.
// Sem isso, não é possível servir o componente com o router. 
// Cada um dos componentes aqui importados deve ser usado no router e depois servidos.
import HomeView from '../views/Home.vue'
import ContatoView from '../views/Contato.vue' // A importação sai da pasta e entra em outra
import CursosView from '../views/Cursos.vue' // A importação sai da pasta e entra em outra



Vue.use(Router) // Fazendo o vue usar o Router

export default new Router({
  mode: 'history', // utiliza a history api para permitir voltar a página
  base: process.env.BASE_URL, // define a base do aplicativo, mude caso o app não esteja na raiz do seu servidor
  // Aqui vão todas as rotas da aplicação
  routes: [
    {
      path: "/", // define o URL
      name: "home", // dá um nome ao router
      component: HomeView // indica o componente que será utilizado e que foi importado acima
    },
    {
      path: "/contato",
      name: "contato",
      component: ContatoView
    },
    {
      path: "/cursos",
      name: "cursos",
      component: CursosView
    }
  ]
})

