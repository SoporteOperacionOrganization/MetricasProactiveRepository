<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Login</title>
<jsp:include page="../fragments/resources.jsp" />
</head>
<body>

	<jsp:include page="../fragments/header.jsp" />

	<div class="contenedor-login">
		<div class="login">
			<div class="formulario">
				<form id="loginform" role="form"
					action="${pageContext.request.contextPath}/j_spring_security_check"
					method="POST">
					<div class="campos">
						<div class="campo">
							<input id="Soeid" type="text" class="input" name="soeid"
								required="required" maxlength="7" value=""> <label
								for="Soeid" class="etiqueta">SOEID</label>
						</div>
						<div class="campo">
							<input id="login-password" maxlength="8" type="password"
								class="input" name="contrasena" required="required"> <label
								for="login-password" class="etiqueta">Contraseña</label>
						</div>
						<div class="boton">
							<input type="submit" class="btn btn-primary"
								value="Iniciar sesión" />
						</div>
					</div>
				</form>
			</div>
		</div>

		<c:if test="${param.error == 'true'}">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12">
						<div
							class="alert alert-danger alert-dismissible fade in text-center">
							<b>Error</b> <br />
							${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}
						</div>
					</div>
				</div>
			</div>
		</c:if>
	</div>
	<jsp:include page="../fragments/footer.jsp" />
	<script type='text/javascript'>
		$(document).ready(function() {
			$('#Soeid').mask('aa99999', {
				placeholder : ""
			});

			$('#Soeid').on('change invalid', function() {
				var soeidTextField = $('#Soeid').get(0);
				$('#Soeid').css('outline', '#FFFFFF');
				soeidTextField.setCustomValidity('');
				if (!soeidTextField.validity.valid) {
					soeidTextField.setCustomValidity('Campo obligatorio');
				}
			});

			$('#login-password').on('change invalid', function() {
				var contrasenaTextField = $('#login-password').get(0);
				$('#login-password').css('outline', '#FFFFFF');
				contrasenaTextField.setCustomValidity('');
				if (!contrasenaTextField.validity.valid) {
					contrasenaTextField.setCustomValidity('Campo obligatorio');
				}
			});
		});
	</script>
</body>
</html>