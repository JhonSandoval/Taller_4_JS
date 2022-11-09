
    var numero = Math.floor(Math.random()*100)+1;
    var intentos = 1;
    
    
do{
    miNumero = prompt("Adivina el número magico entre y 1 y 100");
    if(numero>miNumero){
        document.write(intentos+") El número es: " + miNumero + " Es menos al numero buscado<br>");

    } else if(numero<miNumero){
        document.write(intentos+") El número es: " + miNumero + " Es Mayor al numero buscado<br>");

    } else {
        document.write(intentos+") El número es: " + Numero + " Felicidades<br>");
        break;
    }
    intentos++;

    if(intentos>6){
        document.write("Lo sentimos, no encontraste el numero mágico. el numero magico era: "+numero);
        break;
    }

} while(intentos<6)

console.log(numero)
