
$("#Saluda").on("click", function() { Saludar(); });

function Saludar() {
    let timeout;
    timeout = setTimeout(alertFunc, 5000);  
  }
function alertFunc(){
    document.getElementById("Demo").innerHTML = "Busca un juego"
    //alert("Hello!");
  }



