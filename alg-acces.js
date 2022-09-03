let accesLevel = parseInt(prompt("Nivel de acceso:"));
let accesCondicional = 0;

const RecognizeLevel = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
}
const menuLevelAcces = {
    one: 9095,
    two: 4329,
    three: 9913,
    four: 7916,
    five: 7198
}

if(accesLevel + accesCondicional == 1){
    let verifyLevelOne = prompt("Contraseña:")
    if(verifyLevelOne == 9095){
        console.log("Acceso permitido")
    }
    else{
        console.warn("Acceso denegado")
    }
}
if(accesLevel + accesCondicional == 2){
    let verifyLevelTwo = prompt("Contraseña:")
    if(verifyLevelTwo == 4329){
        console.log("Acceso permitido")
    }
    else{
        console.warn("Acceso denegado")
    }
}
if(accesLevel + accesCondicional == 3){
    let verifyLevelTwo = prompt("Contraseña:")
    if(verifyLevelTwo == 9913){
        console.log("Acceso permitido")
    }
    else{
        console.warn("Acceso denegado")
    }
}
if(accesLevel + accesCondicional == 4){
    let verifyLevelTwo = prompt("Contraseña:")
    if(verifyLevelTwo == 7916){
        console.log("Acceso permitido")
    }
    else{
        console.warn("Acceso denegado")
    }
}
if(accesLevel + accesCondicional == 5){
    let verifyLevelTwo = prompt("Contraseña:")
    if(verifyLevelTwo == 7198){
        console.log("Acceso permitido")
    }
    else{
        console.warn("Acceso denegado")
    }
}
