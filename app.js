//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 10;

while (numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
        //console.log(numeroSecreto);
    //Este código realiza la comparación
    if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario} Lo lograste en el intento #: ${intentos} `);
        break;
    } else {
        //Aumentamos el numero del contador
    intentos = intentos + 1;
    if (intentos > maximosIntentos) {
        alert(`Alcanzaste el numero maximo de ${maximosIntentos} intentos`);
        break;
    }
    //pistas para el usuario
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } 
        else {
            alert('El numero secreto es mayor');
        }
    
    }
}