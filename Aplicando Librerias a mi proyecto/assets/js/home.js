nombreUsuario = document.getElementById("cuentaActual");

let usuarios = JSON.parse(localStorage.getItem("registroUsuarios"));

usuarios.forEach(usuario => {
    if(usuario.estadoSesion === "1"){
        // console.log("correro iniciado eres tu");
        nombreUsuario.textContent = usuario.nombre;
    }
    console.log(usuario.usuario);
});


/*Segundo Desafío utilizando funciones*/
  
function pedirDatos() {
    let cantIngrantes2 = parseInt(document.getElementById("cantidad").value);
    let integrantesTotales = [];
    for ( let i = 0; i < cantIngrantes2; i++) {
        integrantesTotales[i] = [prompt("Ingresa Autor: ")];
        integrantesTotales[i] = [prompt("Ingreso Titulo:")];
        integrantesTotales[i] = [prompt("Ingrese n° Páginas :")];
        integrantesTotales[i] = [prompt("Cargar archivo :")];
    }
  
  }
  document.getElementById("btnPedirDatos").onclick = pedirDatos;