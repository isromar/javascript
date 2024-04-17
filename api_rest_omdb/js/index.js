"use strict";
//Valor de mi API
let miApikey = "eafe5c8e";
let optionSelected = "";
let titleValue = "";
let yearValue = "";

$(document).ready(function () {
	//Usa jQuery effects para esconder el mensaje de error si hay
	$("#mensajeError").hide();

	//Escucha cuando se cambia la opción del desplegable
	$('#container').on('change', 'select', function () {
		optionSelected = $(this).find('option:selected').val();
	});

	//Escucha cuando se pincha el botón 'buscar'
	$('#container').on('click', '#searchButton', function (event) {
		event.preventDefault();
		//Usa jQuery effects para cambiar valores css del id #instrucciones
		$('#instrucciones').animate({
			opacity: 0.25
		}, 3000);
		//Vacía los resultados
		$('#resultado').empty();
		//Lee los valores de los dos input
		titleValue = $(this).parent().find("#titulo").val();
		yearValue = $(this).parent().find("#anyo").val();
		//Comprueba si se ha escrito algo en el input #titulo
		if (titleValue != "") {
			loadMovies();
		}
		else {
			//Usa jQuery effects para mostrar el mensaje de error
			$('#mensajeError').html('Pon un título para buscar').show();
		}
	});
});

function loadMovies() {
	//Vacía los resultados
	$('#resultado').empty();

	//Hace una llamada a OMDB-API con la url y los datos
	$.ajax({
		url: "https://www.omdbapi.com/",
		data: {
			apikey: miApikey,		//mi api key
			s: titleValue,			//título del input
			type: optionSelected,	//opción del desplegable
			y: yearValue			//año del input
		},
		dataType: "jsonp",
		success: showMovies,
		error: function (xhr, status, error) {
			$("#mensajeError").html("Error: " + error + " " + xhr.status + " " + xhr.statusText)
		}
	});
}

//Muestra las peliculas a partir de la respuesta del servidor
function showMovies(response) {
	//Comprueba si llega algún resultado
	if (response.Response == 'False') {
		let output = response.Error;
		//Usa jQuery effects para mostrar el mensaje de error
		$('#mensajeError').html(output).show();
	} else {
		//Usa jQuery effects para esconder el mensaje de error si hay
		$('#mensajeError').hide();
		//Recorre el response recibido con key=Search para ver las películas/series
		for (let movies in response.Search) {
			let oneMovie = response.Search[movies];
			//Hace una llamada a OMDB-API con el valor del imdb de una película/serie concreta
			$.ajax({
				url: "https://www.omdbapi.com/",
				data: {
					apikey: miApikey,	//mi api key
					i: oneMovie.imdbID,	//es el valor del imdb
					y: yearValue		//el año del input
				},
				dataType: "jsonp",
				success: showMovieDetails,
				error: function (xhr, status, error) {
					$("#mensajeError").html("Error: " + error + " " + xhr.status + " " + xhr.statusText)
				}
			});
		}
	}
}

//Muestra los detalles de una película/serie
function showMovieDetails(response) {
	//Contiene información de la película/serie
	let output = `
			<div class="card col-xl-3 col-md-4 col-sm-6">
				<img class="card-img-top img-fluid" src=${response.Poster} alt="Póster">
				<h5>${response.Title} </h5>
				<h6> Año: ${response.Year} </h6>
				<span class="card-text"> Género: ${response.Genre} </span>
				<span class="card-text"> Director: ${response.Director} </span>
				<span class="card-text"> Actores: ${response.Actors} </span>
				<span class="card-text"> Country: ${response.Country} </span>
				<span class="card-text"> Duración: ${response.Runtime} </span>
				<span class="card-text"> Argumento: ${response.Plot} </span>
			</div>`;

	//Añade el output al id #resultado
	$('#resultado').append(output);

	//Si la imagen no existe la sustituye por otra
	$('#container').find('img').on('error', function () {
		$(this).attr('src', 'https://cdn.wpmeducation.com/53544f/41cd025f52/default.jpg');
	});
}
