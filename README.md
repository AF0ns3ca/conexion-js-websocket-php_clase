# JS avanzado: conexión de capa lógica del FrontEnd con BackEnd

**Autor** : Diego Alonso Molina (Full Stack Developer)

> En los archivos PHP hay comentarios bastante útiles para entender el funcionamiento de las clases.

> Para el primer uso, el "hola mundo" de la programación "distribuida", se tiene un ejemplo de sala de chat en el que un usuario escribe algo y se le manda a todos los demás usuarios conectados.

> Para usar el servicio de websocket de sala de chat antes mencionado, edite el archivo "xampp\daemons\sala_chat\SalaChatServer.php" y en la instanciación de la clase SalaChatServer indique la IP y el puerto en el que debe escuchar el servicio de sockets que se va a crear.

> Este archivo se debe mantener fuera de las carpetas "públicas" del servidor (esto es, aquellas a las que se puede acceder a través de apache/nginx/IIS/etc) y se ejecuta desde la línea de comandos de php.exe (Ejemplo: "C:\xampp\php\php.exe" -q C:\xampp\daemons\sala_chat\SalaChatServer.php). Solo se debe ejecutar una vez.

> En el archivo "htdocs\sala_chat\client.html", en el constructor de la clase JS WebSocket, configure la IP de la máquina donde está corriendo el servicio de sockets y el puerto donde está escuchando dicho servicio dentro de la máquina (por ejemplo ws://localhost:9000).

> Abra el archivo client.html en tantas pestañas de su navegador como desee, escriba algo en uno de ellos y verá cómo el texto enviado se recibe en el resto de pestañas.