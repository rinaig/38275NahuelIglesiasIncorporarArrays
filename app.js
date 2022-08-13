    //Se muestra el Usuario posibilidad de ingresar al juego mediante un Login o crear un nuevo usuario
function loguinDelJuego(){
    let ingresoJuego = Number(prompt("por favor escoge la opcion: \n \n1. Ingresar al Juego \n     (Ingresar usario y Pass)\n2. Crear Usuario y Pass \n     (Crear nuevo usuario y contraseña)"))


    //Se definen los datos que se encuentran dentro del Array.
    const usu1 = {nomUsuario: "Juan2384", passUsuGuardado: "PassUsu1"}
    const usu2 = {nomUsuario: "Alberto5689", passUsuGuardado: "PassUsu2"}
    const usu3 = {nomUsuario: "jorge2486", passUsuGuardado: "PassUsu3"}
    
    //Se define el array con 3 usuarios ya existentes.
    const listaUsuarios = [usu1, usu2,usu3];
   

    // Se crea la funcion para crear nuevo usuario. 
    function crearNuevoUsuario(){
            let ingresoNewNomUsuario = prompt("Ingrese su Nuevo nombre de usuario")
            let ingresoNewPassUsuario = prompt("Ingrese su Nueva Clave")
            listaUsuarios.push({nomUsuario: ingresoNewNomUsuario, passUsuGuardado: ingresoNewPassUsuario})
            alert("Recuerde su nombre de usuario Es : " + ingresoNewNomUsuario)
            alert( "YA ESTAS LISTO!!!! \n \nBienvenido a ¡ADIVINA ADIVINADOR! \n \nEl juego consiste en que tendras oportunidades para adivinar un numero entre un rango segun la dificultad que elijas \n \nTe deseamos mucha suerte! \n \n Pulsa aceptar para elegir el modo de Dificultad! ")
            logicaDelJuego()

            //ESTA OPCION ESTA CREADA PARA QUE SE PUEDA VER EN LA BASE DE DATOS QUE FUNCIONO EL PUSH
            for(const vistaCreacion of listaUsuarios){
                console.log(vistaCreacion.nomUsuario);
                console.log(vistaCreacion.passUsuGuardado);
            }}
   
// Si el Player elije opcion 1 entonces:
    if(ingresoJuego == 1){
    //ingresa nombre usuario y contraseña
        let UsuExistNomUsuario = prompt("Ingrese su nombre de usuario")
        let UsuExistPassUsuario = prompt("Ingrese su Clave")
    //recorre el array buscando dentro de datos el nombre de usuario y contraseña
        for(const datos of listaUsuarios){
        // si ambos1 coinciden da ingreso llamando a la logica del juego.
        if (datos.nomUsuario == UsuExistNomUsuario && datos.passUsuGuardado == UsuExistPassUsuario){
                alert("Bienvenido a ¡ADIVINA ADIVINADOR! \n \nEl juego consiste en que tendras oportunidades para adivinar un numero entre un rango segun la dificultad que elijas \n \nTe deseamos mucha suerte! \n \n Pulsa aceptar para elegir el modo de Dificultad!")
            logicaDelJuego()
            // cuando se termina el juego sale con el break
            break;           
            }
        // si nombre de usuario y contraseña no coinciden sale del juego  
         else{
            alert("Alguno de sus datos es incorrecto, por favor vuelva a intentarlo")
            break;}1
}}

//En el caso que elija en la primer opcion crear un usuario se llama directamente a la funcion crearNuevoUsuario. 
    if (ingresoJuego == 2){
        crearNuevoUsuario()
    }
}
//Se llama a la funcion loguin del juego. 
loguinDelJuego()

//Se crea la logica del juego. 
function logicaDelJuego(){


/// Esta funcion se define de manera global para usar en el codigo del While. Genera un numero aletario donde el minimo y el maximo se generan dentro de la eleccion de dificultad del juego. 
let num_system_aleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//En la siguiente funcion se define el nivel en el cual desea jugar el player.
function elegirDificultadjuego() {

    // Aqui se le da a elegir al jugador que ingrese el numero de nivel que quiere jugar y se define dicho nivel con el concepto dificultadJuego.  
    let dificultadJuego = Number(prompt("Escoje la Dificultad del juego: \n \n1. Facil \n     (Adivinar 1 numero del 1 al 10 con 5 Oportunidades)\n2. Media \n     (Adivinar 1 numero 1 al 15 con 4 Oportunidades)\n3. Dificil \n     (Adivinar 1 numero 1 al 20 con 3 Oportunidades)"))

    // En los siguientes 3 IF, se define la dificultad segun el valor anterior elegido para que ingrese en alguno de los 3 IF. 
    if (dificultadJuego == 1) {
        alert("Ha elegido el nivel de Dificultad Facil! \n \nExcelente Opcion para comenzar a Practicar! \n \nMUCHAS SUERTE!")
        // se llama a la funcion global num_system_aleatorio, donde se le pide genere el primer y ultimo numero segun cada if. 
        let primerNumero = 1;
        let ultimoNumero = 10;
        let numAleat = num_system_aleatorio(primerNumero,ultimoNumero);
        
        // Se genera dentro del IF la funcion Juego, en esta funcion se define el numero aleatorio devuelto anteriormente se llame numeroAleatdefinido y que el parametro oportunidadesDefinidas sea igual a un valor fijo. Y se pide a este if devuelva los valores de juego en un return.
        let juego = { numeroAleatDefinido: numAleat,oportunidadesDefinidas: 5 }
        return juego
    }

    else if (dificultadJuego == 2) {
        alert("Ha elegido el nivel de Dificultad Medio! \n \nTienes solo un 25% de probabilidades de Ganar! \n \nMUCHAS SUERTE!")
        let primerNumero = 1;
        let ultimoNumero = 15;
        let numAleat = num_system_aleatorio(primerNumero,ultimoNumero);
        let juego = { numeroAleatDefinido: numAleat,oportunidadesDefinidas: 4 }
        return juego
    }

    else if (dificultadJuego == 3) {
        let primerNumero = 1;
        let ultimoNumero = 20;
        let numAleat = num_system_aleatorio(primerNumero,ultimoNumero);
        let juego = { numeroAleatDefinido: numAleat,oportunidadesDefinidas: 3 }
        return juego
    }
    // En este ultimo IF se realiza un control, ya que si no es 1, 2 o 3 le diga elija esos numeros. 
    else if (dificultadJuego > 3) {
        alert("La opcion Ingresada es Incorrecta Debe ingresar un numero entre 1 y 3")
    }
}

// Se llama define que funcionDificultadJuego, ejecute la funcion. y el numero definido dentro de la funcion se define como numSystem y el valor es el objeto numeroAleatorioDefinido dentro de la funcion funcionDificultadJuego. Estas dos variables se definen globalmente para que ingresen dentro de los parametros requeridos dentro del while. 
let funcionDificultadJuego = elegirDificultadjuego()
let numSystem = funcionDificultadJuego.numeroAleatDefinido

//Se define en que digito comienzan las oportunidades
let oportunidades = 1


// El while indica que si oportunidades que comienza con 1 es igual o menor a las oportunidades definidas por el usuario se ejecute el While.
while (oportunidades <= funcionDificultadJuego.oportunidadesDefinidas) {
   

    //Comienza el While solicitando al Player que ingrese el numero a adivinar. 
    let numPlayer = Number(prompt("ingresa el numero que deseas adivinar! "))

    //Con este primer IF se verifica que si el numero aleatorio del sistema (numSystem) coincide y con el ingresado por el player (numPlayer) de ser asi  da el mensaje de felicitacion indicando el numero aleatorio y corta el juego con el Break 
    if (numSystem == numPlayer) {
        alert("GANASTE FELICITACIONES!!!!!! \n \nAdivinaste el numero secrerto es el " + numSystem + "\n \nTe invitamos a jugar nuevamente cuando lo desees")
        break;
    }  

    // con este If y los 4 Else se le da respuesta al Player de cuan cerca esta del numero, con 3 diferentes mensajes. Para ello resta el numero aleatorio menos el numero elegido. En este if puntual si el resultado es 3 o menor a 3 ya sea positivo o negativo, o las formulas de los siguientes IF, le indica un mensaje.
    if (numSystem - numPlayer >= -3 && numSystem - numPlayer <= 3) {
        // En el caso de este primer mensaje, le indica que esta a menos de 3 numeros de distancia y las oportunidades que le quedan, que surgen de Las oportunidades definidas por el Player ( - menos ) las oportunidades que genero el While. 
        alert("SIGUE ASI! Estas Muy muy cerca! \n \nEstas a menos de 3 numeros de distancia \n \nTe quedan " + (funcionDificultadJuego.oportunidadesDefinidas - oportunidades) + " oportunidades")
    }
    else if (numSystem - numPlayer >= -6 && numSystem - numPlayer <= -4) {
        alert("Un Esfuerzo mas y estaras muy cerca! \n \nEstas a menos de 6 numeros de distancia \n \nTe quedan " + (funcionDificultadJuego.oportunidadesDefinidas - oportunidades) + " oportunidades")
    }
    else if (numSystem - numPlayer <= 6 && numSystem - numPlayer >= 4) {
        alert("Un Esfuerzo mas y estaras muy cerca! \n \nEstas a menos de 6 numeros de distancia \n \nTe quedan " + (funcionDificultadJuego.oportunidadesDefinidas - oportunidades) + " oportunidades")
    }
    else if (numSystem - numPlayer >= 7 || numSystem - numPlayer <= -7) {
        alert("Debes esforzarte y acercarte mas! \n \nEstas a mas de 7 numeros de distancia \n \nTe quedan " + (funcionDificultadJuego.oportunidadesDefinidas - oportunidades) + " oportunidades")
    }
    // Incrementa la cantidad de veces que va corriendo el While. 
    oportunidades++
}

// Cuando las oportunidades del While sea mayor a a las oportunidades definidas por el usuario. Se acaba el juego. 
if (oportunidades > funcionDificultadJuego.oportunidadesDefinidas) {
    alert("¡¡¡GAME OVER!!! \n \nSe han agotado las oportunidades \n \n El numero secreto era el " + numSystem + " \n \n Sin embargo te esperamos a jugar nuevamente cuando quieras!")
}
}
    