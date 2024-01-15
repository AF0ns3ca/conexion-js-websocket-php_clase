/**
 * @author Alvaro Fonseca Hernandez
 * @github
 */

//Funciones de utilidad
const $ = (id) => {
  return document.getElementById(id);
};
const log = (msg) => {
  $("log").innerHTML += "<br>" + msg;
  //Cada vez que escribimos hacemos scroll vertical cuando sea necesario
  $("log").scrollTop = $("log").scrollHeight;
};

const onkey = (event) => {
  if (event.keyCode == 13) {
    send();
  }
};

//Variable global para instanciar el WebSocket
let socket;

//Funcion que se ejecuta al cargar la pagina
const init = () => {
  //Creamos el WebSocket
  const host = "ws://localhost:9000";
  try {
    socket = new WebSocket(host);

    //Cuando se abre la conexion
    socket.onopen = function (msg) {
      log("Bienvenido/a - estado: " + this.readyState);
    };
    //Cuando llega un mensaje
    socket.onmessage = (msg) => {
      log("Recibido: " + msg.data);
    };
    //Cuando se cierra la conexion
    socket.onclose = function (msg) {
      log("Desconectado - estado: " + this.readyState);
    };
  } catch (ex) {
    log("ex");
  }
};

//Funcion que se ejecuta al pulsar el boton de enviar
const send = () => {
  //Cogemos el texto del input
  let txt, msg;
  msg = $("msg").value;
  txt = $("msg");
  //Si no esta vacio
  if (!msg) {
    alert("El mensaje no puede estar vacio");
    return;
  }
  txt.value = "";
  txt.focus();
  try{
    socket.send(msg);
    log("Enviado: " + msg);
  } catch(ex){
    log(ex);
  }
};

const quit = () => {
  if (socket != null) {
    log("Desconectado...");
    socket.close();
    socket = null;
  }
};

const reconnect = () => {
  //Cerramos la conexion
  socket.close();
  //Creamos una nueva
  init();
};
