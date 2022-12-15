"use strict";

/*Seleccionamos el documento completo, espera a que el documento este cargado al completo para ejecutar la función
si no, puede dar error porque no lo encuentra al no haberse cargado aún*/

$(document).ready(function () {

});

//JQuery usa los selectores de CSS
/*$(document).ready(function () {
	$('#result').html('1');
	$('.form-control').text('Modificando');
	$('#result').html('<em>Hola</em>');
	$('#result,.form-control').html('A la vez');
	$('.listado li').addClass('negrita');
	$('input[required]').addClass('rosa');
	$("input[placeholder*='nombre']").addClass('azul');
});*/

//Para hacer búsquedas método find()
/*$(document).ready(function () {
	console.log ($('.form-group').find("input[placeholder*='nombre']"));
});*/
/*
$(document).ready(function () {
	console.log ($('.form-group').children('span'));
});*/
/*
$(document).ready(function () {
	$('.form-group').on('click', function () {
		console.log(this);
		$(this).toggleClass('azul');
	});
});*/

//this es sobre el elemento que se hace el evento evento
//La ventaja de llamar al principal y luego subllamar al subelemento '.in', es que si el subelemento inicialmente no existe, no pasa nada porque $ se está haciendo sobre un elemento que sí existe '.cuadrado'
$(document).ready(function () {
	$('.cuadrado').on('click', '.in', function () {
		$(this).toggleClass('azul');
		$(this).parent().toggleClass('rosa');
	});
});

$(document).ready(function () {
	$('#example').on('click', 'button', function () {
		//let opcion = $('#example select option:selected');
		let opcion = $('#place option:selected');
		let valor = opcion.html();
		let price = opcion.data('price');
		if (price) {
			$('#result').html(valor + ' ' + price);
		} else {
			$('#result').html('');
		}
	});
});

//On change, cuando cambia algo
$(document).ready(function () {
	$('#example2').on('change', '#place2', function () {
		let opcion = $('#place2 option:selected');
		let valor = opcion.html();
		let price = opcion.data('price');
		if (price) {
			$('#result').html(valor + ' ' + price);
		} else {
			$('#result').html('');
		}
	});
});

//On change, cuando cambia algo
$(document).ready(function () {
	$('#escribir').on('keyup', 'input', function () {
		$('#result2').html('Tu nombre es: ' + $(this).val());
	});
});

//Eliminar el comportamiento por defecto
$(document).ready(function () {
	$('#enlace').on('click', 'a', function (e) {
		e.preventDefault();
		$('.cuadrado .in').parent().toggleClass('rosa');
		e.stopPropagation();// Para que no haga lo mismo en el resto de enlaces a
		console.log('Clica pero no cambia');
	});
});

$(document).ready(function () {
	$('#add-text').on('click', 'button', function () {
		let textToAdd = $('#add-text input').val();
		//Añadir lo que queramos que escriba
		let htmlToAdd = '<div class="item">' + textToAdd + '<div class="remove">&nbsp;X </div></div> ';
		//append permite agregar algo al final de 'ese' elemento, en este caso '#print-text'
		$('#print-text').append(htmlToAdd); // Seleccionar, colgar al final.
		//Equivalente
		$(htmlToAdd).appendTo('#print-text'); //Poner algo al final, colgado de.
		//Colgar en primer lugar 'prepend'
		//$('#print-text').prepend('5');
	});
	$('#print-text').on('click', '.remove', function () {
		//He de escuchar el elemento padre porque siempre existe, mientras que '.remove' no
		//$('#print-text .remove').on('click', function () {
		//Una vez que escucho el elemento padre, cualquier '.remove' añadida es considerada, ahora borro el elemento padre de ese '.remove' clicado
		$(this).parent().remove();
	});
});

$(document).ready(function () {
	$('.viajes').on('click', 'a', function (event) {
		//Al ser un enlace haría el comportamiento predeterminado del enlace, que no quiero en este caso
		event.preventDefault();
		//$(this).parent().find('.more-info').show();
		//Equivalente y con efectos
		/*$(this).closest('.viajes').find('.more-info').show(2000, function(){
			alert('Terminado');
		});*/
		//Alterna entre show() y hide()
		$(this).closest('.viajes').find('.more-info').toggle(2000);
	});
});

$(document).ready(function () {
	//Selecciono cuadrado
	$('#cuadrado1').on('click', function () {
		//Aplico animación en, en este caso el mismo cuadrado
		$(this).animate({
			opacity: 0.5,
			width: "50",
			left: "+=20"
		}, 'slow', function () {
			alert('animación terminada');
		});
	});
	$('#cuadrado2').on('click', function () {
		//Aplico animación en, en este caso el mismo cuadrado
		$(this).animate({
			opacity: 0.7,
			width: "+=50",
			height: "50"
		}, 'fast');
	});
});