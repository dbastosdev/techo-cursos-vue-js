<!--
    Esse é um componente que será utilizado em todas as páginas. 
    Por isso, não precisa ser importado em uma página específica. 

    Pode ser importado no arquivo main.js da aplicação e usado em 
    todo site. 
-->

<template>
    <div class="loading">
        <p>Carregando</p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
</template>

<script>

export default{
    name: "PageLoading"
}
</script>

<style scoped>

p{
    color: #4b8;
    font-weight: bold;
    display: inline-block;
    font-size: 1.4rem;
    margin-right: 5px;
}

/* estilo das bolinhas*/
.loading span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #4b8;
    margin: 4px;
    animation: dots .6s cubic-bezier(0.6,0.1,1,0.4) infinite alternate/* chama animação */
}

/* Animação */

.loading span:nth-child(1){
    animation-delay: 0.1s;
}

.loading span:nth-child(2){
    animation-delay: 0.2s;
}

.loading span:nth-child(3){
    animation-delay: 0.3s;
}

.loading span:nth-child(4){
    animation-delay: 0.4s;
}

@keyframes dots {
    from {
        transform: translate3d(0,0,0);
    }
    to{
        transform: translate3d(0, 30px,0);
    }
}

</style>
