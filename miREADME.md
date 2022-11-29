# Notas 
## Estilos dentro del componente en react

``` js
      <Button
          style={{backgroundColor:"red"}}  // Propiedad de css sin guiones intermedios : "valor" 
          onClick={salir}                  // Evento click llama a la funcion salir declarada mas arriba
          className="btns "                // ClassName reemplaza a class  
          component={Link}                 // Navega entre paginas componente = {Link} to = "/inicio"
          to="/inicio"                     // Primero importa Link de react 

        >Salir
        </Button>
```

## Importar
``` js
import { Link, useNavigate } from "react-router-dom";

```


## Hook

``` js
import React { useState } from "react";

const Contador = () => {
  const [numero , setNumero] = useState (0);   //(0) Valor inicial de numero 
  const aumentar = () => {
    console.log ('mediste clik')
    setNumero(numero +1 )
  }


  return(
    <fragment>
      <h3> Primer componente {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>

    </fragment>

  );

}

export default Contador ;


```
