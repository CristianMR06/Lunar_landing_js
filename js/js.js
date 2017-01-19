var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 5;
var g = 1.622;
var a = g; //a= -g es para motor encendido
var dt = 0.016683;
var timer;
var fuel = 100;
var timerFuel = null;
var motor = true;
var motorOff = true;


window.onload = function arrancarJuego() {


	document.getElementById("play").onclick = function(){play();};
	document.getElementById("pause").onclick = function(){pausar();};
	document.getElementById("reiniciar").onclick = function(){reiniciar();};
	document.getElementById("volver_jugarP").onclick = function(){reiniciar();};
	document.getElementById("volver_jugar").onclick = function(){reiniciar();};
	document.getElementById("boton_ayuda").onclick = function(){ayuda();};
	document.getElementById("como_jugar").onclick = function(){ayuda();};

	document.getElementById("cm_juega_menu").onclick = function(){cm_juega_menu();};
	document.getElementById("acerca_menu").onclick = function(){acerca_menu();};
	document.getElementById("botoncerrar").onclick = function(){cerrarayuda();};


	//Empezar a mover nave
	start();

	//Encender o apagar moteres al hacer clic en la pantalla
	document.onclick = function(){
		if (a==g){
			encenderMotor();
		}else {
			apagarMotor();
		}
	}

	//Botones del juego
	addEventListener("keydown", function(event) {
		
		//Encender motor con la barra espaciadora 
		if (event.keyCode == 32){ 
			encenderMotor();
		
		//Pausar el juego con la tecla P
		}else if (event.keyCode == 80){
			if (motor == true){
				motor = false;
				pausar();
			}else if (motor == false){
				motor = true;
				play();
			}

		//Mostrar ayuda con la tecla A
		}else if (event.keyCode == 65){
			if (motor == true){
				motor = false;
				ayuda();
			}else if (motor == false){
				play();
			}
		}

		//Reinciar partida con la tecla R
		else if (event.keyCode == 82){
			reiniciar();
		// M Acerca de
		}
	});

	// Apagar motor al dejar de pulsar la barra espaciadora
	addEventListener("keyup", function(event) {
		event.keyCode == 32;
		apagarMotor();
	});

}//TERMINA EL WINDOW.ONLOAD


//Funcion para Empezar Juego
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

//Apaga la nave
function stop(){
	clearInterval(timer);
}

//Funcion actualizar combustible
function actualizarfuel(){
	if (fuel > 0 || y > 74){
		fuel -= 1;
		document.getElementById("fuel").style.width = fuel+"%";

		if (fuel < 15) {
		document.getElementById("lowFuel").style.display="block";
		}

	}else{		
		motor = false;
		apagarMotor();
	}
}	

//Funcion para que caiga la nave a traves de la pantlla
function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=(75-y).toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y <= 5){
		a = g;
		v = 1;

	}else if (y<75){ 
		document.getElementById("zona_nave").style.top = y+"%"; 

	}else{ 
		stop();
		finalizarJuego();
	}	
}

//Funcion finalizar juego
function finalizarJuego() {
	if (v>5) {		
		document.getElementById("imgNave").src="img/nave_rota.gif";
		document.getElementById("cat").src="img/cattriste.gif";
		document.getElementById("perdiste").style.display="block";
		document.getElementById("pause").style.pointerEvents='none';
		document.getElementById("altura").innerHTML=0.00.toFixed(2);
		motor=false;
		stop();
		apagarMotor();
	
	}else{
		document.getElementById("ganaste").style.display="block";
		document.getElementById("pause").style.pointerEvents='none';
		document.getElementById("altura").innerHTML=0.00.toFixed(2);
		motor=false;
		stop();
		apagarMotor();
	}
}

//Funcion al encender el motor
function encenderMotor() {
	if (motor == true){
		a=-g;
		document.getElementById("imgMotor").style.display="block";
		
		if (timerFuel==null) { 
			timerFuel=setInterval(function(){ actualizarfuel(); }, 100);
		}
	}
}

//Funcion al apagar el motor
function apagarMotor() {
	if (motorOff == true){
		a = g;
		document.getElementById("imgMotor").style.display="none";
		clearInterval(timerFuel);
		timerFuel=null;
	}
}

//Funcion del boton play
function play() {
	motor=true;
	document.getElementById("pause").style.display="inline";
	document.getElementById("play").style.display="none";
	document.getElementById("juego_pausado").style.display="none";
	document.getElementById("ayuda").style.display="none";
	document.getElementById("boton_ayuda").style.pointerEvents='auto';
	start();
	encenderMotor();
}

//Funcion del boton pause
function pausar() {
	motor=false;
	document.getElementById("pause").style.display="none";
	document.getElementById("ayuda").style.display="none";
	document.getElementById("play").style.display="inline";
	document.getElementById("juego_pausado").style.display="block";
	stop();
	apagarMotor();
}

//Funcion del boton reiniciar
function reiniciar(){
	y = 10;
 	v = 5;
 	a = -g;
	fuel=100;
	motor = true;
	motorOff = true;

	document.getElementById("fuel").style.width = fuel+"%";
	document.getElementById("juego_pausado").style.display="none";
	document.getElementById("lowFuel").style.display="none";
	document.getElementById("ayuda").style.display="none";
	document.getElementById("ganaste").style.display="none";
	document.getElementById("perdiste").style.display="none";
	document.getElementById("boton_ayuda").style.pointerEvents='auto';
	document.getElementById("play").style.pointerEvents='auto';
	document.getElementById("pause").style.pointerEvents='auto';
	document.getElementById("imgNave").src="img/nave1.png";
	document.getElementById("cat").src="img/cat230x256.png";

	stop();
	start();
}

//Funcion div ayuda
function ayuda(){
	motor=false;
	stop();
	apagarMotor();
	document.getElementById("pause").style.display="none";
	document.getElementById("play").style.display="inline";
	document.getElementById("juego_pausado").style.display="none";
	document.getElementById("ganaste").style.display="none";
	document.getElementById("perdiste").style.display="none";
	document.getElementById("cm_juega").style.display="block";
	document.getElementById("acerca_").style.display="none";
	document.getElementById("ayuda").style.display="block";

	document.getElementById("boton_ayuda").style.pointerEvents='none';
}

//Funcion div ¿Cómo se juega?
function cm_juega_menu(){
	document.getElementById("cm_juega").style.display="block";
	document.getElementById("acerca_").style.display="none";
	document.getElementById("cm_juega_menu").style.background="#2a90af";
	document.getElementById("acerca_menu").style.background="#333";

}

//Funcion div "Acerca de"
function acerca_menu(){
	document.getElementById("acerca_").style.display="block";
	document.getElementById("cm_juega").style.display="none";
	document.getElementById("acerca_menu").style.background="#2a90af";
	document.getElementById("cm_juega_menu").style.background="#333";
}

function cerrarayuda(){
	play();
}