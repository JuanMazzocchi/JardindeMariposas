  


 
function validacion() 
{
    valor = document.getElementById("nombre").value;
    ape = document.getElementById("apellido").value;
    ema = document.getElementById("email").value;
    zon = document.getElementById("zona").value;
    if( valor == null || valor.length == 0) 
    {
        
        document.getElementById('mensaje').innerHTML = "Tenes que completar el Nombre!";
        elemento = document.getElementById('nombre');
        elemento.focus();
        
        return false;
    }else if (ape== null || ape.length== 0 )
    {
      document.getElementById('menApe').innerHTML = "Tenes que completar el Apellido!";
      elemento = document.getElementById('apellido');
      elemento.focus();
        
      return false;
    }else if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)(?:|.ar||)+$/.test(ema)))
  {   document.getElementById('menEma').innerHTML = "No es una direccion de email correcta" ;
        
                 elemento = document.getElementById('email');
                 elemento.value = '';
                 elemento.focus();
        
                 return false; 
  } else if ( zon == null || zon.length == 0) 
     {
        
         document.getElementById('menZona').innerHTML = "Tenes que Poner alguna Zona!";
         elemento = document.getElementById('zona');
         elemento.focus();
        
         return false;
     } else
      {return true}
              
}
 


function nece(event){

 var id = event.currentTarget.getAttribute("id")

 var x = document.getElementsByClassName(id);

 document.getElementById("necesarias").innerHTML =  x[0].innerHTML;

 

}

