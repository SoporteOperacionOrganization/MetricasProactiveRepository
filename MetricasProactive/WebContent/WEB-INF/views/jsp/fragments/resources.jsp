<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<spring:url value="resources/Images/favicon.ico" var="favicon" />
<spring:url value="resources/css/bootstrap.css" var="bootstrapCss" />
<spring:url value="resources/css/bootstrap.min.css" var="bootstrapCssMin" />
<spring:url value="resources/css/font-awesome.min.css" var="fontAwesome" />
<spring:url value="resources/css/daterangepicker.css" var="dateRangePickerCSS" />
<spring:url value="resources/css/custom.min.css" var="customCSS" />
<spring:url value="resources/js/jquery.min.js" var="jquery" />
<spring:url value="resources/js/bootstrap.min.js" var="bootstrapJs" />
<spring:url value="resources/js/fastclick.js" var="fastclick" />
<spring:url value="resources/js/echarts.min.js" var="echarts" />
<spring:url value="resources/js/moment.min.js" var="momentMin" />
<spring:url value="resources/js/daterangepicker.js" var="dateRangePicker" />
<spring:url value="resources/js/bootstrap-progressbar.min.js" var="progressbar" />
<spring:url value="resources/js/jquery.sparkline.min.js" var="jquerySparkline" />
<spring:url value="resources/js/daterangepicker-opciones.js" var="dateRangePickerOpciones" />
<spring:url value="resources/js/generales.js" var="generales" />
<spring:url value="resources/js/graficas.js" var="graficas" />
<spring:url value="resources/js/jquery.maskedinput.min.js" var="maskedInput" />
    

<link href="${bootstrapCss}" rel="stylesheet" ></link>
<link href="${bootstrapCssMin}" rel="stylesheet" ></link>
<link href="${fontAwesome}" rel="stylesheet" ></link>
<link href="${dateRangePickerCSS}" rel="stylesheet">
<link href="${customCSS}" rel="stylesheet" ></link>
<link href="${favicon}" rel="shortcut icon"  type="image/x-icon"></link>
<link href="${favicon}" rel="icon" type="image/x-icon"></link>
<script src="${jquery}"></script>
<script src="${bootstrapJs}"></script>
<script src="${fastclick}"></script>
<script src="${echarts}"></script>
<script src="${momentMin}"></script>
<script src="${dateRangePicker}"></script>
<script src="${progressbar}"></script>
<script src="${jquerySparkline}"></script>
<script src="${dateRangePickerOpciones}"></script>
<script src="${graficas}"></script>
<script src="${generales}"></script>
<script src="${maskedInput}"></script>