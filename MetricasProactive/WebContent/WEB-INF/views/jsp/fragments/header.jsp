<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- Meta, title, CSS, favicons, etc. -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Citibanamex | Visor de métricas Proactive</title>
<jsp:include page="../fragments/resources.jsp" />
</head>

<body class="nav-md">
	<div class="container body">
		<div class="main_container">
			<div class="col-md-3 left_col">
				<div class="left_col scroll-view">
					<div class="navbar nav_title" style="border: 0;">
						<a href="" class="site_title"> <img
							src="resources/Images/citibanamex_menu.png" alt="Citibanamex" />
						</a>
					</div>

					<div class="clearfix"></div>
					<!-- sidebar menu -->
					<div id="sidebar-menu"
						class="main_menu_side hidden-print main_menu">
						<div class="menu_section">
							<ul class="nav side-menu">
								<li class="active"><a><i class="fa fa-sitemap"></i>
										General</a></li>
								<li><a><i class="fa fa-sitemap"></i> Online</a></li>
								<li><a><i class="fa fa-sitemap"></i> Offline</a></li>
								<li><a><i class="fa fa-sitemap"></i> Pyme</a></li>
								<li><a><i class="fa fa-sitemap"></i> Empresarial</a></li>
								<li><a><i class="fa fa-sitemap"></i> Pyme Offline</a></li>
							</ul>
						</div>

					</div>
					<!-- /sidebar menu -->
				</div>
			</div>

			<!-- top navigation -->
			<div class="top_nav">
				<div class="nav_menu">
					<nav style="height: 25%">
						<div class="nav toggle" title="Menú">
							<a id="menu_toggle"><i class="fa fa-bars"></i></a>
						</div>
						<ul class="nav navbar-nav navbar-right">
							<li class=""><a href="javascript:;"
								class="user-profile dropdown-toggle" data-toggle="dropdown"
								aria-expanded="false">Jordi Orlando Velázquez <span
									class=" fa fa-angle-down"></span>
							</a>
								<ul class="dropdown-menu dropdown-usermenu pull-right">
									<li><a href="<c:url value='/logout' />"><i
											class="fa fa-sign-out pull-right"></i> Cerrar sesión</a></li>
								</ul></li>
						</ul>
					</nav>
				</div>
			</div>
			<!-- /top navigation -->


		</div>
	</div>
</body>
</html>