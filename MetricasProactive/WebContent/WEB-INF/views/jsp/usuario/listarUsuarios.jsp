<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>LISTAR USUARIOS</h1>

<table class=" table-striped table-hover" style="font-size: 12px; width:100%;">
			<thead>
			<tr class="cabeceraTabla">
			<th>#</th>
				<th>SOEID</th>
				<th>Usuario</th>
				<th>Apellido paterno</th>
				<th>Apellido materno</th>
				<th>Perfil</th>
				<th>Segmento</th>
			</tr>
			</thead>
			<tbody>
			<c:forEach items="${usuarios}" var="usuario" varStatus="indice" >
				<tr>
				<td class="negrita">${indice.index + 1}</td>
					<td >${usuario.soeid}</td>
					<td >${usuario.nombre}</td>
					<td >${usuario.apellidoPaterno}</td>
					<td >${usuario.apellidoMaterno}</td>
					<td >${usuario.perfil.nombre}</td>
					<td >${usuario.segmento.nombre}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>

</body>
</html>