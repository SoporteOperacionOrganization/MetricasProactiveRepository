<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title>
<jsp:include page="../fragments/resources.jsp" />
</head>
<body>

	<jsp:include page="../fragments/header.jsp" />
	
	<div class="container" style="position: fixed; height: 100%; width: 100%">
	
		<form id="loginform" role="form" action="${pageContext.request.contextPath}/j_spring_security_check" method="POST">
			<div style="margin-top: 10px; text-align: center;" class="form-group">
				<div class="col-sm-12 controls" style="margin-left: 0%">
					<div class="logueo">
						<div
							style="border-bottom: 1px solid #0099FF; margin-bottom: 3.5%; text-align: left;">
							User <span style="color: #0099FF">Login</span>
						</div>

						<div style="display: none" id="login-alert" class="alert alert-danger col-sm-12"></div>
						<div style="margin-bottom: 5px; width: 100%; height: 3px" class="input-group">
							<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						    <input id="Soeid" type="text" class="form-control" name="soeid" value=""  autofocus="autofocus" placeholder="SOEID" required="required" maxlength="7">
						
						</div>
						<div style="margin-bottom: 5px; width: 100%" class="input-group">
							<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span> 
							<input id="login-password" maxlength="100" type="password" class="form-control" name="contrasena" placeholder="Password" required="required">
						</div>
						<br/>
						<div style="margin-top:10px; text-align:center;" class="form-group">

							<div class="col-sm-12 controls" style="margin-left: 0%">
								<input type="submit" class="btn btn-primary" style="width: 60px; height: 27px; font-size: 12px;" value="Validar"/>
							</div>
							
						</div>
					</div>
					<br/>
					
				</div>
				
			</div>
			<br/>
			<br/>
			<c:if test="${param.error == 'true'}">
				<div class="container-fluid">
   					<div class="row">
       					<div class="col-md-5 col-md-offset-4">
							<div style="font-weight:bold;" class="alert alert-danger alert-dismissible fade in text-center">
								Error!!!<br />
		                ${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}   
							</div>
						</div>
					</div>
				</div>
			</c:if>
			
		</form>
	
	</div>
	

</body>
</html>