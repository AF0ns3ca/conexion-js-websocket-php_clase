/**
 * @author Alvaro Fonseca Hernandez
 * @github
 */

//Funciones de utilidad
const $ = id => {return document.getElementById(id)};
const log = msg => {
    $("log").innerHTML += "<br>" + msg;
    //Cada vez que escribimos hacemos scroll vertical cuando sea necesario
    $("log").scrollTop = $("log").scrollHeight;
};

const onkey = event => {if (event.keyCode == 13) {send();}};

//Variable global para instanciar el WebSocket
let socket