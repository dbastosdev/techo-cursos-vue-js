<!--
Este é um componente de header da aplicação. Servirá para agrupar os links
-->

<!-- Aqui desenvolvemos como se fosse um trecho html -->
 <template>
    <header>
        <nav>
            <!-- usando o router-link para criar links para as views ou páginas do site
            usa o router que é global para aplicação. Ao clicar no logo, vai direto à home-->
           <div class="logo">
               <router-link to="/"><a>Techno</a></router-link>
           </div>

            <ul>
                <li><router-link to="/cursos">Cursos</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
            </ul>
        </nav>
    </header>
 </template>

 <script>
 // Exporta o componente
 export default {
    name: 'TheHeader'
 }
 </script>

        <!-- Scoped indica ao vue que os estilos aqui determinados se aplicam apenas
        a este componente e não vaz para o geral ou demais-->
 <style scoped>

 header{
    background: #234;
 }

 header a{
    color: white;
 }

 nav{
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-content: space-between;
    padding: 20px;
    align-items: center;
 }

.logo{
    flex: 1;
}

.logo a{
    font-size: 2rem;
}

ul li{
    display: inline-block;
}

li a{
    padding: 0 20px;
    margin-left: 10px;
}

/* Como a home tem o barra e essa barra sempre aparece em toda rota, ela sempre ficará
ativa. Exceto sem inserirmos o router-link-exact-active na classe. Assim somente a rota exata é selecionada */
a.router-link-active{
  color: #4b8;
}
 
 </style>