let data_initialnick = prompt("Ingrese su usuario");
let data_edad = parseInt(prompt("Ingrese su edad"));
let data_country = prompt("Ingrese su nacionalidad");
let passwordDataServer = prompt("Ingrese su contraseña");

let data_usernick = ("@" + data_initialnick);
const userBlock = {
    nombreDeUsuario: data_usernick,
    edadUsuario: data_edad,
    nacionalidad: data_country,
    pass: passwordDataServer
}

if(userBlock.edadUsuario < 18){
    alert("Eres menor de edad.")
}
