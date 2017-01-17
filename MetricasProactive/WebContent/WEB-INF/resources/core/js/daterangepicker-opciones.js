/**
 * 
 */
/*Fechas de inicio y fin; moment es el día actual.*/
var start = moment();
var end = moment();

/*Set de opciones para la parte de filtrar*/
var optionSet1 = {
	startDate : moment(),
	endDate : moment(),
	minDate : moment().subtract(3, 'months'),
	maxDate : moment(),
	dateLimit : {
		months: 3
	},
	showWeekNumbers : true,
	timePicker : false,
	ranges : {
		'Hoy' : [ moment(), moment() ],
		'Ayer' : [ moment().subtract(1, 'days'), moment().subtract(1, 'days') ],
		'Última semana' : [ moment().subtract(6, 'days'), moment() ],
		'Último mes' : [ moment().subtract(29, 'days'), moment() ],
		'Mes actual' : [ moment().startOf('month'), moment().endOf('month') ],
		'Mes anterior' : [ moment().subtract(1, 'month').startOf('month'),
				moment().subtract(1, 'month').endOf('month') ]
	},
	opens : 'left',
	buttonClasses : [ 'btn btn-default' ],
	applyClass : 'btn-small btn-primary',
	cancelClass : 'btn-small',
	format : 'YYYY/MM/DD',
	separator : ' a ',
	locale : {
		applyLabel : 'Filtrar',
		cancelLabel : 'Cancelar',
		fromLabel : 'De',
		toLabel : 'A',
		customRangeLabel : 'Personalizado',
		daysOfWeek : [ 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá' ],
		monthNames : [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
				'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
				'Diciembre' ],
		firstDay : 1,
		format : 'YYYY/MM/DD'
	}
};
/*Set de opciones para el calendario de comparar*/
var optionSet2 = {
	startDate : moment(),
	endDate : moment(),
	minDate : moment().subtract(3, 'months'),
	maxDate : moment(),
	dateLimit : {
		months: 3
	},
	showWeekNumbers : true,
	timePicker : false,
	ranges : {
		'Hoy' : [ moment(), moment() ],
		'Ayer' : [ moment().subtract(1, 'days'), moment().subtract(1, 'days') ],
		'Última semana' : [ moment().subtract(6, 'days'), moment() ],
		'Último mes' : [ moment().subtract(29, 'days'), moment() ],
		'Mes actual' : [ moment().startOf('month'), moment().endOf('month') ],
		'Mes anterior' : [ moment().subtract(1, 'month').startOf('month'),
				moment().subtract(1, 'month').endOf('month') ]
	},
	opens : 'left',
	buttonClasses : [ 'btn btn-default' ],
	applyClass : 'btn-small btn-primary',
	cancelClass : 'btn-small',
	format : 'YYYY/MM/DD',
	separator : ' a ',
	locale : {
		applyLabel : 'Comparar',
		cancelLabel : 'Cancelar',
		fromLabel : 'De',
		toLabel : 'A',
		customRangeLabel : 'Personalizado',
		daysOfWeek : [ 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá' ],
		monthNames : [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
				'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
				'Diciembre' ],
		firstDay : 1,
		format : 'YYYY/MM/DD'
	}
};