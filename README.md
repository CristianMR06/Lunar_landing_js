# Lunar landing en HTML5

Los objetos estarán ubicados dentro de un DIV principal, como la aplicación siempre ocupará el 100% de la pantalla tanto la altura como el ancho, el fondo de la aplicación será de una imagen de “estrellas” que se repite, con esto se consigue que la aplicación se vea un poco más animada. Inicialmente el cliente había optado por un fondo solido de color negro.
El div principal está compuesto por cuatro div más. 
En el primer div están ubicado las Opciones del juego. Se ha utilizado una lista con imágenes una seguida de la otra que hace la función de botones. La primera imagen será la opción de iniciar la partida, la segunda pausara la partida y la tercera reanudará la partida. 

En el segundo div, está ubicada la nave espacial. La nave siempre estará centrada verticalmente, y tiene un tamaño adecuado para que se ajuste siempre al tamaño de la ventana.

En el tercer div, está ubicado el Control Panel. El Control panel le dará información al usuario acerca del Combustible representado en una barra que cambia de color y que si el combustible está por debajo del 15% se muestra la palabra "low fuel", la velocidad de la nave espacial en KM/h, y la altitud, que indicará la distancia restante a la superficie de la luna (en kilómetros).

En el último div del div principal, está ubicada la superficie de la luna.

Además de estos divs, se han añadido dos más con posiciones absolutas, en uno se encuentra un botón de ayuda, este botón le muestra unas breves instrucciones al usuario y la información acerca del desarrollo de la aplicación. 

# Mejoras
-El fondo de la aplicación ha pasado de ser un fondo solido de color negro a una imagen de estrellas.

-Las imágenes de los botones se han vuelto hacer, ya que el cliente quería los botones en color blanco pero pasó las imágenes con color negro y al ser el fondo oscuro no se veían correctamente.

-Las imágenes de la nave espacial y el gato, han tenido que ser retocadas, ya que las imágenes adjuntas por parte del cliente tenían un fondo blanco.

-Los botones tienen una animación que al pasar el curso por encima se escala el tamaño.

-Todos los objetos de la aplicación son responsive 

-Las instrucciones del juego están en dos versiones, ya que en el móvil se juega de una manera y en el teclado de otra.

<b>Nota:</b>
En los códigos CSS se han añadido una serie de atributos para hacer un degradado, sin embargo el validador no reconoce la sintaxis correctamente, y hay 4 líneas del código que provocan un error de validación.
