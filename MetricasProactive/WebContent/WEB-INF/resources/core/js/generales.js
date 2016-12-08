/**
 * 
 */

function redibujarGraficas() {
	if (echartBarLine != null && echartBarLine != undefined) {
		echartBarLine.resize();
	}
	if (echartPie != null && echartPie != undefined) {
		echartPie.resize();
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
			inicio.format('YYYY/MM/DD') + ' - '
					+ fin.format('YYYY/MM/DD'));
}
function cambiarLabelFechaComparativo(inicio, fin) {
	$('#calendarioComparativo span').html(
			inicio.format('YYYY/MM/DD') + ' - '
					+ fin.format('YYYY/MM/DD'));
}

$(document).ready(
		function() {
			console.log(obtenerURL());
			recalcularAlto();
			$(".dropdown-toggle").dropdown();
			$("#comparativoLlamadasTotalesSegmentos").hide();

			$(".sparkline_one").sparkline(
					[ 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5,
							4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6 ], {
						type : 'bar',
						height : '125',
						barWidth : 13,
						colorMap : {
							'7' : '#a1a1a1'
						},
						barSpacing : 2,
						barColor : '#26B99A'
					});

			$(".sparkline11").sparkline(
					[ 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4,
							3 ], {
						type : 'bar',
						height : '40',
						barWidth : 8,
						colorMap : {
							'7' : '#a1a1a1'
						},
						barSpacing : 2,
						barColor : '#26B99A'
					});

			

			$(window).on('resize', function() {
				redibujarGraficas();
				recalcularAlto();
			});
			$("#menu_toggle").on('click', function() {
				redibujarGraficas();
			});
			cambiarLabelFechaFiltro(moment(), moment());

			$('#calendarioFiltro').daterangepicker(optionSet1);
			$('#calendarioFiltro').on('show.daterangepicker', function() {
				console.log("show event fired 1");
			});
			$('#calendarioFiltro').on('hide.daterangepicker', function() {
				console.log("hide event fired 1");
			});
			$('#calendarioFiltro').on(
					'apply.daterangepicker',
					function(ev, picker) {
						var fechaInicio = picker.startDate.format('YYYY/MM/DD');
                        var fechaFinal = picker.endDate.format('YYYY/MM/DD');
                        dibujarLlamadasTotalesGeneral(fechaInicio,fechaFinal);
                        dibujarFamilias(fechaInicio,fechaFinal);
                        dibujarConcurrenciaSeg(fechaInicio,fechaFinal);
                        dibujarServiciosGeneral(fechaInicio,fechaFinal);
						console.log("apply event fired 1, start/end dates are "
								+ picker.startDate.format('MMMM D, YYYY')
								+ " to "
								+ picker.endDate.format('MMMM D, YYYY'));
						cambiarLabelFechaFiltro(picker.startDate,
								picker.endDate);
					});
			$('#calendarioFiltro').on('cancel.daterangepicker',
					function(ev, picker) {
						console.log("cancel event fired 1");
					});
			cambiarLabelFechaComparativo(moment(), moment());
			$('#calendarioComparativo').daterangepicker(optionSet2);
			$('#calendarioComparativo').on('show.daterangepicker', function() {
				console.log("show event fired");
			});
			$('#calendarioComparativo').on('hide.daterangepicker', function() {
				console.log("hide event fired");
			});
			$('#calendarioComparativo').on(
					'apply.daterangepicker',
					function(ev, picker) {
						var fechaInicioComparativo = picker.startDate.format('YYYY/MM/DD');
                        var fechaFinalComparativo = picker.endDate.format('YYYY/MM/DD');
                        dibujarLlamadasTotalesGeneralComparativo(fechaInicioComparativo, fechaFinalComparativo);

						console.log("apply event fired, start/end dates are "
								+ picker.startDate.format('MMMM D, YYYY')
								+ " to "
								+ picker.endDate.format('MMMM D, YYYY'));
						cambiarLabelFechaComparativo(picker.startDate,
								picker.endDate);
					});
			$('#calendarioComparativo').on('cancel.daterangepicker',
					function(ev, picker) {
						console.log("cancel event fired");
					});
		});