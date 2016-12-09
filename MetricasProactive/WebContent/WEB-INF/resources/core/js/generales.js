/**
 * 
 */

function redibujarGraficas() {
	var segmento = obtenerURL();

	switch (segmento){
			case "general" : 
				if (GeneralLlamadasBarras2 != null && GeneralLlamadasBarras2 != undefined) {
					GeneralLlamadasBarras2.resize();
				}
				if (echartPie != null && echartPie != undefined) {
					echartPie.resize();
				}
				break;
			case "empresarial" : break;
			case "online" : 
				
				break;
			case "offline" : break;
			case "pyme" : break;
			case "pymeOffline" : break;
			default : break;
		}
}
function recalcularAlto() {
	var alto = $(document).height();
	$(".left_col").css("min-height", alto);
}

function obtenerURL() {
	var url = window.location.href.split("/");
	var pagina = url[url.length - 1];
	return pagina;
}

function cambiarLabelFechaFiltro(inicio, fin) {
	$('#calendarioFiltro span').html(
			inicio.format('YYYY/MM/DD') + ' - ' + fin.format('YYYY/MM/DD'));
}
function cambiarLabelFechaComparativo(inicio, fin) {
	$('#calendarioComparativo span').html(
			inicio.format('YYYY/MM/DD') + ' - ' + fin.format('YYYY/MM/DD'));
}

function graficasIniciales() {
	var hoy = new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth() + 1;
	var yyyy = hoy.getFullYear();
	var segmento = obtenerURL();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	hoy = yyyy + '/' + mm + '/' + dd;
	
	switch (segmento){
		case "general" : 
			dibujarLlamadasTotalesGeneral(hoy, hoy);
			dibujarServicios(hoy, hoy, segmento);
			dibujarClientesFrecuentes(hoy, hoy, segmento);
			dibujarFamilias(hoy, hoy, segmento);
			break;
		case "empresarial" : break;
		case "online" : 
			dibujarConcurrencia(hoy, hoy);
			break;
		case "offline" : break;
		case "pyme" : break;
		case "pymeOffline" : break;
		default : break;
	}
}

$(document).ready(
		function() {
			recalcularAlto();
			graficasIniciales();
			$(".dropdown-toggle").dropdown();
			$("#comparativoLlamadasTotalesSegmentos").hide();

			$(window).on('resize', function() {
				redibujarGraficas();
				recalcularAlto();
			});
			$("#menu_toggle").on('click', function() {
				// redibujarGraficas();
			});
			cambiarLabelFechaFiltro(moment(), moment());

			$('#calendarioFiltro').daterangepicker(optionSet1);

			$('#calendarioFiltro')
					.on(
							'apply.daterangepicker',
							function(ev, picker) {
								var fechaInicio = picker.startDate
										.format('YYYY/MM/DD');
								var fechaFinal = picker.endDate
										.format('YYYY/MM/DD');
								var segmento = obtenerURL();
								dibujarFamilias(fechaInicio, fechaFinal,
										segmento);
								dibujarConcurrencia(fechaInicio, fechaFinal);
								dibujarServicios(fechaInicio, fechaFinal,
										segmento);
								dibujarClientesFrecuentes(fechaInicio,
										fechaFinal, segmento);

								if (segmento == 'general') {
									dibujarLlamadasTotalesGeneral(fechaInicio,
											fechaFinal);
								} else if (segmento == 'online') {
									dibujarLlamadasTotalesFamiliaSegmentos(
											fechaInicio, fechaFinal, 'ATE');
								}

								cambiarLabelFechaFiltro(picker.startDate,
										picker.endDate);
							});
			cambiarLabelFechaComparativo(moment(), moment());
			$('#calendarioComparativo').daterangepicker(optionSet2);

			$('#calendarioComparativo').on(
					'apply.daterangepicker',
					function(ev, picker) {
						var fechaInicioComparativo = picker.startDate
								.format('YYYY/MM/DD');
						var fechaFinalComparativo = picker.endDate
								.format('YYYY/MM/DD');
						dibujarLlamadasTotalesGeneralComparativo(
								fechaInicioComparativo, fechaFinalComparativo);

						cambiarLabelFechaComparativo(picker.startDate,
								picker.endDate);
					});
			$('#calendarioComparativo').on('cancel.daterangepicker',
					function(ev, picker) {
						console.log("cancel event fired");
					});

		});
