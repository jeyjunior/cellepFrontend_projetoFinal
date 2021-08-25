// Aguardar o doom ficar pronto para executar os scripts
$(document).ready(function(){


    // recebe o evento de submit do formulario
    $("#loginAluno").submit(function(evento){

      var usuario = $("#inputUsuario").val() //atribui a var usuario o valor inserido nesse campo
      var senha = $("#inputSenha").val() //atribui a var senha o valor inserido nesse campo

      // condicao de acesso
      if(usuario == "root" && senha == "1234"){

        // adicionar classe css a div MSG
        $("#mensagem").addClass("alert alert-success alert-dismissible fade show")

        //remove class alert-warning caso exista
        $("mensagem").removeClass("alert-warning")

        //apresenta mensagem de passagem para usuario
        $("#mensagem").text("Usuário logado!").show().fadeOut(3000)

      }
      else{
        // adicionar classe css a div MSG
        $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")
        
        //remove class alert-success caso exista
        $("mensagem").removeClass("alert-success")

        //apresenta mensagem de passagem para usuario por 3s
        $("#mensagem").text("Usuário ou senha inválida!").show().fadeOut(3000)

        event.preventDefault() //bloqueia o evento de submit

      }
      





    })







})