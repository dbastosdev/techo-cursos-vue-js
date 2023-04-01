/*
  Podemos repetir esse código de fetch feito em Home para contato, cursos e demais p
  aginas. Contudo, como se trata de programação sempre que podemos reutilizar código é 
  melhor.

  A ideia é evitar de usar o código repetido para fetch copiando e colando.

  1- Crie o código para ser mixin
  2 utilize o mixin dentro do script.
*/

// 1- Código mixin: Vai ficar em um arquivo externo chamado mixins.
// e será imporatado aqui para uso e em outras páginas
export default {
    // Dados que podem ser utilizados dentro do template do componente
    data(){
      return {
        carregando: true, // Criando uma forma de exibir um loading
        api: null // tem que ser inicializada. Se não tivesse nada o lint seria ativado.
      };
    },
    methods:{
      // Faz o fetch para a api e pega os dados a serem exibidos na home
      fetchData(url){
        // Lógica do loading. Primeiro passa a true o carregando e em seguida
        // limpa a variável api
        this.carregando = true,
        this.api = null,
        // Realiza o fetch
        fetch(`http://localhost:3000${url}`)
          .then(r => r.json())
          .then(r =>{
            // fazendo os dados da api só serem retornados 1,5 seg depois
            setTimeout(()=>{
              this.api = r;
              // Depois que já pegou a informação via fetch, transforma o carregando em false
              this.carregando = false
            }, 1500)
            
          });
      }
    }
  }