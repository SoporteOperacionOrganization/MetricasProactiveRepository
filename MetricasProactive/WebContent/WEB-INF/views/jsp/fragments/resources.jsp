<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<spring:url value="resources/css/bootstrap.css" var="bootstrapCss" />
<spring:url value="resources/css/bootstrap.min.css" var="bootstrapCssMin" />
<spring:url value="resources/css/font-awesome.min.css" var="fontAwesome" />
<spring:url value="resources/css/custom.min.css" var="customCSS" />
<spring:url value="resources/js/jquery.min.js" var="jquery" />
<spring:url value="resources/js/bootstrap.min.js" var="bootstrapJs" />
<spring:url value="resources/js/fastclick.js" var="fastclick" />
<spring:url value="resources/js/echarts.min.js" var="echarts" />

<link href="${bootstrapCss}" rel="stylesheet" ></link>
<link href="${bootstrapCssMin}" rel="stylesheet" ></link>
<link href="${fontAwesome}" rel="stylesheet" ></link>
<link href="${customCSS}" rel="stylesheet" ></link>
<script src="${jquery}"></script>
<script src="${bootstrapJs}"></script>
<script src="${fastclick}"></script>
<script src="${echarts}"></script>