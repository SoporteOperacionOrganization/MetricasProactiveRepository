<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<body class="nav-md">
	<div class="container body">
		<div class="main_container">
			<div
				class="${empty soeidSesion ? 'fondo_blanco col-md-3 left_col' : 'col-md-3 left_col'}">
				<div
					class="${empty soeidSesion ? 'fondo_blanco left_col scroll-view' : 'left_col scroll-view'}">
					<div class="navbar nav_title" style="border: 0;">
						<div class="site_title"> <img
							src="resources/Images/citibanamex_menu.png" alt="Citibanamex" />
						</div>
					</div>

					<div class="clearfix"></div>
					<!-- sidebar menu -->
					<div id="sidebar-menu"
						class="${empty soeidSesion ? 'oculto main_menu_side hidden-print main_menu' : 'main_menu_side hidden-print main_menu'}">
						<div class="menu_section">
							<ul class="nav side-menu">
								<sec:authorize access="hasAnyRole('ROLE_DIRECTOR')">
									<li class="${activo == 'general' ? 'active' : '' }"><a
										href="<c:url value='/general' />"><i class="fa fa-sitemap"></i>
											General</a></li>
								</sec:authorize>
								<c:forEach items="${segmentos}" var="segmento">
									<c:if test="${segmento.nombre == 'ATE'}">
										<li class="${activo == 'online' ? 'active' : '' }"><a
											href="<c:url value='/online' />"><i class="fa fa-laptop"></i>
												Online</a></li>
									</c:if>
									<c:if test="${segmento.nombre == 'OFFLINE'}">
										<li class="${activo == 'offline' ? 'active' : '' }"><a
											href="<c:url value='/offline' />"><i
												class="fa fa-pencil-square-o"></i> Offline</a></li>
									</c:if>
									<c:if test="${segmento.nombre == 'PYME'}">
										<li class="${activo == 'pyme' ? 'active' : '' }"><a
											href="<c:url value='/pyme' />"><i class="fa fa-users"></i>
												Pyme</a></li>
									</c:if>
									<c:if test="${segmento.nombre == 'BANCA EMPRESARIAL'}">
										<li class="${activo == 'empresarial' ? 'active' : '' }"><a
											href="<c:url value='/empresarial' />"><i
												class="fa fa-industry"></i> Empresarial</a></li>
									</c:if>
									<c:if test="${segmento.nombre == 'PYME OFFLINE'}">
										<li class="${activo == 'pymeoff' ? 'active' : '' }"><a
											href="<c:url value='/pymeOffline' />"><i
												class="fa fa-sticky-note-o"></i> Pyme Offline</a></li>
									</c:if>
								</c:forEach>
							</ul>
						</div>

					</div>
					<!-- /sidebar menu -->
				</div>
			</div>

			<!-- top navigation -->
			<div class="top_nav">
				<div class="nav_menu">
					<nav style="height: 72px">
						<div
							class="${empty soeidSesion ? 'no-mostrar nav toggle' : 'nav toggle'}"
							title="Menú">
							<c:if test="${not empty soeidSesion}">
								<a id="menu_toggle"><i class="fa fa-bars"></i></a>
							</c:if>
						</div>
						<c:if test="${empty soeidSesion}">
							<div class="navbar nav_title imagenTemp"
								style="border: 0; width: 40%">
								<a href="" class="site_title"> <img
									src="resources/Images/citibanamex_menu.png" alt="Citibanamex" />
								</a>
							</div>
						</c:if>
						<div style="color: #D7D7D7; font-size:24px ;top: 0%; padding-right: 10%"
							class="${empty soeidSesion ? 'nav navbar-middle navbar-sin-sesion' : 'nav navbar-middle'}">
							VISOR DE MÉTRICAS PROACTIVE
							
							</div>
						<ul style="top: 61%; padding-right: 15px"
							class="${empty soeidSesion ? 'no-mostrar nav navbar-nav navbar-right' : 'navbar-right'}">
							
							<li ><a href="javascript:;"
								class="${empty soeidSesion ? 'oculto  dropdown-toggle' : ' dropdown-toggle'}"
								data-toggle="dropdown" aria-expanded="false">${usuarioSesion.nombre}&nbsp;${usuarioSesion.apellidoPaterno}&nbsp;<span
									class=" fa fa-caret-down"></span>
							</a>
								<ul class="dropdown-menu  pull-right">
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

	<!-- Modal -->
			<div class="modal" id="popup" style="display: none;">

				<div class="modal-body" style="text-align: center; margin-left: 45%">
					<div style="margin-top: 40%; width: 30%">
						<img class="inicioImages" src="resources/Images/cargando.gif">
					</div>
				</div>
			</div>
			<!-- fin modal -->
</body>
</html>